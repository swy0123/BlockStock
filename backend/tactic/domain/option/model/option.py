from datetime import datetime as dt
from domain.contest.schemas.contest_requeset import ContestRequest
from domain.contest.schemas.info_request import InfoRequest
from sqlalchemy import Column, Integer, String, DateTime, TEXT, ForeignKey, Float
from sqlalchemy.orm import declarative_base, relationship


Base = declarative_base()


class Option(Base):
    __tablename__ = 'option'
    id = Column(Integer, primary_key=True, autoincrement=True)
    option_code = Column(String(10), nullable=False)
    option_name = Column(String(50), nullable=False)

    def __init__(self, option_code: str, option_name: str):
        self.option_code = option_code
        self.option_name = option_name
