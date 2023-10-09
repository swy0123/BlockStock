from typing import Optional


class ContestParticipateMessage:
    message: Optional[str] = None
    memberId: Optional[int] = None
    contestId: Optional[int] = None
    tickerCnt: Optional[int] = None

    def to_dict(self):
        return {
            "message": self.message,
            "memberId": self.contestId,
            "contestId": self.contestId,
            "ticketCnt": self.contestTitle
        }
