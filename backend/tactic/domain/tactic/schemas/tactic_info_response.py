from datetime import datetime


class TacticInfoResponse:
    id: int
    memberId: int
    title: str
    optionCode: str
    tacticJsonCode: str
    tacticPythonCode: str
    testReturns: float
    contestReturns: float
    imgPath: str
    createdAt: datetime

    def __init__(self, tactic):
        self.id = tactic.id
        self.memberId = tactic.member_id
        self.title = tactic.title
        self.optionCode = tactic.option_code
        self.tacticJsonCode = tactic.tactic_json_code
        self.tacticPythonCode = tactic.tactic_python_code
        self.testReturns = tactic.test_returns
        self.contestReturns = tactic.contest_returns
        self.imgPath = tactic.img_path
        self.createdAt = tactic.created_at
