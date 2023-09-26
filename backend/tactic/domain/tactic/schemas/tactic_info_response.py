from datetime import datetime


class TacticInfoResponse:
    id: int
    title: str
    optionCode: str
    optionName: str
    testReturns: float
    contestReturns: float
    imgPath: str
    createdAt: datetime

    def __init__(self, tactic, option_name):
        self.id = tactic.id
        self.title = tactic.title
        self.optionCode = tactic.option_code
        self.optionName = option_name
        self.testReturns = tactic.test_returns
        self.contestReturns = tactic.contest_returns
        self.imgPath = tactic.img_path
        self.createdAt = tactic.created_at
