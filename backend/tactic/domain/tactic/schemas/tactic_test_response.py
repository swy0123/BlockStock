from pydantic import BaseModel
from typing import List, Optional

from domain.tactic.schemas import option_history_response, chart_info_response


class TacticTestResponse(BaseModel):

    optionHistory: Optional[list] = None
    chartInfos: Optional[list] = None
    startAsset: Optional[int] = None
    endAsset: Optional[int] = None
    returnPercent: Optional[float] = None

