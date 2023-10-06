import datetime

from pydantic import BaseModel

class TacticTestRequest(BaseModel):
    optionCode: str
    tacticPythonCode: str
    tacticJsonCode: str
    startAsset: int
    startTime: str
    term: str
    repeatCnt: int
