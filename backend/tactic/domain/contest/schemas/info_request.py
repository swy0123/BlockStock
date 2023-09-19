from fastapi_camelcase import CamelModel
from datetime import datetime

class InfoRequest(CamelModel):
    contestId: int
    tacticId: int

