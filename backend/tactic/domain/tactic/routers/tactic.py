from fastapi import FastAPI, APIRouter, Request, UploadFile, File

from domain.tactic.schemas.tactic_add_request import TacticAddRequest
from domain.tactic.schemas.tactic_modify_request import TacticModifyRequest
from domain.tactic.schemas.tactic_test_request import TacticTestRequest
from domain.tactic.schemas.tactic_test_response import TacticTestResponse
from domain.tactic.services.tactic_test_service import get_tactic_test_response
from domain.tactic.services.tactic_service import create_tactic, get_member_tactic, modify_tactic, delete_tactic, get_tactic_detail, create_tactic_img
from typing import Optional

app = APIRouter(
    prefix="/api/tactic"
)


@app.post("/test")
async def tactic_test(tactic_test_request: TacticTestRequest):
    response = get_tactic_test_response(tactic_test_request)

    return response


@app.post("/image")
async def add_image(file: UploadFile = File(...)):
    return await create_tactic_img(file)


@app.post("")
async def create(request: Request, tactic_add_request: TacticAddRequest):
    member_id = request.headers.get("Member-id")
    await create_tactic(member_id, tactic_add_request)


@app.get("")
async def member_tactic(request: Request, code: Optional[str] = None):
    member_id = request.headers.get("Member-id")
    if code is None:
        code = ""
    return await get_member_tactic(member_id, code)


@app.get("/{tactic_id}")
async def tactic_detail(tactic_id: int):
    return await get_tactic_detail(tactic_id)


@app.put("")
async def modify(request: Request, tactic_modify_request: TacticModifyRequest):
    member_id = request.headers.get("Member-id")
    await modify_tactic(member_id, tactic_modify_request)


@app.delete("/{tactic_id}")
async def delete(request: Request, tactic_id: int):
    member_id = request.headers.get("Member-id")
    await delete_tactic(member_id, tactic_id)


