from fastapi import FastAPI, APIRouter, Request

from domain.tactic.schemas.tactic_add_request import TacticAddRequest
from domain.tactic.schemas.tactic_test_request import TacticTestRequest
from domain.tactic.schemas.tactic_test_response import TacticTestResponse
from domain.tactic.services.tactic_test_service import get_tactic_test_response
from domain.tactic.services.tactic_service import create_tactic, get_member_tactic

app = APIRouter(
    prefix="/api/tactic"
)


@app.post("/test")
async def tactic_test(tactic_test_request: TacticTestRequest):
    response = get_tactic_test_response(tactic_test_request)

    return response


@app.post("")
async def add_tactic(request: Request, tactic_add_request: TacticAddRequest):
    member_id = request.headers.get("Member-id")
    await create_tactic(member_id, tactic_add_request)


@app.get("")
async def tactic_info(request: Request):
    member_id = request.headers.get("Member-id")
    return await get_member_tactic(member_id)
