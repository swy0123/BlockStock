from datetime import datetime as dt
from sqlalchemy import Column, Integer, String, DateTime, TEXT, ForeignKey, Float
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


class Participate(Base):
    __tablename__ = 'participate'
    id = Column(Integer, primary_key=True, autoincrement=True)
    contest_id = Column(Integer, ForeignKey("contest.id"), nullable=False)
    tactic_id = Column(Integer, ForeignKey("tactic.id"), nullable=False)
    member_id = Column(Integer, nullable=False)
    result_money = Column(Float, nullable=False)


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
