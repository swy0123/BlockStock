import math
import datetime

import win32com.client

from domain.tactic.schemas.chart_info_response import ChartInfo
from domain.tactic.schemas.option_history_response import OptionHistory
from domain.tactic.schemas.tactic_test_request import TacticTestRequest
from domain.tactic.schemas.tactic_test_response import TacticTestResponse

# 연결 여부 체크
objCpCybos = win32com.client.Dispatch("CpUtil.CpCybos")
bConnect = objCpCybos.IsConnect
if bConnect == 0:
    print("PLUS가 정상적으로 연결되지 않음. ")
    exit()

# 전역변수

# now_asset
#   처음에 tactic_test_request startAsset으로 초기화
#   buy 또는 sell 계산 시 변화
#   마지막에 endAsset 으로 반환
now_asset = 0

# now_stock_cnt
#   현재 보유 주식
#   처음에 0으로 초기화
#   마지막 턴 끝나고 남은 주식 모두 팔기
now_stock_cnt = 0

# now_data
now_data = []

# past_data
#   최근 100분/1000분/100일 과거 데이터
#   get_recent_indicators 에서 사용
past_data = []

# past_day_data
#   최근 100일 과거 데이터
#   get_recent_indicators 에서 range_type = "date" 일 때 사용
past_day_data = []

# all_data
#   past_data + now_data
all_data = []

# option_history_list
#   주식 매수, 매도 내역 저장
#   exec(python_code) 실행 후 response : optionHistory에 저장
option_history_list = []

# buy_sum, buy_cnt, sell_sum, sell_cnt
#   매수 가격 합, 총 매수 개수, 매도 가격 합, 총 매도 개수
buy_sum = 0
buy_cnt = 0
sell_sum = 0
sell_cnt = 0

# now_repeat_cnt
#   exec(tacticPythonCode) 할 때 현재 몇 번 째 턴인지 반환할 때 사용
#   get_tactic_test_response에서 0으로 초기화
now_repeat_cnt = 0

# recent_indicators_data
#   get_recent_indicators 에서 사용
#   0 이 아니면 while 문에서 계산 안하고 넘어가기
#   get_tactic_test_response에서 0으로 초기화
recent_indicators_data = 0


def get_tactic_test_response(tactic_test_request):
    inst_cp_stock_code = win32com.client.Dispatch("CpUtil.CpStockCode")
    name = inst_cp_stock_code.CodeToName(tactic_test_request.optionCode)
    tactic_test_request.optionCode = inst_cp_stock_code.NameToCode(name)

    response = TacticTestResponse()
    # set start_asset
    response.startAsset = tactic_test_request.startAsset

    # set now_asset
    global now_asset
    now_asset = tactic_test_request.startAsset

    # set now_stock_cnt
    global now_stock_cnt
    now_stock_cnt = 0

    # set option_history_list
    global option_history_list
    option_history_list = []

    # set buy, sell
    global buy_sum
    buy_sum = 0
    global buy_cnt
    buy_cnt = 0
    global sell_sum
    sell_sum = 0
    global sell_cnt
    sell_cnt = 0

    # set now_data
    global now_data
    now_data = get_now_data(tactic_test_request)
    now_data.reverse()
    now_data = now_data[0:tactic_test_request.repeatCnt]
    print("now data : ", now_data)

    # set past_data
    global past_data
    past_data = get_past_data(tactic_test_request)
    past_data.reverse()


    # set past_day_data
    global past_day_data
    past_day_request = TacticTestRequest()
    past_day_request.optionCode = tactic_test_request.optionCode
    past_day_request.startTime = tactic_test_request.startTime
    past_day_request.term = tactic_test_request.term
    past_day_request.repeatCnt = tactic_test_request.repeatCnt
    past_day_data = get_past_data(past_day_request)

    # set chart_infos
    response.chartInfos = []

    # set recent_indicators_data
    global recent_indicators_data
    recent_indicators_data = 0

    global all_data
    all_data = past_data + now_data

    for data in all_data:
        info = ChartInfo()
        info.date = str(data[0])
        time = str(data[1])
        if len(time) != 4:
            for i in range(4-len(time)):
                time = "0" + time
        info.time = time
        info.open = data[2]
        info.high = data[3]
        info.low = data[4]
        info.close = data[5]
        info.volume = data[6]

        response.chartInfos.append(info)

    # set now_repeat_cnt
    global now_repeat_cnt
    now_repeat_cnt = 0

    # exec python_code
    while True:
        if now_repeat_cnt == tactic_test_request.repeatCnt:
            break

        exec(tactic_test_request.tacticPythonCode)
        # if (get_recent_indicators("date" ,10, "low", "avg")) < (curData("low")):
        #     buy(asset(10))
        #     sell(reserve(10))
        #     buy(10)

        now_repeat_cnt += 1

    # 반복문 끝나고 남은 주식 매수
    if now_stock_cnt > 0:
        now_asset += now_stock_cnt * now_data[now_repeat_cnt-1][4]

    # set option_history
    response.optionHistory = option_history_list

    # set end_asset
    response.endAsset = now_asset

    # set return_percent
    response.returnPercent = response.endAsset / response.startAsset
    if response.startAsset > response.endAsset:
        response.returnPercent *= -1

    return response


