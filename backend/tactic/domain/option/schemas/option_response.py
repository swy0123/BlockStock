from pydantic import BaseModel


class OptionResponse:
    optionCode: str
    optionName: str
    currentPrice: str  # 주식 현재가
    comparePrevious: str  # 전일 대비율

    def __init__(self, option_code: str, option_name: str, currentPrice: str, comparePrevious: str):
        self.option_code = option_code
        self.option_name = option_name
        self.currentPrice = currentPrice
        self.comparePrevious = comparePrevious
