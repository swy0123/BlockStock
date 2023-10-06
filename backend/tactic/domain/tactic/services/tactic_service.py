import datetime

import win32com.client
import math

# 연결 여부 체크
objCpCybos = win32com.client.Dispatch("CpUtil.CpCybos")
bConnect = objCpCybos.IsConnect
if (bConnect == 0):
    print("PLUS가 정상적으로 연결되지 않음. ")
    exit()


def get_data_list(tactic_test_request, period):

    # 필요한 변수들 미리 선언
    term = None
    data_end_time = None
    data_start_time = None
    type6 = None

    # 주말 제외하기 위해 총 개수 계산
    total_cnt = None

    # 형변환 : str -> date
    start_time = datetime.datetime.strptime(tactic_test_request.startTime, "%Y%m%d").date()

    # term이 '분' 단위인 경우
    if(tactic_test_request.term != "1d") :
        # term 설정
        if(tactic_test_request.term == "1m") :
            term = 1
            total_cnt = tactic_test_request.repeatCnt
        elif(tactic_test_request.term == "10m") :
            term = 10
            total_cnt = tactic_test_request.repeatCnt * 10
        elif(tactic_test_request.term == "60m") :
            term = 60
            total_cnt = tactic_test_request.repeatCnt * 60

        # type6 설정
        type6 = 'm'

        # 계산할 일 수 : math.floor((term * repeatCnt / 60) / 6) + 주말 일 수 여유있게 추가
        cal_day = math.floor((term * tactic_test_request.repeatCnt / 60) / 6) + 5

        # 과거 데이터 조회할 경우
        if(period == "past"):
            # 과거 데이터 종료일
            data_end_time = start_time - datetime.timedelta(days=1)
            # 과거 데이터 시작일
            data_start_time = data_end_time - datetime.timedelta(days=cal_day)
        # 현재 데이터 조회할 경우
        else:
            # 현재 데이터 시작일
            data_start_time = start_time
            # 현재 데이터 종료일
            data_end_time = data_start_time + datetime.timedelta(days=cal_day)



    # term이 '일' 단위인 경우 : 반복 횟수 만큼만 일 수 빼기
    else :
        # type6 설정
        type6 = 'D'

        total_cnt = tactic_test_request.repeatCnt

        # 과거 데이터 조회할 경우
        if (period == "past"):
            # 과거 데이터 종료일
            data_end_time = start_time - datetime.timedelta(days=1)
            # 과거 데이터 시작일
            data_start_time = data_end_time - datetime.timedelta(days=tactic_test_request.repeatCnt + 50)
        # 현재 데이터 조회할 경우
        else:
            # 현재 데이터 시작일
            data_start_time = start_time
            # 현재 데이터 종료일
            data_end_time = start_time + datetime.timedelta(days=tactic_test_request.repeatCnt + 50)


    # 형변환 : date -> str
    data_end_time = data_end_time.strftime("%Y%m%d")
    data_start_time = data_start_time.strftime("%Y%m%d")

    # 객체 생성
    instStockChart = win32com.client.Dispatch("CpSysDib.StockChart")

    # 요청값 설정
    instStockChart.SetInputValue(0, tactic_test_request.optionCode)
    instStockChart.SetInputValue(1, ord('1'))
    instStockChart.SetInputValue(2, data_end_time)
    instStockChart.SetInputValue(3, data_start_time)
    # instStockChart.SetInputValue(4, 10)
    instStockChart.SetInputValue(5, (0, 1, 2, 3, 4, 5, 8))
    instStockChart.SetInputValue(6, ord(type6))
    instStockChart.SetInputValue(9, ord('1'))

    # 요청
    instStockChart.BlockRequest()

    # 응답
    num_data = instStockChart.GetHeaderValue(3)
    num_field = instStockChart.GetHeaderValue(1)

    data_list = []


    # 현재 데이터 조회할 때 턴 수 정확히 확인하기
    tmp_cnt = 0

    # 응답값 리스트에 넣기
    for i in range(num_data):
        # 현재 데이터 개수 채워지면 멈추기
        if(period == "now"):
            if(total_cnt == tmp_cnt):
                break

        tmp_cnt += 1

        # 10분 주기면 1분 주기 10개 데이터 중 1개씩만 리턴
        if(tmp_cnt % term == 0) :
            tmp_list = []
            for j in range(num_field):
                tmp_list.append(instStockChart.GetDataValue(j, i))

            data_list.append(tmp_list)

    return data_list

