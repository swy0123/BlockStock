from typing import Optional

from pydantic import BaseModel


class SearchOptionRequest(BaseModel):
    option: Optional[str] = None
