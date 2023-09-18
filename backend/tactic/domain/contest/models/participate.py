from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import declarative_base, relationship
from domain.contest.schemas.contest import InfoRequest

Base = declarative_base()


class Participate(Base):
    __tablename__ = 'participate'
    id = Column(Integer, primary_key=True, autoincrement=True)
    contest_id = Column(Integer, ForeignKey("contest.id"), nullable=False)
    tactic_id = Column(Integer, ForeignKey("tactic.id"), nullable=False)
    member_id = Column(Integer, nullable=False)
    result_money = Column(Integer, nullable=False)

    contest = relationship("Contest", back_populates="participate")

    def __init__(self, user_id: int, info_create: InfoRequest):
        self.member_id = user_id
        self.contest = info_create.contestId
        self.tactic_id = info_create.tacticId
        self.result_money = 0;