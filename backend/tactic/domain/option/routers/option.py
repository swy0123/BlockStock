from typing import Optional

from fastapi import APIRouter, Request

from domain.option.schemas.option_like_request import OptionLikeRequest
from domain.option.services import option_service
from domain.option.services.option_service import get_keyword_search, get_option_detail, like_option, unlike_option

app = APIRouter(
    prefix="/api/option"
)


@app.get("")
async def keyword_search(request: Request, like: bool, keyword: Optional[str] = None):
    member_id = request.headers.get("Member-id")
    if keyword is None:
        return get_keyword_search(member_id, "", like)
    else:
        return get_keyword_search(member_id, keyword, like)


@app.get("/stock")
async def get_stock_main():
    return option_service.get_main_stock_info()


@app.get("/{option_code}")
async def keyword_search(option_code: str):
    return get_option_detail(option_code)


@app.post("/like")
async def add_like_option(request: Request, option_like_request: OptionLikeRequest):
    member_id = request.headers.get("Member-id")
    return like_option(member_id, option_like_request)


@app.delete("/like/{option_code}")
async def add_like_option(request: Request, option_code: str):
    member_id = request.headers.get("Member-id")
    return unlike_option(member_id, option_code)

