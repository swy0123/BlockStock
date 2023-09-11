from fastapi import FastAPI, APIRouter
from domain.tactic.schemas.tactic_test_request import TacticTestRequest
from pydantic import BaseModel

app = APIRouter(
    prefix="/tactic"
)

@app.post("/test")
async def tactic_test(TacticTestRequest: TacticTestRequest):
    return TacticTestRequest;