def get_now_data(tactic_test_request):

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
    if tactic_test_request.term == "1m" or tactic_test_request.term == "10m":
        # term 설정
        if tactic_test_request.term == "1m":
            term = 1
            total_cnt = tactic_test_request.repeatCnt
        elif tactic_test_request.term == "10m":
            term = 10
            total_cnt = tactic_test_request.repeatCnt * 10

        # type6 설정
        type6 = 'm'

        # 계산할 일 수 : math.floor((term * repeatCnt / 60) / 6) + 주말 일 수 여유있게 추가
        cal_day = math.floor((term * tactic_test_request.repeatCnt / 60) / 6) + 5

        # 데이터 시작일
        data_start_time = start_time
        # 데이터 종료일
        data_end_time = start_time + datetime.timedelta(days=cal_day)

    # term이 '일' 단위인 경우
    else:
        type6 = 'D'
        term = 1
        total_cnt = tactic_test_request.repeatCnt

        # 현재 데이터 시작일
        data_start_time = start_time
        # 현재 데이터 종료일
        data_end_time = start_time + datetime.timedelta(days=tactic_test_request.repeatCnt + 50)

    # 형변환 : date -> str
    data_end_time = data_end_time.strftime("%Y%m%d")
    data_start_time = data_start_time.strftime("%Y%m%d")

    # 객체 생성
    inst_stock_chart = win32com.client.Dispatch("CpSysDib.StockChart")

    # 요청값 설정
    inst_stock_chart.SetInputValue(0, tactic_test_request.optionCode)
    inst_stock_chart.SetInputValue(1, ord('1'))
    inst_stock_chart.SetInputValue(2, data_end_time)
    inst_stock_chart.SetInputValue(3, data_start_time)
    inst_stock_chart.SetInputValue(5, (0, 1, 2, 3, 4, 5, 8))
    inst_stock_chart.SetInputValue(6, ord(type6))
    inst_stock_chart.SetInputValue(9, ord('1'))

    # 요청
    inst_stock_chart.BlockRequest()

    # 응답
    num_data = inst_stock_chart.GetHeaderValue(3)
    num_field = inst_stock_chart.GetHeaderValue(1)

    data_list = []

    # 현재 데이터 조회할 때 턴 수 확인하기 (주말 포함된 경우)
    tmp_cnt = 0

    # 응답값 리스트에 넣기
    for i in range(num_data):
        # # 현재 데이터 개수 채워지면 멈추기
        # if total_cnt == tmp_cnt:
        #     break
        #
        # tmp_cnt += 1

        # 10분 주기면 1분 주기 10개 데이터 중 1개씩만 리턴
        if tmp_cnt % term == 0:
            tmp_list = []
            for j in range(num_field):
                tmp_list.append(inst_stock_chart.GetDataValue(j, i))

            data_list.append(tmp_list)

    return data_list


def get_past_data(tactic_test_request):

    # 필요한 변수들 미리 선언
    term = None
    data_end_time = None
    data_start_time = None
    type6 = None

    # 주말 제외하기 위해 총 개수 계산
    total_cnt = 100

    # 형변환 : str -> date
    start_time = datetime.datetime.strptime(tactic_test_request.startTime, "%Y%m%d").date()

    # term이 '분' 단위인 경우
    if tactic_test_request.term == "1m" or tactic_test_request.term == "10m":
        # term 설정
        if tactic_test_request.term == "1m":
            term = 1
            total_cnt = tactic_test_request.repeatCnt
        elif tactic_test_request.term == "10m":
            term = 10
            total_cnt = tactic_test_request.repeatCnt * 10

        # type6 설정
        type6 = 'm'

        # 데이터 시작일 (최대 과거 1000분 + 주말 여유)
        data_start_time = start_time - datetime.timedelta(days=6)
        # 데이터 종료일
        data_end_time = start_time - datetime.timedelta(days=1)

    # term이 '일' 단위인 경우
    else:
        type6 = 'D'
        term = 1
        total_cnt = tactic_test_request.repeatCnt

        # 데이터 시작일 (최대 과거 100일 + 주말 여유)
        data_start_time = start_time - datetime.timedelta(days=150)
        # 데이터 종료일
        data_end_time = start_time - datetime.timedelta(days=1)

    # 형변환 : date -> str
    data_end_time = data_end_time.strftime("%Y%m%d")
    data_start_time = data_start_time.strftime("%Y%m%d")

    # 객체 생성
    inst_stock_chart = win32com.client.Dispatch("CpSysDib.StockChart")

    # 요청값 설정
    inst_stock_chart.SetInputValue(0, tactic_test_request.optionCode)
    inst_stock_chart.SetInputValue(1, ord('1'))
    inst_stock_chart.SetInputValue(2, data_end_time)
    inst_stock_chart.SetInputValue(3, data_start_time)
    inst_stock_chart.SetInputValue(5, (0, 1, 2, 3, 4, 5, 8))
    inst_stock_chart.SetInputValue(6, ord(type6))
    inst_stock_chart.SetInputValue(9, ord('1'))

    # 요청
    inst_stock_chart.BlockRequest()

    # 응답
    num_data = inst_stock_chart.GetHeaderValue(3)
    num_field = inst_stock_chart.GetHeaderValue(1)

    data_list = []

    # 현재 개수 확인
    tmp_cnt = 0

    # 응답값 리스트에 넣기
    for i in range(num_data):
        # 10분 주기면 1분 주기 10개 데이터 중 1개씩만 리턴
        if tmp_cnt % term == 0:
            tmp_list = []
            for j in range(num_field):
                tmp_list.append(inst_stock_chart.GetDataValue(j, i))

            data_list.append(tmp_list)

    # list 뒤에서부터 100개 자르기
    new_data_list = data_list[-100:]

    return new_data_list


