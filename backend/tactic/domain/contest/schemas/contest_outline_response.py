from domain.contest.schemas.contest_result_response import ContestResultList


class ContestOutlineResponse:
    currentContestResultList: ContestResultList
    nextContestList: list
    prevContestResult: list

    def __init__(self,
                 currentContestResultList: list,
                 nextContestList: list,
                 prevContestResult: list):
        self.currentContestResultList = currentContestResultList
        self.nextContestList = nextContestList.copy()
        self.prevContestResult = prevContestResult.copy()
