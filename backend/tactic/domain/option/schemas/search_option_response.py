from typing import Optional

from pydantic import BaseModel


class SearchOptionResponse(BaseModel):
    optionCode: Optional[str] = None
    optionName: Optional[str] = None
    todayClose: Optional[int] = None
    diffRate: Optional[float] = None
