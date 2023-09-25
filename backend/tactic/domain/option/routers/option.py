from fastapi import APIRouter, Request

from domain.option.services import option_service
from domain.option.services.option_service import get_search_option

app = APIRouter(
    prefix="/api/option"
)


@app.get("/stock")
async def option_list():
    option_service.get_options()

    return {"message:": "hello"}


@app.get("/search")
async def search_option(request: Request, option: str):
    member_id = request.headers.get("Member-id")

    return get_search_option(member_id, option)
