from fastapi import FastAPI, APIRouter
from domain.tactic.schemas.tactic_test_request import TacticTestRequest
from domain.tactic.schemas.tactic_test_response import TacticTestResponse
from domain.tactic.services.tactic_service import get_data_list, get_tactic_test_response

app = APIRouter(
    prefix="/tactic"
)


@app.post("/test")
#@app.post("/test", response_model=TacticTestResponse)
async def tactic_test(tactic_test_request: TacticTestRequest):
    # print(tactic_test_request.tacticPythonCode)
    response = get_tactic_test_response(tactic_test_request)

    # i = 0
    #
    #
    # for i in range(tactic_test_request.repeatCnt):
    #     if (get_recent_indicators(10, "low", "avg")) == (curData("low")):
    #         buy(("10%"))
    #     i += 1

    return response
