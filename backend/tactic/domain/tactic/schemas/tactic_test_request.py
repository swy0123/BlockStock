import datetime
from typing import Optional

from pydantic import BaseModel


class TacticTestRequest(BaseModel):
    optionCode: Optional[str]
    tacticPythonCode: Optional[str]
    tacticJsonCode: Optional[str]
    startAsset: Optional[int]
    startTime: Optional[str]
    term: Optional[str]
    repeatCnt: Optional[int]
