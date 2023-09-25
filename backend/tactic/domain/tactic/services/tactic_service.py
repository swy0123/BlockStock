from common.conn import engineconn
from datetime import datetime

from domain.contest.models.contest import Tactic
from domain.tactic.schemas.tactic_add_request import TacticAddRequest
from domain.tactic.schemas.tactic_info_response import TacticInfoResponse
from domain.tactic.schemas.tactic_modify_request import TacticModifyRequest

engine = engineconn()
session = engine.sessionmaker()


async def create_tactic(member_id: int, tactic_add_request: TacticAddRequest):
    db_tactic = Tactic(member_id, tactic_add_request)
    session.add(db_tactic)
    session.commit()


async def get_member_tactic(member_id: int):
    tactics = session.query(Tactic).filter(Tactic.member_id == member_id).all()
    tactic_responses = []

    for tactic in tactics:
        tactic_response = TacticInfoResponse(tactic)
        tactic_responses.append(tactic_response)

    return tactic_responses


async def modify_tactic(member_id: int, tactic_modify_request: TacticModifyRequest):
    db_tactic = session.query(Tactic).filter(Tactic.id == tactic_modify_request.id).first()

    if db_tactic:
        db_tactic.title = tactic_modify_request.title
        db_tactic.option_code = tactic_modify_request.option_code
        db_tactic.tactic_json_code = tactic_modify_request.tactic_json_code
        db_tactic.tactic_python_code = tactic_modify_request.tactic_python_code
        db_tactic.test_returns = tactic_modify_request.test_returns
        db_tactic.img_path = tactic_modify_request.img_path
        db_tactic.updated_at = datetime.now()

        session.commit()


async def delete_tactic(member_id: int, tactic_id: int):
    db_tactic = session.query(Tactic).filter(Tactic.id == tactic_id).first()

    if db_tactic:
        session.delete(db_tactic)
        session.commit()

