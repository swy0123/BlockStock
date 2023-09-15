import datetime

import win32com.client
import math

from domain.tactic.schemas.chart_info_response import ChartInfo
from domain.tactic.schemas.tactic_test_response import TacticTestResponse

# 연결 여부 체크
objCpCybos = win32com.client.Dispatch("CpUtil.CpCybos")
bConnect = objCpCybos.IsConnect
if bConnect == 0:
    print("PLUS가 정상적으로 연결되지 않음. ")
    exit()


# 전역변수
# past_data
#   get_tactic_test_response에서 최근 100일 과거 데이터 구하기
#   get_recent_indicators 에서 사용
past_data = []

# now_repeat_cnt
#   exec(tacticPythonCode) 할 때 현재 몇 번 째 턴인지 반환할 때 사용
#   get_tactic_test_response에서 0으로 초기화
now_repeat_cnt = 0

# recent_indicators_data
#   get_recent_indicators 에서 사용
#   0 이 아니면 while 문에서 계산 안하고 넘어가기
#   get_tactic_test_response에서 0으로 초기화
recent_indicators_data = 0

# now_data
#   curData 에서 현재 날짜 데이터 구할 때 사용
now_data = []


# tactic test service
def get_tactic_test_response(tactic_test_request):
    response = TacticTestResponse()

    # startAsset setting
    response.startAsset = tactic_test_request.startAsset

    # set now_data
    global now_data
    now_data = get_data_list(tactic_test_request, "now")

    # set past_data
    global past_data
    past_data = get_past_data(tactic_test_request.optionCode)

    # set recent_indicators_data
    global recent_indicators_data
    recent_indicators_data = 0

    # chartInfos setting
    response.chartInfos = []
    chart_data = get_data_list(tactic_test_request, "chart")
    for data in chart_data:
        info = ChartInfo()
        info.date = data[0]
        info.time = data[1]
        info.open = data[2]
        info.high = data[3]
        info.low = data[4]
        info.close = data[5]
        info.volume = data[6]

        response.chartInfos.append(info)

    # tacticPythonCode 실행시키기
    global now_repeat_cnt
    now_repeat_cnt = 0

    # print("11", get_recent_indicators(10, "low", "avg"))
    # print("22", (curData("low")))
    #
    # if get_recent_indicators(10, "low", "avg") < (curData("low")):
    #     print("buy")

    while True:
        if now_repeat_cnt == tactic_test_request.repeatCnt:
            break
        # exec(tactic_test_request.tacticPythonCode)
        if (get_recent_indicators(10, "low", "avg")) < (curData("low")):
            buy(("10%"))

        now_repeat_cnt += 1

    return response


# 차트 데이터 받아오기, 현재 데이터 받아오기 할 때 사용
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
    if tactic_test_request.term != "1d":
        # term 설정
        if tactic_test_request.term == "1m":
            term = 1
            total_cnt = tactic_test_request.repeatCnt
        elif tactic_test_request.term == "10m":
            term = 10
            total_cnt = tactic_test_request.repeatCnt * 10
        elif tactic_test_request.term == "60m":
            term = 60
            total_cnt = tactic_test_request.repeatCnt * 60

        # type6 설정
        type6 = 'm'

        # 계산할 일 수 : math.floor((term * repeatCnt / 60) / 6) + 주말 일 수 여유있게 추가
        cal_day = math.floor((term * tactic_test_request.repeatCnt / 60) / 6) + 5

        # 차트 데이터 조회할 경우
        if period == "chart":
            # 차트 데이터 종료일
            data_end_time = start_time + datetime.timedelta(days=cal_day)
            # 차트 데이터 시작일
            data_start_time = start_time - datetime.timedelta(days=cal_day)
        # 현재 데이터 조회할 경우
        else:
            # 현재 데이터 시작일
            data_start_time = start_time
            # 현재 데이터 종료일
            data_end_time = start_time + datetime.timedelta(days=cal_day)

    # term이 '일' 단위인 경우 : 반복 횟수 만큼만 일 수 빼기
    else:
        # type6 설정
        type6 = 'D'
        term = 1
        total_cnt = tactic_test_request.repeatCnt

        # 차트 데이터 조회할 경우
        if period == "chart":
            # 차트 데이터 종료일
            data_end_time = start_time + datetime.timedelta(days=tactic_test_request.repeatCnt + 50)
            # 차트 데이터 시작일
            data_start_time = start_time - datetime.timedelta(days=tactic_test_request.repeatCnt + 50)
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
        if period == "now":
            if total_cnt == tmp_cnt:
                break

        tmp_cnt += 1

        # 10분 주기면 1분 주기 10개 데이터 중 1개씩만 리턴
        if tmp_cnt % term == 0:
            tmp_list = []
            for j in range(num_field):
                tmp_list.append(instStockChart.GetDataValue(j, i))

            data_list.append(tmp_list)

    return data_list


# 과거 100일 데이터 받아오기
def get_past_data(option_code):
    # 객체 생성
    inst_stock_chart = win32com.client.Dispatch("CpSysDib.StockChart")

    # 요청값 설정
    inst_stock_chart.SetInputValue(0, option_code)
    inst_stock_chart.SetInputValue(1, ord('2'))
    inst_stock_chart.SetInputValue(4, 100)
    inst_stock_chart.SetInputValue(5, (0, 1, 2, 3, 4, 5, 8))
    inst_stock_chart.SetInputValue(6, ord('D'))
    inst_stock_chart.SetInputValue(9, ord('1'))

    # 요청
    inst_stock_chart.BlockRequest()

    # 응답
    num_data = inst_stock_chart.GetHeaderValue(3)
    num_field = inst_stock_chart.GetHeaderValue(1)

    data_list = []

    # 응답값 리스트에 넣기
    for i in range(num_data):
        tmp_list = []
        for j in range(num_field):
            tmp_list.append(inst_stock_chart.GetDataValue(j, i))

        data_list.append(tmp_list)

    return data_list


def get_recent_indicators(day, data_type, criteria):

    # index -1 부터 -day까지 (시, 고, 저, 종) 에 대해 (평균, 최저, 최고) 구하기
    # idx : 시, 고, 저, 종 저장할 변수
    idx = None

    # 전역변수 recent_indicators_data 사용 : 0이면 계산하기
    global recent_indicators_data

    if recent_indicators_data == 0:

        if data_type == "open":
            idx = 2
        elif data_type == "high":
            idx = 3
        elif data_type == "low":
            idx = 4
        elif data_type == "close":
            idx = 5

        now_index = -1

        # recent_indicators_data 구하기
        if criteria == "avg":
            tmp_sum = 0
            while True:
                if now_index < -day:
                    break
                tmp_sum += past_data[now_index][idx]
                now_index -= 1

            recent_indicators_data = tmp_sum / day

        elif criteria == "max":
            tmp_max = 0
            while True:
                if now_index < -day:
                    break

                if tmp_max < past_data[now_index][idx]:
                    tmp_max = past_data[now_index][idx]
                now_index -= 1

            recent_indicators_data = tmp_max

        elif criteria == "min":
            tmp_min = 1000000
            while True:
                if now_index < -day:
                    break

                if tmp_min > past_data[now_index][idx]:
                    tmp_min = past_data[now_index][idx]
                now_index -= 1

            recent_indicators_data = tmp_min

    return recent_indicators_data


def curData(data_type):
    idx = None

    if data_type == "open":
        idx = 2
    elif data_type == "high":
        idx = 3
    elif data_type == "low":
        idx = 4
    elif data_type == "close":
        idx = 5

    return now_data[now_repeat_cnt][idx]


def buy(param):
    print("buy")
