from fastapi import FastAPI, APIRouter
from domain.tactic.schemas.tactic_test_request import TacticTestRequest
from domain.tactic.schemas.tactic_test_response import TacticTestResponse
from domain.tactic.services.tactic_service import get_tactic_test_response

app = APIRouter(
    prefix="/api/tactic"
)


@app.post("/test")
#@app.post("/test", response_model=TacticTestResponse)
async def tactic_test(tactic_test_request: TacticTestRequest):
    # print(tactic_test_request.tacticPythonCode)
    response = get_tactic_test_response(tactic_test_request)

    return response
