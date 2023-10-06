from datetime import datetime

from pydantic import BaseModel


class ContestRealTimeRequest(BaseModel):
    contest_id: int
    created_at: datetime
    open: int
    high: int
    low: int
    close: int
    vol: int
