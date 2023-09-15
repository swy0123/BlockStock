from pydantic import BaseModel
from datetime import datetime

class ContestCreate(BaseModel):
    title: str
    content: str
    start_time: datetime
    end_time: datetime
    max_capacity: int
    term: int
    ticket: int
    option_code: str
    class Config:
        orm_mode = True
