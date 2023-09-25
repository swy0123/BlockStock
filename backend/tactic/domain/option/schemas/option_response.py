from pydantic import BaseModel


class OptionResponse(BaseModel):
    option_code: str
    option_name: str
    stck_prpr: str  # 주식 현재가
    prdy_dtrt: str  # 전일 대비율
