from pydantic import BaseModel


class Member(BaseModel):
    id: int
    nickname: str
    money: float
    ticket_count: int
