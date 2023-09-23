from fastapi_camelcase import CamelModel


class TacticAddRequest(CamelModel):
    member_id: int
    title: str
    option_code: str
    tactic_json_code: str
    tactic_python_code: str
    img_path: str
    test_returns: float
