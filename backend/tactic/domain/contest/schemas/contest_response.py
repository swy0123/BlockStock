from datetime import datetime
from domain.contest.models.contest import Contest


class ContestResponse:
    id: int
    title: str
    member_id: int
    startTime: datetime
    endTime: datetime
    content: str
    ticket: int
    term: int
    maxCapacity: int
    joinPeople: int
    isRegisted: bool
    optionCode: str

    def __init__(self, contest: Contest, is_registed: bool, join_people: int):
        self.id = contest.id
        self.title = contest.title
        self.startTime = contest.start_time
        self.endTime = contest.end_time
        self.content = contest.content
        self.ticket = contest.ticket
        self.term = contest.term
        self.maxCapacity = contest.max_capacity
        self.joinPeople = join_people
        self.isRegisted = is_registed
        self.optionCode = contest.option_code
