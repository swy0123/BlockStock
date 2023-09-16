from fastapi import HTTPException

from domain.contest.schemas.contest import ContestRequest, ContestResponse
from domain.contest.schemas.contest_type import ContestType
from domain.contest.models.contest import Contest
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
        result = (session.query(Contest, session.query()).where(Contest.start_time <= datetime.now()).
                  where(datetime.now() <= Contest.end_time).filter((Contest.title.ilike(f'%%{key_word}%%'))).
                  offset(offset).limit(size).all())

    elif status == ContestType.EXPECTED:
        result = (session.query(Contest).where(datetime.now() < Contest.start_time).
                  filter(Contest.title.like(f'%%{key_word}%%')).offset(offset).limit(size).all())

    elif status == ContestType.FINISH:
        result = (session.query(Contest).where(Contest.end_time < datetime.now()).
                  filter(Contest.title.ilike(f'%%{key_word}%%')).offset(offset).limit(size).all())

    
    # for contest in result:
    #     contest_result.append(ContestResponse(contest))
    return result


def create_contest(contest_create: ContestRequest):
    db_contest = Contest(contest_create)

    session.add(db_contest)
    session.commit()


def delete_contest(contest_id: int):
    contest = session.get(Contest, contest_id)

    if not contest:
        raise HTTPException(status_code=404, detail="번호에 해당되는 번호가 없습니다.")
    session.delete(contest)
    session.commit()

    return {"ok": True}


def save_contest_sec_info():
    return ""
