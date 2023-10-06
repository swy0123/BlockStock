from fastapi import APIRouter
from domain.option.services import option_service

router = APIRouter()

@router.get("/api/stock/option")
async def option_list():
    option_service.get_options()

    return {"message:" : "hello"}