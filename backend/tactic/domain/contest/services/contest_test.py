import _thread
from common.conn import engineconn
from domain.contest.models.contest import Participate, Tactic

engine = engineconn()
session = engine.sessionmaker()

participates = session.query(Participate).all()


def cur_data(type: int):
    return ""


def get_recent_indicators(range_type: str, scope: int, idx: int, cost_type: str):
    return ""


def buy(n: int):
    return ""


def sell(n: int):
    return ""



def contest_thread(participate: Participate):
    # 여기에 변수 만들고 함수 실행
    init_cost = participate.result_money

    tactic_python_code = (session.query(Tactic.tactic_python_code).
                          outerjoin(Participate, Participate.tactic_id, Tactic.id))

    exec(tactic_python_code)

    # 거래 내역 저장
    
    # 각 participate 마다 result_money update 하기

    return ""


for participate in participates:
    _thread.start_new_thread(contest_thread(participate))