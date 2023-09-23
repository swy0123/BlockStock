from fastapi_camelcase import CamelModel
from datetime import datetime


class TacticInfoResponse(CamelModel):
    id: int
    member_id: int
    title: str
    option_code: str
    tactic_json_code: str
    tactic_python_code: str
    test_returns: float
    contest_returns: float
    img_path: str
    created_at: datetime
