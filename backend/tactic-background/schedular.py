import _thread
import json
import math
import os
import time
import pandas as pd
import requests
import schedule
from sqlalchemy import func, desc
from common.conn import engineconn
from datetime import datetime, timedelta
from domain.contest.models.trade import Trade
from apscheduler.schedulers.background import BackgroundScheduler
from domain.contest.models.contest import Contest, Participate, Tactic, ContestRealTime

sched = BackgroundScheduler(timezone='Asia/Seoul')

engine = engineconn()


def contest_thread(participate: Participate):
    print("=============contest_thread===============", participate.member_id)

    session_thread = engine.sessionmaker()

    real_data = (session_thread.query(ContestRealTime.open,
                                      ContestRealTime.high,
                                      ContestRealTime.low,
                                      ContestRealTime.close,
                                      ContestRealTime.vol).
                 filter(ContestRealTime.contest_id == participate.contest_id).
                 order_by(desc(ContestRealTime.created_at)))

    real_data = pd.DataFrame(real_data.all(), columns=['2', '3', '4', '5', '6'])


    def cal_now_stock_cnt():
        # 이제까지 매매한 내용 보면서 buy일 때는 trade_cnt 더해주기
        sell_cnt = (session_thread.query(func.sum(Trade.trade_cnt))
                    .filter(Trade.participate_id == participate.id)
                    .filter(Trade.trade_type == 'sell')
                    .one()[0] or 0)

        buy_cnt = (session_thread.query(func.sum(Trade.trade_cnt))
                   .filter(Trade.participate_id == participate.id)
                   .filter(Trade.trade_type == 'buy')
                   .one()[0] or 0)

        return sell_cnt, buy_cnt

    def cal_now_stock_cost():
        sell_sum = (session_thread.query(func.sum(Trade.trade_cnt * Trade.trade_cost))
                    .filter(Trade.participate_id == participate.id, Trade.trade_type == "sell")
                    .one()[0] or 0)

        buy_sum = (session_thread.query(func.sum(Trade.trade_cnt * Trade.trade_cost))
                   .filter(Trade.participate_id == participate.id, Trade.trade_type == "buy")
                   .one()[0] or 0)

        return sell_sum, buy_sum

    def cur_data(data_type: int):
        # 마지막 시, 고, 저, 종
        return real_data.iloc[0][f'{data_type}']

    def get_recent_indicators(range_type: str, scope: int, data_type: int, criteria: str):
        recent_indicator_data = None

        range_type = "term"

        recent_scope_data = real_data.iloc[:scope]

        if criteria == 'avg':
            recent_indicator_data = recent_scope_data[f'{data_type}'].mean()

        elif criteria == 'max':
            recent_indicator_data = recent_scope_data[f'{data_type}'].max()

        elif criteria == 'min':
            recent_indicator_data = recent_scope_data[f'{data_type}'].min()

        return recent_indicator_data

    def buy(param: int):

        # param 들어온 개수만큼 살 수 있는지 확인
        if param * real_data.iloc[0]['5'] < participate.result_money:
            db_trade = Trade(contest_id=participate.contest_id,
                             participate_id=participate.id,
                             cost=real_data.iloc[0]['5'],
                             trade_type="buy",
                             trade_at=datetime.now(),
                             trade_cnt=param,
                             profit_and_loss=0,
                             trade_cost=real_data.iloc[0]['5'])

            if db_trade:
                participate.result_money -= (db_trade.cost * db_trade.trade_cnt)

                (session_thread.query(Participate).filter(Participate.id == participate.id).
                 update({'result_money': participate.result_money}))

            session_thread.add(db_trade)
            session_thread.commit()

    def sell(param: int):
        now_asset = session_thread.get(Participate, participate.member_id).result_money

        sell_cnt, buy_cnt = cal_now_stock_cnt()

        now_stock_cnt = buy_cnt - sell_cnt

        # param 들어온 수만큼 팔 수 있는지 확인
        if now_stock_cnt != 0 and param <= now_stock_cnt:
            now_asset += param * real_data.iloc[-1]['5']
            sell_sum, buy_sum = cal_now_stock_cost()
            buy_avg = buy_sum / buy_cnt
            sell_avg = 0

            if sell_cnt != 0:
                sell_avg = sell_sum / sell_cnt

            db_trade = Trade(contest_id=participate.contest_id,
                             participate_id=participate.id,
                             cost=real_data.iloc[0]['5'],
                             trade_type="sell",
                             trade_at=datetime.now(),
                             trade_cnt=-param,
                             profit_and_loss=(buy_avg - sell_avg) * param,
                             trade_cost=real_data.iloc[0]['5'])

        if db_trade:
            participate.result_money += (db_trade.cost * db_trade.trade_cnt)

            (session_thread.query(Participate).
             filter(Participate.id == participate.id).
             update({'result_money': participate.result_money}))

            session_thread.add(db_trade)
            session_thread.commit()

    def asset(percent):
        tmp_asset = math.ceil(participate.result_money / 100 * percent)
        return math.ceil(tmp_asset / real_data.iloc[0]['5'])

    def reserve(percent):
        now_stock_cnt = cal_now_stock_cnt()
        return math.ceil(now_stock_cnt / percent)

    def stay():
        return 0

    tactic_python_code = (session_thread.query(Tactic.tactic_python_code).
                          outerjoin(Participate, Participate.tactic_id == Tactic.id).
                          filter(Participate.id == participate.id).
                          one())[0]

    exec(tactic_python_code)

    session_thread.close()


