from pydantic import BaseModel

class OptionHistory(BaseModel):
    type: str
    turn: int
    cost: int
    tradeCnt: int
    profitAndLoss: float
