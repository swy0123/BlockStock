import _thread
import json
import math
import os
import time

import pandas as pd
from datetime import datetime, timedelta
import schedule
from apscheduler.schedulers.background import BackgroundScheduler
import requests
from sqlalchemy import func

from common.conn import engineconn
from domain.contest.models.contest import Contest, Participate, Tactic
from domain.contest.models.trade import Trade

sched = BackgroundScheduler(timezone='Asia/Seoul')

engine = engineconn()
session = engine.sessionmaker()


def contest_thread(participate: Participate):
    contest_participate = participate

    engine = engineconn()
    session_thread = engine.sessionmaker()

    print(real_data)

    def cal_now_stock_cnt():
        # 이제까지 매매한 내용 보면서 buy일 때는 trade_cnt 더해주기
        sell_cnt = (session_thread.query(func.sum(Trade.trade_cnt))
                    .filter(Trade.participate_id == contest_participate.id)
                    .filter(Trade.trade_type == 'sell')
                    .one()[0] or 0)

        buy_cnt = (session_thread.query(func.sum(Trade.trade_cnt))
                   .filter(Trade.participate_id == contest_participate.id)
                   .filter(Trade.trade_type == 'buy')
                   .one()[0] or 0)

        return sell_cnt, buy_cnt

    def cal_now_stock_cost():
        sell_sum = (session.query(func.sum(Trade.trade_cnt * Trade.trade_cost))
                    .filter(Trade.participate_id == contest_participate.id, Trade.trade_type == "sell")
                    .one()[0] or 0)

        buy_sum = (session.query(func.sum(Trade.trade_cnt * Trade.trade_cost))
                   .filter(Trade.participate_id == contest_participate.id, Trade.trade_type == "buy")
                   .one()[0] or 0)

        return sell_sum, buy_sum
    def cur_data(data_type: int):
        # 마지막 시, 고, 저, 종
        return real_data.iloc[-1][f'{data_type}']

    def get_recent_indicators(range_type: str, scope: int, data_type: int, criteria: str):
        recent_indicator_data = None

        range_type = "term"

        recent_scope_data = real_data.iloc[-15 * scope:]
        if criteria == 'avg':
            recent_indicator_data = recent_scope_data[f'{data_type}'].mean()

        elif criteria == 'max':
            recent_indicator_data = recent_scope_data[f'{data_type}'].max()

        elif criteria == 'min':
            recent_indicator_data = recent_scope_data[f'{data_type}'].min()

        return recent_indicator_data

    def buy(param: int):

        # param 들어온 개수만큼 살 수 있는지 확인
        if param * real_data.iloc[-1]['4'] < contest_participate.result_money:
            db_trade = Trade(contest_id=contest_participate.contest_id,
                             participate_id=contest_participate.id,
                             cost=real_data.iloc[-1]['4'],
                             trade_type="buy",
                             trade_at=datetime.now(),
                             trade_cnt=param,
                             profit_and_loss=0,
                             trade_cost=real_data.iloc[-1]['4'])

        if db_trade:
            contest_participate.result_money -= (db_trade.cost * db_trade.trade_cnt)

            (session_thread.query(Participate).filter(Participate.id == contest_participate.id).
             update({'result_money': contest_participate.result_money}))

            session_thread.add(db_trade)
            session_thread.commit()

    def sell(param: int):
        now_asset = session_thread.get(Participate, contest_participate.member_id).result_money

        sell_cnt, buy_cnt = cal_now_stock_cnt()
        print(">>>>>>>>>>>>>>> now_stock_cnt: ", sell_cnt, buy_cnt)

        now_stock_cnt = buy_cnt - sell_cnt

        # param 들어온 수만큼 팔 수 있는지 확인
        if now_stock_cnt != 0 and param <= now_stock_cnt:
            now_asset += param * real_data.iloc[-1]['4']

            # 현재 보유 주식 수량
            # now_stock_cnt -= param
            # buy_sum: 'buy 할 때, param * 그 당시 종가'의 합
            # sell_sum: 'sell 할 때, param * 그 당시 종가'의 합
            sell_sum, buy_sum = cal_now_stock_cost()

            print(">>>>>>>>>>>>>sell_sum, buy_sum: ", sell_sum, " ", buy_sum)
            buy_avg = buy_sum / buy_cnt
            sell_avg = 0

            if sell_cnt != 0:
                sell_avg = sell_sum / sell_cnt

            db_trade = Trade(contest_id=contest_participate.contest_id,
                             participate_id=contest_participate.id,
                             cost=real_data.iloc[-1]['4'],
                             trade_type="sell",
                             trade_at=datetime.now(),
                             trade_cnt=-param,
                             profit_and_loss=(buy_avg - sell_avg) * param,
                             trade_cost=real_data.iloc[-1]['4'])

        if db_trade:
            # trade_info 저장하기
            # 사용자 자산 현황(participate.result_money) 변경하기
            # participate.result_money update 해주기
            # participate.result_money += (trade_info.cost * trade_info.trade_cnt)

            contest_participate.result_money += (db_trade.cost * db_trade.trade_cnt)

            (session_thread.query(Participate).
             filter(Participate.id == contest_participate.id).
             update({'result_money': contest_participate.result_money}))

            session_thread.add(db_trade)
            session_thread.commit()

    def asset(percent):
        tmp_asset = math.ceil(contest_participate.result_money / 100 * percent)
        return math.ceil(tmp_asset / real_data.iloc[-1]['4'])

    def reserve(percent):
        now_stock_cnt = cal_now_stock_cnt()
        return math.ceil(now_stock_cnt / percent)

    tactic_python_code = (session_thread.query(Tactic.tactic_python_code).
                          outerjoin(Participate, Participate.tactic_id == Tactic.id).
                          filter(Participate.id == participate.id).
                          one())[0]

    # print(tactic_python_code)
    print("====================================")
    # exec("print(\">>>>>>>>>>>>>>>>>>>> asset: \", buy(asset(10)))")
    # exec("\"\"\"if (cur_data(5)) < (get_recent_indicators(\"term\", 1, 5, \"max\")): buy((asset(10))) if (cur_data(5)) > (get_recent_indicators(\"term\", 1, 5, \"max\")): sell((reserve(10)))\"\"\"")
    exec(tactic_python_code)


