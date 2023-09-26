from domain.contest.models.trade import Trade


class ContestTradeResponse:
    type: str
    date: str
    time: str
    cost: int
    tradeCnt: int
    profitAndLoss: float

    def __init__(self, trade: Trade):
        self.type = trade.trade_type
        self.date = trade.trade_at.strftime('%Y%m%d')
        self.time = trade.trade_at.strftime('%H%M%S')
        self.cost = trade.cost
        self.tradeCnt = trade.trade_cnt
        self.profitAndLoss = trade.profit_and_loss
