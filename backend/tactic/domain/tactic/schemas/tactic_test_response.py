from pydantic import BaseModel
from typing import List, Optional

from domain.tactic.schemas import option_history_response, chart_info_response


class TacticTestResponse(BaseModel):
    optionHistory: list
    chartInfos: list
    startAsset: int
    endAsset: int
    returnPercent: float

