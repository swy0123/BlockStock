from fastapi_camelcase import CamelModel


class TacticRequest(CamelModel):
    title: str
    option_code: str
    tactic_json_code: str
    tactic_python_code: str
    test_returns: float
