from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import declarative_base
from datetime import datetime as dt

Base = declarative_base()


class TradeInfo(Base):
    __tablename__ = 'trade_info'
    id = Column(Integer, primary_key=True, autoincrement=True)
    trade_type = Column(String, nullable=False)
    contest_id = Column(Integer, nullable=False)
    trade_at = Column(DateTime, nullable=False)
    trade_cnt = Column(Integer, nullable=False)

    def __init__(self, trade_type: str, contest_id: int, trade_at: dt, trade_cnt: int):
        self.trade_type = trade_type
        self.contest_id = contest_id
        self.trade_at = trade_at
        self.trade_cnt = trade_cnt
