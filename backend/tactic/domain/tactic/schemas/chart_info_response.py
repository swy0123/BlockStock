from pydantic import BaseModel


class ChartInfo(BaseModel):
    date: str
    time: str
    open: int
    high: int
    low: int
    close: int
    volume: int