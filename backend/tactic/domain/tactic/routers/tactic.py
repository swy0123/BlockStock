from fastapi import FastAPI, APIRouter
from domain.tactic.schemas.tactic_test_request import TacticTestRequest
from pydantic import BaseModel
# from domain.tactic.services.tactic_service import buy


app = APIRouter(
    prefix="/tactic"
)

return_list = []

# 예제 데이터 (10개의 시가, 종가, 고가, 저가, 거래량)
data = [
    [100, 101, 105, 98, 10000],
    [102, 103, 107, 100, 12000],
    [105, 104, 110, 103, 15000],
    [103, 106, 108, 101, 11000],
    [110, 108, 112, 105, 13000],
    [112, 110, 115, 108, 14000],
    [108, 109, 112, 105, 12000],
    [109, 112, 115, 108, 11000],
    [111, 114, 117, 110, 10000],
    [115, 116, 120, 112, 9000],
    [103, 106, 108, 101, 11000],
    [110, 108, 112, 105, 13000],
    [112, 110, 115, 108, 14000],
    [108, 109, 112, 105, 12000],
]

new_data = [117, 118, 120, 115, 8000]

# if (data[nnn][1]) < (data[nnn][3]):
#   buy(1)

# if (data[-1][1]) < (new_data[3]):
#   buy()

@app.post("/test")
async def tactic_test(tactic_test_request: TacticTestRequest):
    python_code = tactic_test_request.tacticPythonCode

    # print(python_code)

    exec(python_code)
    # return_list = []
    #
    # return_list.insert(exec(python_code))
    #
    return return_list


#    return tactic_test_request;

def buy():
    # print("!!!exec buy!!!")
    return_list.append("buy !!")
    return "buy !!"