# 9시부터 15시까지 1분 마다 실행하는 것으로 바꾸기
@sched.scheduled_job('interval', seconds=60, id='remove_inactive_image')
def check_contest():
    # DB에 있는 contest 조회
    # 대회 목록 봐서 start_time의 YYYY.MM.DD HH:MM == now의 YYYY.MM.DD HH:MM 이 되면 대회 시작!
    now_formatted = (datetime.now() + timedelta(minutes=30)).strftime('%Y-%m-%d %H:%M')

    contest = session.query(Contest).where(
        func.date_format(Contest.start_time, '%Y-%m-%d %H:%i') == now_formatted).all()

    # 시작 30분 전인 대회 찾기
    if contest:
        cur_contest = contest[0]
        print(cur_contest.start_time, " ", cur_contest.id, " ", cur_contest.option_code)
        # 참여하는 사람들
        participates = session.query(Participate).filter(Participate.contest_id == cur_contest.id).all()

        start_contest(contest_info=cur_contest,
                      participates=participates)

        session.commit()
        session.close()


sched.start()


def start_contest(contest_info: Contest,
                  participates: Participate):
    global real_data

    # 실시간 데이터 저장할 변수
    real_data = pd.DataFrame()

    headers = {"content-type": "application/json"}
    body = {"grant_type": "client_credentials",
            "appkey": os.environ["HT_APP_KEY"],
            "appsecret": os.environ["HT_APP_SECRET"]}

    TOKEN_URL = f"{os.environ['HT_BASE_URL']}/{os.environ['HT_TOKEN_PATH']}"

    res = requests.post(TOKEN_URL, headers=headers, data=json.dumps(body))
    res.text

    ACCESS_TOKEN = res.json()["access_token"]

    URL = f"{os.environ['HT_BASE_URL']}/{os.environ['HT_STOCK_PATH']}"

    headers = {"Content-Type": "application/json",
               "authorization": f"Bearer {ACCESS_TOKEN}",
               "appKey": os.environ["HT_APP_KEY"],
               "appSecret": os.environ["HT_APP_SECRET"],
               "tr_id": "FHKST01010100"}

    params = {
        "fid_cond_mrkt_div_code": "J",
        "fid_input_iscd": [contest_info.option_code]
    }

    def get_real_time_stock(URL, headers, params):
        res = requests.get(URL, headers=headers, params=params)
        # 여기에서 real_data에 데이터 담아둬야됨

        current_data = {'2': float(res.json()['output']['stck_oprc']),  # 시가
                        '3': float(res.json()['output']['stck_hgpr']),  # 고가
                        '4': float(res.json()['output']['stck_lwpr']),  # 저가
                        '5': float(res.json()['output']['stck_prpr'])  # 종가
                        }
        return current_data

    get_real_time_stock(URL, headers, params)

    # 스케줄러에 작업 추가
    schedule.every(1).seconds.do(get_real_time_stock, URL, headers, params)

    thread_last_executed = datetime.now()

    while datetime.now() < contest_info.end_time:
        current_data = get_real_time_stock(URL, headers, params)
        real_data = real_data.append(current_data, ignore_index=True)

        # 멀티스레드
        # 대회 알고리즘 실행은 15초마다
        if (datetime.now() - thread_last_executed).seconds >= 15:
            thread_last_executed = datetime.now()
            for participate in participates:
                _thread.start_new_thread(contest_thread, (participate,))

        schedule.run_pending()
        time.sleep(1)  # 부하가 안생길 만큼의 초
