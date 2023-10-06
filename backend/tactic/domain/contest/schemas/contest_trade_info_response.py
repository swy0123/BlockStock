from domain.contest.models.contest import Contest, Participate


class ContestTradeInfoResponse:
    contestTradeHistory: list
    title: str
    optionName: str
    optionCode: str
    startDate: str
    startTime: str
    startAsset: int
    endAsset: int
    returnPercent: float
    returns: int
    isPlayer: bool
    endDate: str
    endTime: str

    def __init__(self, participate: Participate, contest: Contest, option_name: str, trade: list):
        self.contestTradeHistory = trade.copy()
        self.title = contest.title
        self.optionName = option_name
        self.optionCode = contest.option_code
        self.startDate = contest.start_time.strftime('%Y%m%d')
        self.startTime = contest.start_time.strftime('%H%M%S')
        self.startAsset = contest.ticket * 10000000
        self.endAsset = None if participate is None else participate.result_money
        self.returnPercent = None if participate is None else (participate.result_money - (
                    10000000 * contest.ticket)) / (10000000 * contest.ticket) * 100
        self.returns = None if participate is None else participate.result_money - (contest.ticket * 10000000)
        self.isPlayer = False if participate is None else True
        self.endDate = contest.end_time.strftime('%Y%m%d')
        self.endTime = contest.end_time.strftime('%H%M%S')