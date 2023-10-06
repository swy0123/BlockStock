from datetime import datetime

from domain.contest.models.contest import Contest


class ContestResultList:
    id: int
    content: str
    code: str
    title: str
    startAsset: int
    term: int
    startAt: datetime
    endAt: datetime
    ranking: list

    def __init__(self, contest: Contest, rank_response: list):
        self.id = contest.id
        self.content = contest.content
        self.code = contest.option_code
        self.title = contest.title
        self.term = contest.term
        self.startAsset = contest.ticket * 10000000
        self.startAt = contest.start_time
        self.endAt = contest.end_time
        self.ranking = rank_response
