from pydantic import BaseModel
from pydantic.schema import datetime

class contest_create(BaseModel):
    title: str
    content: str
    start_time: datetime
    # end_time = Column(DateTime, nullable=False)
    # max_capacity = Column(Integer, nullable=False)
    # term = Column(Integer, nullable=False)
    # ticket = Column(Integer, nullable=False)
    # option_code = Column(String(10), nullable=False)
    # created_at = Column(DateTime, nullable=False, default=datetime.now)
