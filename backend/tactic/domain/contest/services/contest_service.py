from fastapi import HTTPException
from sqlalchemy import desc
from sqlalchemy.orm import joinedload

from domain.contest.schemas.contest import ContestRequest, InfoRequest, ContestResponse
from domain.contest.schemas.contest_type import ContestType
from domain.contest.models.contest import Contest, Participate
from domain.contest.error.contest_exception import StatusCode, Message
from db.conn import engineconn
from datetime import datetime

engine = engineconn()
session = engine.sessionmaker()


def get_contests(status: str,
                 key_word: str,
                 page: int,
                 size: int):
    offset = page * size

    result = None
    contest_result = []

    if status == ContestType.PROCEED:
        result = (session.query(Contest).where(Contest.start_time <= datetime.now()).
                  where(datetime.now() <= Contest.end_time).filter((Contest.title.ilike(f'%%{key_word}%%'))).
                  order_by(desc(Contest.created_at)).
                  offset(offset).limit(size).all())

    elif status == ContestType.EXPECTED:
        result = (session.query(Contest).where(datetime.now() < Contest.start_time).
                  filter(Contest.title.like(f'%%{key_word}%%')).
                  order_by(desc(Contest.created_at)).offset(offset).limit(size).all())

    elif status == ContestType.FINISH:
        result = (session.query(Contest).where(Contest.end_time < datetime.now()).
                  filter(Contest.title.ilike(f'%%{key_word}%%')).
                  order_by(desc(Contest.created_at)).offset(offset).limit(size).all())

    # for contest in result:
    #     contest_result.append(ContestResponse(contest))
    return result


def get_prev_contest_result():
    return (session.query(Participate).options(joinedload(Participate.contest_id)).
            where(Contest.end_time).order_by(desc(Contest.end_time)).order_by(desc(Participate.result_money)).limit(
        3)).all()

def create_contest(contest_create: ContestRequest):
    db_contest = Contest(contest_create)

    session.add(db_contest)
    session.commit()


def delete_contest(contest_id: int):
    contest = session.get(Contest, contest_id)

    if not contest:
        raise HTTPException(status_code=StatusCode.CONTEST_NOT_EXIST_ERROR_CODE,
                            detail=Message.CONTEST_NOT_EXIST_ERROR_CODE)
    session.delete(contest)
    session.commit()

    return {"ok": True}


def participate_contest(user_id: int, info_create: InfoRequest):

    db_participate = Participate(user_id, info_create)

    # user 유효한지 확인
    # 이미 참가 했으면 에러
    if not session.get(Contest, InfoRequest.contestId):
        raise HTTPException(status_code=StatusCode.CONTEST_NOT_EXIST_ERROR_CODE)

    # tactic 값 유효한지 확인

    session.add(db_participate)
    session.commit()

def cancel_participate_contest(user_id, contest_id):
    # user 유효한지 확인
    # 이미 대회에 참여하지 않는다면 에러
    if not session.get(Contest, contest_id):
        raise HTTPException(status_code=StatusCode.CONTEST_NOT_EXIST_ERROR_CODE)

    # 해당 참가내역이 없으면 에러

    participate = (session.query(Participate).where(Participate.member_id == user_id).
                   where(Participate.contest_id == contest_id)).one()

    session.delete(participate)
    session.commit()

def save_contest_sec_info():
    return ""
