import datetime
from datetime import datetime as dt
from domain.contest.schemas.contest_request import ContestRequest
from domain.contest.schemas.info_request import InfoRequest
from sqlalchemy import Column, Integer, String, DateTime, TEXT, ForeignKey, Float
from sqlalchemy.orm import declarative_base, relationship

from domain.tactic.schemas.tactic_add_request import TacticAddRequest
from domain.tactic.schemas.tactic_modify_request import TacticModifyRequest

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
    # contest_info = relationship("ContestInfo", back_populates="contest", uselist=False)
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


class Tactic(Base):
    __tablename__ = 'tactic'
    id = Column(Integer, primary_key=True, autoincrement=True)
    member_id = Column(Integer, nullable=False)
    title = Column(String(200), nullable=False)
    option_code = Column(String(10), nullable=False)
    tactic_json_code = Column(TEXT, nullable=False)
    tactic_python_code = Column(TEXT, nullable=False)
    test_returns = Column(Float, nullable=True)
    contest_returns = Column(Float, nullable=True)
    img_path = Column(String(400), nullable=False)
    created_at = Column(DateTime, nullable=False)
    updated_at = Column(DateTime, nullable=False)

    participate = relationship("Participate", back_populates="tactic", uselist=False)

    def __init__(self, member_id: int, tactic_add_request: TacticAddRequest):
        self.member_id = member_id
        self.title = tactic_add_request.title
        self.option_code = tactic_add_request.option_code
        self.tactic_json_code = tactic_add_request.tactic_json_code
        self.tactic_python_code = tactic_add_request.tactic_python_code
        self.test_returns = tactic_add_request.test_returns
        self.img_path = tactic_add_request.img_path
        self.created_at = datetime.datetime.now()
        self.updated_at = datetime.datetime.now()

    def __init__(self, member_id: int, tactic_modify_request: TacticModifyRequest):
        self.id = tactic_modify_request.id
        self.member_id = member_id
        self.title = tactic_modify_request.title
        self.option_code = tactic_modify_request.option_code
        self.tactic_json_code = tactic_modify_request.tactic_json_code
        self.tactic_python_code = tactic_modify_request.tactic_python_code
        self.test_returns = tactic_modify_request.test_returns
        self.img_path = tactic_modify_request.img_path
        self.updated_at = datetime.datetime.now()


class Participate(Base):
    __tablename__ = 'participate'
    id = Column(Integer, primary_key=True, autoincrement=True)
    contest_id = Column(Integer, ForeignKey("contest.id"), nullable=False)
    tactic_id = Column(Integer, ForeignKey("tactic.id"), nullable=False)
    member_id = Column(Integer, nullable=False)
    result_money = Column(Float, nullable=False)

    contest = relationship("Contest", back_populates="participate")
    tactic = relationship("Tactic", back_populates="participate")

    def __init__(self, user_id: int, info_create: InfoRequest, ticket: int):
        self.member_id = user_id
        self.contest_id = info_create.contest_id
        self.tactic_id = info_create.tactic_id
        self.result_money = ticket * 10000000


class ContestRealTime(Base):
    __tablename__ = 'contest_real_time'
    id = Column(Integer, primary_key=True, autoincrement=True)
    contest_id = Column(Integer, ForeignKey("contest.id"), nullable=False)
    created_at = Column(DateTime, nullable=False)
    open = Column(Integer, nullable=False)
    high = Column(Integer, nullable=False)
    low = Column(Integer, nullable=False)
    close = Column(Integer, nullable=False)
    vol = Column(Integer, nullable=False)

    def __init__(self,
                 contest_id: int,
                 open: int,
                 high: int,
                 low: int,
                 close: int,
                 vol: int):

        self.contest_id = contest_id
        self.created_at = dt.now()
        self.open = open
        self.high = high
        self.low = low
        self.close = close
        self.vol = vol
    # contest = relationship("Contest", back_populates="contest_info")
