from domain.contest.models.contest import Contest, Participate


class ContestTradeInfoResponse:
    contestTradeHistory: list
    optionName: str
    optionCode: str
    startDate: str
    startTime: str
    startAsset: int
    endAsset: int
    returnPercent: float
    returns: int

    def __init__(self, participate: Participate, contest: Contest, option_name: str, trade: list):
        self.contestTradeHistory = trade.copy()
        self.optionName = option_name
        self.optionCode = contest.option_code
        self.startDate = contest.start_time.strftime('%Y%m%d')
        self.startTime = contest.start_time.strftime('%H%M%S')
        self.startAsset = contest.ticket * 10000000
        self.endAsset = participate.result_money
        self.returnPercent = participate.result_money / (10000000 * contest.ticket) * 100
        self.returns = participate.result_money - (contest.ticket * 10000000)
