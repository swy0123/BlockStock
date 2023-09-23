import _thread
import math
import pandas as pd

from datetime import datetime
from common.conn import engineconn
from domain.contest.models.contest import Participate, Tactic, Contest
from domain.contest.models.trade_info import TradeInfo

engine = engineconn()
session = engine.sessionmaker()

participates = session.query(Participate).all()

real_data = pd.DataFrame()


def cur_data(type: int):
    # 마지막 시, 고, 저, 종
    return real_data.iloc[-1][f'{type}']


def get_recent_indicators(range_type: str, scope: int, data_type: int, criteria: str):
    recent_indicator_data = None

    # real_data에서 마지막에서부터 15 * scope 부터 마지막데이터까지 가져오기
    recent_scope_data = real_data.iloc[-15 * scope:]
    if criteria == 'avg':
        recent_indicator_data = recent_scope_data[f'{data_type}'].mean()

    elif criteria == 'max':
        recent_indicator_data = recent_scope_data[f'{data_type}'].max()

    elif criteria == 'min':
        recent_indicator_data = recent_scope_data[f'{data_type}'].min()

    return recent_indicator_data


def buy(param: int):
    global now_stock_cnt

    now_asset = None
    buy_sum = None
    buy_cnt = None


    trade_info = None

    # param 들어온 개수만큼 살 수 있는지 확인
    if param * real_data[-1]['4'] < participate.result_money:
        now_asset -= param * real_data[-1]['4']

        now_stock_cnt += param

        trade_info = TradeInfo(trade_type="buy",
                               contest_id=participate.contest_id,
                               trade_at=datetime.now(),
                               trade_cnt=param)


    if trade_info is not None:
        # trade_info 저장하기
        # 사용자 자산 현황(participate.result_money) 변경하기
        session.add(trade_info)
        session.commit()


def sell(param: int):
    global now_stock_cnt, now_asset, sell_sum, sell_cnt

    trade_info = None

    # param 들어온 수만큼 팔 수 있는지 확인
    if param <= now_stock_cnt:
        now_asset += param * real_data[-1]['4']
        now_stock_cnt -= param
        
        # 매수 총 합, 개수 계산
        sell_sum += param * real_data[-1]['4']
        sell_cnt += param

        trade_info = TradeInfo(trade_type="sell",
                               contest_id=participate.contest_id,
                               trade_at=datetime.now(),
                               trade_cnt=param)

    if trade_info is not None:
        # trade_info 저장하기
        # 사용자 자산 현황(participate.result_money) 변경하기
        session.add(trade_info)
        session.commit()


def asset(percent):
    tmp_asset = math.ceil(now_asset / 100 % percent)
    # math.ceil(tmp_asset / now_data[now_repeat_cnt][4]

    # rea_data_iloc[-1] (마지막 행의) 4: 종가
    # 테스트 해볼것
    return math.ceil(tmp_asset / real_data.iloc[-1]['4'])


# 보유 수량의 percent 개수 반환
def reserve(percent):
    return math.ceil(now_stock_cnt / percent)

def contest_thread(participate: Participate, contest: Contest):

    global now_stock_cnt # 현재 보유 주식 수량
    global now_asset # 현재 자산, 대회에서는
                     # participate.result_money있으니까 없어도 될듯

    # 여기에 변수 만들고 함수 실행
    init_cost = participate.result_money

    # 현재 보유 주식
    # 처음에 0으로 초기화
    # 마지막 턴 끝나고 남은 주식 모두 팔기
    now_stock_cnt = 0

    tactic_python_code = (session.query(Tactic.tactic_python_code).
                          outerjoin(Participate, Participate.tactic_id, Tactic.id))

    now_asset = participate.result_money
    exec(tactic_python_code)

    # 거래 내역 저장
    # 각 participate 마다 result_money update 하기

for participate in participates:

    _thread.start_new_thread(contest_thread(participate))
