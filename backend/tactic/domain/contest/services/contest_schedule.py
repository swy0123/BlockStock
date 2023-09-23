import json
import os
import time

import pandas as pd
from datetime import datetime, timedelta
import schedule
from apscheduler.schedulers.background import BackgroundScheduler
import requests
from sqlalchemy import func

from common.conn import engineconn
from domain.contest.models.contest import Contest, Participate

engine = engineconn()
session = engine.sessionmaker()

sched = BackgroundScheduler(timezone='Asia/Seoul')


# 9시부터 15시까지 1분 마다 실행하는 것으로 바꾸기
@sched.scheduled_job('interval', seconds=60, id='remove_inactive_image')
def check_contest():

    # DB에 있는 contest 조회
    # 대회 목록 봐서 start_time의 YYYY.MM.DD HH:MM == now의 YYYY.MM.DD HH:MM 이 되면 대회 시작!
    now_formatted = (datetime.now() + timedelta(minutes=30)).strftime('%Y-%m-%d %H:%M')

    contest = session.query(Contest).where(func.date_format(Contest.start_time, '%Y-%m-%d %H:%i') == now_formatted).all()

    # 시작 30분 전인 대회 찾기
    if contest:
        cur_contest = contest[0]
        print(cur_contest.start_time, " ", cur_contest.id, " ", cur_contest.option_code)
        # 참여하는 사람들
        participates = session.query(Participate).filter(Participate.contest_id == cur_contest.id).all()

        start_contest(contest_info=cur_contest,
                      participates=participates)

    return ""


sched.start()


def start_contest(contest_info: Contest,
                  participates: Participate):

    # 실시간 데이터 저장할 변수
    real_data = pd.DataFrame()

    headers = {"content-type":"application/json"}
    body = {"grant_type":"client_credentials",
            "appkey":os.environ["HT_APP_KEY"],
            "appsecret":os.environ["HT_APP_SECRET"]}

    TOKEN_URL = f"{os.environ['HT_BASE_URL']}/{os.environ['HT_TOKEN_PATH']}"

    res = requests.post(TOKEN_URL, headers=headers, data=json.dumps(body))
    res.text

    ACCESS_TOKEN = res.json()["access_token"]

    URL = f"{os.environ['HT_BASE_URL']}/{os.environ['HT_STOCK_PATH']}"

    headers = {"Content-Type":"application/json",
               "authorization": f"Bearer {ACCESS_TOKEN}",
               "appKey": os.environ["HT_APP_KEY"],
               "appSecret": os.environ["HT_APP_SECRET"],
               "tr_id":"FHKST01010100"}

    params = {
        "fid_cond_mrkt_div_code":"J",
        "fid_input_iscd":[contest_info.option_code]
    }

    def get_real_time_stock(URL, headers, params):
        res = requests.get(URL, headers=headers, params=params)
        # 여기에서 real_data에 데이터 담아둬야됨

        current_data = {'2': res.json()['output']['stck_oprc'], # 시가
                        '3': res.json()['output']['stck_hgpr'], # 고가
                        '4': res.json()['output']['stck_lwpr'], # 저가
                        '5': res.json()['output']['stck_prpr'] # 종가
                        }
        return current_data

    get_real_time_stock(URL, headers, params)


    # 스케줄러에 작업 추가
    schedule.every(1).seconds.do(get_real_time_stock, URL, headers, params)

    while datetime.now() < contest_info.end_time:
        current_data = get_real_time_stock(URL, headers, params)
        real_data = real_data.append(current_data, ignore_index=True)
        print(real_data)
        print("-------------------------")
        print(real_data.iloc[-1]['4'])
        print("=========================")


        # 여기에서 알고리즘 시작 시키기

        # 해당 대회에 대해 참가하는 사람들에 대해 대회 주기 시간 마다 알고리즘 적용
        # 자산 변동


        # 멀티스레드
        # DB는 멀티 스레드 작업 끝나고 한 번에 MariaDB에 저장해주기
        schedule.run_pending()
        time.sleep(1) # 부하가 안생길 만큼의 초
