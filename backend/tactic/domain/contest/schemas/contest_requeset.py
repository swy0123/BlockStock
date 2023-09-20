from fastapi_camelcase import CamelModel
from datetime import datetime


class ContestRequest(CamelModel):
    title: str
    member_id: int
    content: str
    start_time: datetime
    end_time: datetime
    max_capacity: int
    term: int
    ticket: int
    option_code: str
