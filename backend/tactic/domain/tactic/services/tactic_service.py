from common.conn import engineconn
from datetime import datetime

from domain.contest.models.contest import Tactic
from domain.tactic.schemas.tactic_add_request import TacticAddRequest
from domain.tactic.schemas.tactic_info_response import TacticInfoResponse

engine = engineconn()
session = engine.sessionmaker()


async def create_tactic(tactic_add_request: TacticAddRequest):
    db_tactic = Tactic(tactic_add_request)
    session.add(db_tactic)
    session.commit()


async def get_member_tactic(member_id: int):
    tactics = session.query(Tactic).filter(Tactic.member_id == member_id).all()
    tactic_responses = []

    for tactic in tactics:
        # print(str(tactic.id) + " " + tactic.img_path)
        tactic_response = TacticInfoResponse(tactic)
        tactic_responses.append(tactic_response)

    return tactic_responses
