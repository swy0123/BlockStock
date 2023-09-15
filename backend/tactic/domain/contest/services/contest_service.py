from datetime import datetime

from fastapi import HTTPException

from domain.contest.schemas.contest import ContestCreate
from domain.contest.models.contest import Contest
from db.conn import engineconn

engine = engineconn()
session = engine.sessionmaker()

def create_contest(contest_create: ContestCreate):

    db_contest = Contest(title=contest_create.title,
                         content=contest_create.content,
                         start_time=contest_create.start_time,
                         end_time=contest_create.end_time,
                         max_capacity=contest_create.max_capacity,
                         term=contest_create.term,
                         ticket=contest_create.ticket,
                         option_code=contest_create.option_code,
                         created_at=datetime.now())

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