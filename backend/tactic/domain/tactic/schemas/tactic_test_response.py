from pydantic import BaseModel
from typing import List, Optional

from domain.tactic.schemas import option_history_response, chart_info_response


class TacticTestResponse(BaseModel):

    optionHistory: Optional[list]
    chartInfos: Optional[list]
    startAsset: Optional[int]
    endAsset: Optional[int]
    returnPercent: Optional[float]

