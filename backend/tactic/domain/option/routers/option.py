from fastapi import APIRouter, Request

from domain.option.schemas.option_like_request import OptionLikeRequest
from domain.option.services import option_service
from domain.option.services.option_service import get_keyword_search, get_option_detail, like_option

app = APIRouter(
    prefix="/api/option"
)


@app.get("")
async def keyword_search(request: Request, keyword: str):
    member_id = request.headers.get("Member-id")
    return get_keyword_search(member_id, keyword)


@app.get("/{option_id}")
async def keyword_search(option_id: str):
    return get_option_detail(option_id)


@app.post("/like")
async def add_like_option(request: Request, option_like_request: OptionLikeRequest):
    member_id = request.headers.get("Member-id")
    return like_option(member_id, option_like_request)
