from domain.contest.models.contest import ContestRealTime
from datetime import datetime

class ContestRealTimeResponse:
    date: str
    time: str
    open: int
    high: int
    low: int
    close: int
    volume: int
    datetime: datetime

    def __init__(self, contest_real_time: ContestRealTime, vol: int):
        self.open = contest_real_time.open
        self.high = contest_real_time.high
        self.low = contest_real_time.low
        self.close = contest_real_time.close
        self.volume = vol
        self.date = contest_real_time.created_at.strftime('%Y%m%d')
        self.time = contest_real_time.created_at.strftime('%H%M%S')