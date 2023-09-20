from domain.contest.models.contest import Participate


class ContestHistoryResponse:
    revenue: int # 수익률
    rank: int # 등수
    trade_id: int # 기록
    tactic_id: int # 대회에 사용한 전략 번호

    def __init__(self, result_money: int, tactic_id: int, rank: int, ticket: int):
        self.revenue = result_money - (10000000 * ticket)
        self.rank = rank
        self.tactic_id = tactic_id
        self.trade_id = 0

