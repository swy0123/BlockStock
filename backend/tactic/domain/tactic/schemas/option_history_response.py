from pydantic import BaseModel
from typing import Optional


class OptionHistory(BaseModel):
    type: Optional[str] = None
    turn: Optional[int] = None
    cost: Optional[int] = None
    tradeCnt: Optional[int] = None
    profitAndLoss: Optional[float] = None
