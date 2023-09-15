from typing import Optional

from pydantic import BaseModel


class ChartInfo(BaseModel):
    date: Optional[str]
    time: Optional[str]
    open: Optional[int]
    high: Optional[int]
    low: Optional[int]
    close: Optional[int]
    volume: Optional[int]