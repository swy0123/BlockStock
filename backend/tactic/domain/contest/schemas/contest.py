from fastapi_camelcase import CamelModel
from datetime import datetime
class ContestRequest(CamelModel):
    title: str
    member_id: int
    content: str
    start_time: datetime
    end_time: datetime
    max_capacity: int
    term: int
    ticket: int
    option_code: str

    class Config:
        orm_mode = True

class ContestResponse(CamelModel):
    id: int
    title: str
    member_id: int
    start_time: datetime
    end_time: datetime
    content: str
    ticket: int
    term: int
    max_capacity: int
    # join_people: int
    # is_registed: bool
    option_code: str

    class Config:
        orm_mode = True

class PrevContestResult(CamelModel):
    nickName: str
    profileImage: str
    result : float

class InfoRequest(CamelModel):
    contestId: int
    tacticId: int