def get_recent_indicators(range_type, scope, data_type, criteria):
    global recent_indicators_data

    if range_type == "date":
        now_idx = -1
        if criteria == "avg":
            tmp_sum = 0
            while True:
                if now_idx < -scope:
                    break
                tmp_sum += past_day_data[now_idx][data_type]
                now_idx -= 1

            recent_indicators_data = tmp_sum / scope

        elif criteria == "max":
            tmp_max = 0
            while True:
                if now_idx < -scope:
                    break
                if tmp_max < past_day_data[now_idx][data_type]:
                    tmp_max = past_day_data[now_idx][data_type]
                now_idx -= 1

            recent_indicators_data = tmp_max

        elif criteria == "min":
            tmp_min = 1000000
            while True:
                if now_idx < -scope:
                    break
                if tmp_min > past_day_data[now_idx][data_type]:
                    tmp_min = past_day_data[now_idx][data_type]
                now_idx -= 1

            recent_indicators_data = tmp_min
    elif range_type == "term":
        start_idx = 100 - scope + now_repeat_cnt
        end_idx = 99 + now_repeat_cnt
        print(">>>>>>>>>>>all_data_size : ", len(all_data))
        print(">>>>>>>>>>>start idx :", start_idx)
        now_idx = start_idx

        if criteria == "avg":
            tmp_sum = 0
            while True:
                if now_idx > end_idx:
                    break
                tmp_sum += all_data[now_idx][data_type]
                now_idx += 1

            recent_indicators_data = tmp_sum / scope

        elif criteria == "max":
            tmp_max = 0
            while True:
                if now_idx > end_idx:
                    break
                if tmp_max < all_data[now_idx][data_type]:
                    tmp_max = all_data[now_idx][data_type]
                now_idx += 1

            recent_indicators_data = tmp_max

        elif criteria == "min":
            tmp_min = 1000000
            while True:
                if now_idx > end_idx :
                    break
                if tmp_min > all_data[now_idx][data_type]:
                    tmp_min = all_data[now_idx][data_type]
                now_idx += 1

            recent_indicators_data = tmp_min

    return recent_indicators_data


def cur_data(data_type):
    return now_data[now_repeat_cnt][data_type]


def buy(param):
    global now_asset, now_stock_cnt, buy_sum, buy_cnt
    # param 들어온 개수만큼 살 수 있는지 확인
    if param * now_data[now_repeat_cnt][4] <= now_asset:
        now_asset -= param * now_data[now_repeat_cnt][4]
        now_stock_cnt += param
        # option_history_response 객체 생성
        item = OptionHistory()
        item.type = "buy"
        item.turn = now_repeat_cnt
        item.cost = now_data[now_repeat_cnt][4]
        item.tradeCnt = param
        # 매도 총 합, 개수 계산
        buy_sum += param * now_data[now_repeat_cnt][4]
        buy_cnt += param

        # 실현손익 setting
        item.profitAndLoss = 0
        # list에 넣기
        option_history_list.append(item)


def sell(param):
    global now_stock_cnt, now_asset, sell_sum, sell_cnt
    # param 들어온 수만큼 팔 수 있는지 확인
    if now_stock_cnt != 0 and param <= now_stock_cnt:
        now_asset += param * now_data[now_repeat_cnt][4]
        now_stock_cnt -= param
        # 매수 총 합, 개수 계산
        sell_sum += param * now_data[now_repeat_cnt][4]
        sell_cnt += param
        # option_history_response 객체 생성
        item = OptionHistory()
        item.type = "sell"
        item.turn = now_repeat_cnt
        item.cost = now_data[now_repeat_cnt][4]
        item.tradeCnt = param

        buy_avg = buy_sum / buy_cnt
        # 매수 평균
        sell_avg = 0
        if sell_cnt != 0:
            sell_avg = sell_sum / sell_cnt
        item.profitAndLoss = (buy_avg - sell_avg) * param
        # list에 넣기
        option_history_list.append(item)


def asset(percent):
    tmp_asset = math.ceil(now_asset / 100 * percent)
    return math.ceil(tmp_asset / now_data[now_repeat_cnt][4])


def reserve(percent):
    return math.ceil(now_stock_cnt / percent)
