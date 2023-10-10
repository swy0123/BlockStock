from typing import Optional


class ContestParticipateMessage:
    message: Optional[str] = None
    memberId: Optional[int] = None
    contestId: Optional[int] = None
    ticketCnt: Optional[int] = None

    def to_dict(self):
        return {
            "message": self.message,
            "memberId": self.memberId,
            "contestId": self.contestId,
            "ticketCnt": self.ticketCnt
        }
