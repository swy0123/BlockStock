import datetime
from typing import Optional

from pydantic import BaseModel


class TacticTestRequest(BaseModel):
    optionCode: Optional[str] = None
    tacticPythonCode: Optional[str] = None
    tacticJsonCode: Optional[object] = None
    startAsset: Optional[int] = None
    startTime: Optional[str] = None
    term: Optional[str] = None
    repeatCnt: Optional[int] = None
