from fastapi_camelcase import CamelModel

class ContestPrevResult(CamelModel):
    member_id: int
    profile_image: str
    returns: float

    class Config:
        orm_mode = True