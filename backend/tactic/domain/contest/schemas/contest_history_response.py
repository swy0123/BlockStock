class ContestHistoryResponse:
    title: str
    rank: int
    result_money: int
    participate_id: int
    tactic_id: int
    revenue: float

    def __init__(self, participate_id: int, title: str, result_money: int, tactic_id: int, rank: int, ticket: int):
        self.title = title
        self.rank = rank
        self.result_money = result_money - (ticket * 10000000)
        self.revenue = (result_money - ticket * 10000000) / (10000000 * ticket) * 100
        self.tactic_id = tactic_id
        self.participate_id = participate_id

