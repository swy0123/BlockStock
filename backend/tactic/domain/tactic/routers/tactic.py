from fastapi import FastAPI, APIRouter

from domain.tactic.schemas.tactic_add_request import TacticAddRequest
from domain.tactic.schemas.tactic_test_request import TacticTestRequest
from domain.tactic.schemas.tactic_test_response import TacticTestResponse
from domain.tactic.services.tactic_test_service import get_tactic_test_response
from domain.tactic.services.tactic_service import create_tactic

app = APIRouter(
    prefix="/api/tactic"
)


@app.post("/test")
# @app.post("/test", response_model=TacticTestResponse)
async def tactic_test(tactic_test_request: TacticTestRequest):
    response = get_tactic_test_response(tactic_test_request)

    return response


@app.post("")
async def add_tactic(tactic_add_request: TacticAddRequest):
    await create_tactic(tactic_add_request)
