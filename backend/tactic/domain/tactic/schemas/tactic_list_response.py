from datetime import datetime


class TacticListResponse:
    id: int
    title: str
    optionName: str
    testReturns: float
    contestReturns: float
    imgPath: str
    createdAt: datetime

    def __init__(self, tactic, option_name):
        self.id = tactic.id
        self.title = tactic.title
        self.optionName = option_name
        self.testReturns = tactic.test_returns
        self.contestReturns = tactic.contest_returns
        self.imgPath = tactic.img_path
        self.createdAt = tactic.created_at