# 9시부터 15시까지 1분 마다 실행하는 것으로 바꾸기
@sched.scheduled_job('interval', seconds=60, id='remove_inactive_image')
def check_contest():
    session = engine.sessionmaker()
    
    # 임시로 0으로 함 (30으로 바꿔야 됨)
    now_formatted = (datetime.now() + timedelta(minutes=30)).strftime('%Y-%m-%d %H:%M')

    contest = session.query(Contest).where(
        func.date_format(Contest.start_time, '%Y-%m-%d %H:%i') == now_formatted).all()

    if contest:
        cur_contest = contest[0]
        print(cur_contest.start_time, " ", cur_contest.id, " ", cur_contest.option_code)
        # 참여하는 사람들
        participates = session.query(Participate).filter(Participate.contest_id == cur_contest.id).all()

        start_contest(session,
                      contest_info=cur_contest,
                      participates=participates)

        session.commit()
        session.close()


sched.start()


def start_contest(session,
                  contest_info: Contest,
                  participates: Participate):
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

        print(res.json()['output'])
        current_data = {'2': int(res.json()['output']['stck_oprc']),  # 시가
                        '3': int(res.json()['output']['stck_hgpr']),  # 고가
                        '4': int(res.json()['output']['stck_lwpr']),  # 저가
                        '5': int(res.json()['output']['stck_prpr']),  # 종가
                        '6': int(res.json()['output']['acml_vol'])  # 누적 거래량
                        }
        return current_data

    get_real_time_stock(URL, headers, params)

    # 스케줄러에 작업 추가
    schedule.every(1).seconds.do(get_real_time_stock, URL, headers, params)

    while datetime.now() < contest_info.end_time:
        current_data = get_real_time_stock(URL, headers, params)

        session.add(ContestRealTime(contest_id=contest_info.id,
                                    open=current_data['2'],
                                    high=current_data['3'],
                                    low=current_data['4'],
                                    close=current_data['5'],
                                    vol=current_data['6']))

        session.commit()

        # 멀티스레드
        for participate in participates:
            print(">>>>>>>>>>>>>>", participate.member_id)

            _thread.start_new_thread(contest_thread, (participate,))

        schedule.run_pending()
        time.sleep(15)  # 부하가 안생길 만큼의 초

    # 대회 참가자들 정보는 participates에 있음!
    print("대회 끝!!!!")
