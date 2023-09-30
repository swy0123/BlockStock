class ContestRankingResponse:
    memberId: int
    nickName: str
    returns: float

    def __init__(self, member_id: int, nick_name: str, ticket: int, result_money: float):
        self.memberId = member_id
        self.nickName = nick_name
        self.returns = (result_money - ticket * 10000000) / (ticket * 10000000) * 100


