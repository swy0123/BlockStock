from domain.contest.schemas.contest_response import ContestResponse


class ContestListResponse:
    contestList: list
    totalCnt: int

    def __init__(self, contest: ContestResponse, total_cnt: int):
        self.contestList = contest
        self.totalCnt = total_cnt
