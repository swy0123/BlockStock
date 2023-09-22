from datetime import datetime as dt
from domain.contest.schemas.contest_requeset import ContestRequest
from domain.contest.schemas.info_request import InfoRequest
from sqlalchemy import Column, Integer, String, DateTime, TEXT, ForeignKey
from sqlalchemy.orm import declarative_base, relationship

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

    participate = relationship("Participate", back_populates="contest", uselist=False)
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


class Participate(Base):
    __tablename__ = 'participate'
    id = Column(Integer, primary_key=True, autoincrement=True)
    contest_id = Column(Integer, ForeignKey("contest.id"), nullable=False)
    # tactic_id = Column(Integer, ForeignKey("tactic.id"), nullable=False)
    tactic_id = Column(Integer, nullable=False)
    member_id = Column(Integer, nullable=False)
    result_money = Column(Integer, nullable=False)

    contest = relationship("Contest", back_populates="participate")
    def __init__(self, user_id: int, info_create: InfoRequest, contest_ticket: int):
        self.member_id = user_id
        self.contest_id = info_create.contest_id
        self.tactic_id = info_create.tactic_id
        self.result_money = contest_ticket * 10000000;