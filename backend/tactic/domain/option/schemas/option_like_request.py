import datetime
from typing import Optional

from pydantic import BaseModel


class OptionLikeRequest(BaseModel):
    optionCode: Optional[str] = None

