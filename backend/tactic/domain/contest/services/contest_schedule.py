import json
import os
import time

import schedule
from apscheduler.schedulers.background import BackgroundScheduler
import requests
from db.conn import engineconn
from domain.contest.models.contest import Contest

engine = engineconn()
session = engine.sessionmaker()

sched = BackgroundScheduler(timezone='Asia/Seoul')


# 9시부터 15시까지 1분 마다 실행하는 것으로 바꾸기
@sched.scheduled_job('interval', seconds=5, id='remove_inactive_image')
def check_contest():
    real_time = []
    # DB에 있는 contest 조회
    # 대회 목록 봐서 start_time의 YYYY.MM.DD HH:MM == now의 YYYY.MM.DD HH:MM
    # 이 되면 대회 시작!
    # session.query(Contest).filter(Contest.start_time)
    # '현재 시간 - 30분 == start_time' - 데이터 수집하기 시작
    # start_contest(option_code)

    # '현재 시간 == start_time' 1초마다 데이터 update하고 로직실행하기 시작
    # 대회 시작
    # 해당 대회에 대해 참가하는 사람들에 대해 대회 주기 시간 마다 알고리즘 적용
    # 자산 변동

    real_data = []

    return ""

# sched.start()

def start_contest(option_code: str):
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
        "fid_input_iscd":[option_code]
    }


    def func(URL, headers, params):
        res = requests.get(URL, headers=headers, params=params)
        print(res.json()['output'])


    func(URL, headers, params)


    # 스케줄러에 작업 추가
    schedule.every(1).seconds.do(func, URL, headers, params)

    while True:
        # 멀티스레드
        # DB는 멀티 스레드 작업 끝나고 한 번에 MariaDB에 저장해주기
        schedule.run_pending()
        time.sleep(1) # 부하가 안생길 만큼의 초

start_contest("005930")