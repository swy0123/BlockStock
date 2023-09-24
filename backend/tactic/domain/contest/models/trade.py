from sqlalchemy import Column, Integer, String, DateTime, Float
from sqlalchemy.orm import declarative_base
from datetime import datetime as dt

Base = declarative_base()


class Trade(Base):
    __tablename__ = 'trade'
    id = Column(Integer, primary_key=True, autoincrement=True)
    contest_id = Column(Integer, nullable=False)
    participate_id = Column(Integer, nullable=False)
    cost = Column(Integer, nullable=False)
    trade_type = Column(String, nullable=False)
    trade_at = Column(DateTime, nullable=False)
    trade_cnt = Column(Integer, nullable=False)
    profit_and_loss = Column(Float, nullable=True)
    trade_cost = Column(Integer, nullable=True)

    def __init__(self,
                 contest_id: int,
                 participate_id: int,
                 cost: int,
                 trade_type: str,
                 trade_at: dt,
                 trade_cnt: int,
                 profit_and_loss: float,
                 trade_cost: int):
        self.contest_id = contest_id
        self.participate_id = participate_id
        self.cost = cost
        self.trade_type = trade_type
        self.trade_at = trade_at
        self.trade_cnt = trade_cnt
        self.profit_and_loss = profit_and_loss
        self.trade_cost = trade_cost