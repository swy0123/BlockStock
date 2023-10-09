from typing import Optional


class ContestEndMessage:
    message: Optional[str] = None
    contestId: Optional[int] = None
    contestTitle: Optional[str] = None
    memberIds: Optional[list] = None
    results: Optional[list] = None

    def to_dict(self):
        return {
            "message": self.message,
            "contestId": self.contestId,
            "contestTitle": self.contestTitle,
            "memberIds": self.memberIds,
            "results": self.results
        }
