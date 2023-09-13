from datetime import datetime

from sqlalchemy import Column, Integer, String, DateTime, TEXT
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Contest(Base):
    __tablename__='contest'
    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(200), nullable=False)
    content = Column(TEXT, nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=False)
    max_capacity = Column(Integer, nullable=False)
    term = Column(Integer, nullable=False)
    ticket = Column(Integer, nullable=False)
    option_code = Column(String(10), nullable=False)
    created_at = Column(DateTime, nullable=False, default=datetime.now)
