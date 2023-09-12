from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class TradeInfo(Base):
    __tablename__ = 'trade_info'
    id = Column(Integer, primary_key=True, autoincrement=True)
    contest_id = Column(Integer, nullable=False)
    count = Column(Integer, nullable=False)
    type = Column(String, nullable=False)