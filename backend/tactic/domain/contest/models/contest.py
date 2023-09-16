from datetime import datetime as dt
from domain.contest.schemas.contest import ContestRequest
from sqlalchemy import Column, Integer, String, DateTime, TEXT
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Contest(Base):
    __tablename__ = 'contest'
    id = Column(Integer, primary_key=True, autoincrement=True)
    member_id = Column(Integer, nullable=False)
    title = Column(String(200), nullable=False)
    content = Column(TEXT, nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=False)
    max_capacity = Column(Integer, nullable=False)
    term = Column(Integer, nullable=False)
    ticket = Column(Integer, nullable=False)
    option_code = Column(String(10), nullable=False)
    created_at = Column(DateTime, nullable=False)

    def __init__(self, contest_request: ContestRequest):
        self.member_id = contest_request.member_id
        self.title = contest_request.title
        self.content = contest_request.content
        self.start_time = contest_request.start_time
        self.end_time = contest_request.end_time
        self.max_capacity = contest_request.max_capacity
        self.term = contest_request.term
        self.ticket = contest_request.ticket
        self.option_code = contest_request.option_code
        self.created_at = dt.now()