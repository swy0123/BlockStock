from fastapi_camelcase import CamelModel
from datetime import datetime

class InfoRequest(CamelModel):
    contest_id: int
    tactic_id: int

