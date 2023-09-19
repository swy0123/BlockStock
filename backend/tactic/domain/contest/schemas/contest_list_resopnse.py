from domain.contest.schemas.contest_response import ContestResponse


class ContestListResponse:
    contestList: list
    count: int

    def __init__(self, contest: ContestResponse, count: int):
        self.contestList = contest
        self.count = count
