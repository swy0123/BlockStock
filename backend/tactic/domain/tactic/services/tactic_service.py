from common.conn import engineconn
from datetime import datetime

from domain.contest.models.contest import Tactic
from domain.tactic.schemas.tactic_add_request import TacticAddRequest

engine = engineconn()
session = engine.sessionmaker()


async def create_tactic(tactic_add_request: TacticAddRequest):
    db_tactic = Tactic(tactic_add_request)
    session.add(db_tactic)
    session.commit()
