from sqlalchemy import String, Column
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Option(Base):
    __tablename__ = 'option'
    option_code = Column(String(10), primary_key=True)
    option_name = Column(String(255), nullable=True)
