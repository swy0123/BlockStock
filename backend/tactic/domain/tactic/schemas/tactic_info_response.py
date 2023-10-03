from datetime import datetime


class TacticInfoResponse:
    id: int
    title: str
    optionCode: str
    optionName: str
    tacticJsonCode: str
    tacticPythonCode: str
    testReturns: float
    contestReturns: float
    imgPath: str
    createdAt: datetime
    updatedAt: datetime

    def __init__(self, tactic, option_name):
        self.id = tactic.id
        self.title = tactic.title
        self.optionCode = tactic.option_code
        self.optionName = option_name
        self.tacticJsonCode = tactic.tactic_json_code
        self.tacticPythonCode = tactic.tactic_python_code
        self.testReturns = tactic.test_returns
        self.contestReturns = tactic.contest_returns
        self.imgPath = tactic.img_path
        self.createdAt = tactic.created_at
        self.updatedAt = tactic.updated_at
