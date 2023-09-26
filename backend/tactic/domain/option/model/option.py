from datetime import datetime as dt
from domain.contest.schemas.info_request import InfoRequest
from sqlalchemy import Column, Integer, String, DateTime, TEXT, ForeignKey, Float
from sqlalchemy.orm import declarative_base, relationship


Base = declarative_base()


class Option(Base):
    __tablename__ = 'option'
    option_code = Column(String(10), primary_key=True, nullable=False)
    option_name = Column(String(50), nullable=False)

    def __init__(self, option_code: str, option_name: str):
        self.option_code = option_code
        self.option_name = option_name


class OptionLike(Base):
    __tablename__ = 'option_like'
    id = Column(Integer, primary_key=True, autoincrement=True)
    member_id = Column(Integer, nullable=False)
    option_code = Column(String(10), ForeignKey("option.option_code"), nullable=False)

    option = relationship("Option", back_populates="option_like")

    def __init__(self, member_id: int, option_code: str):
        self.member_id = member_id
        self.option_code = option_code

