from typing import Optional

from pydantic import BaseModel


class ChartInfo(BaseModel):
    date: Optional[str] = None
    time: Optional[str] = None
    open: Optional[int] = None
    high: Optional[int] = None
    low: Optional[int] = None
    close: Optional[int] = None
    volume: Optional[int] = None