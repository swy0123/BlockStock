from domain.contest.models.contest import Participate


class ContestHistoryResponse:
    title: str
    rank: int # 등수
    result_money: int
    participate_id: int # 기록
    tactic_id: int # 대회에 사용한 전략 번호
    revenue: float # 수익률

    def __init__(self,
                 participate_id: int,
                 title: str,
                 result_money: int,
                 tactic_id: int,
                 rank: int,
                 ticket: int):
        self.title = title
        self.rank = rank
        self.result_money = result_money
        self.revenue = result_money / (10000000 * ticket) * 100
        self.tactic_id = tactic_id
        self.participate_id = participate_id

