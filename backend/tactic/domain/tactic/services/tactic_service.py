import datetime

import win32com.client
import math

# 연결 여부 체크
objCpCybos = win32com.client.Dispatch("CpUtil.CpCybos")
bConnect = objCpCybos.IsConnect
if (bConnect == 0):
    print("PLUS가 정상적으로 연결되지 않음. ")
    exit()

def get_past_data(tactic_test_request):

    print("SERVICE : get_past_data START ")
    print(tactic_test_request.startTime)

    # 필요한 변수들 미리 선언
    term = None
    past_end_time = None
    past_start_time = None

    # 형변환 : str -> date
    start_time = datetime.datetime.strptime(tactic_test_request.startTime, "%Y%m%d").date()

    # term이 '분' 단위인 경우
    if(tactic_test_request.term != "1d") :
        # term 설정
        if(tactic_test_request.term == "1m") :
            term = 1
        elif(tactic_test_request.term == "10m") :
            term = 10
        elif(tactic_test_request.term == "60m") :
            term = 60

        # 계산할 일 수 : math.floor((term * repeatCnt / 60) / 6)
        cal_day = math.floor((term * tactic_test_request.repeatCnt / 60) / 6)
        # 과거 데이터 종료일
        past_end_time = start_time - datetime.timedelta(days=1)
        # 과거 데이터 시작일
        past_start_time = past_end_time - datetime.timedelta(days=cal_day)

    # term이 '일' 단위인 경우 : 반복 횟수 만큼만 일 수 빼기
    else :
        # 과거 데이터 종료일
        past_end_time = start_time - datetime.timedelta(days=1)
        # 과거 데이터 시작일
        past_start_time = past_end_time - datetime.timedelta(days=tactic_test_request.repeatCnt)

    print("과거 시작 날짜 : ", past_end_time)
    print("과거 종료 날짜 : ", past_start_time)


    # 객체 생성
    # instStockChart = win32com.client.Dispatch("CpSysDib.StockChart")

    # # 요청값 설정
    # instStockChart.SetInputValue(0, tactic_test_request.optionCode)
    # instStockChart.SetInputValue(1, ord('1'))

    return ""
