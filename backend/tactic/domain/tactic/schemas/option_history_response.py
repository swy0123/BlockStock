from pydantic import BaseModel
from typing import Optional


class OptionHistory(BaseModel):
    type: Optional[str]
    turn: Optional[int]
    cost: Optional[int]
    tradeCnt: Optional[int]
    profitAndLoss: Optional[float]
