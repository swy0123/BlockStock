from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Participate(Base):
    __tablename__ = 'participate'
    id = Column(Integer, primary_key=True, autoincrement=True)
    contest_id = Column(Integer, ForeignKey("contest.id"), nullable=False)
    contest_id = Column(Integer, nullable=False)
    # tactic_id = Column(Integer, ForeignKey("tactic.id") nullable=False)
    member_id = Column(Integer, nullable=False)
    result_money = Column(Integer, nullable=False)

