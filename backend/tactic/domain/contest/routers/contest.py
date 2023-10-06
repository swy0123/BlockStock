from fastapi import APIRouter, Query, Request
from domain.contest.schemas.contest_request import ContestRequest
from domain.contest.schemas.info_request import InfoRequest
from domain.contest.services import contest_service

router = APIRouter(
    prefix="/api/contest"
)


@router.get("")
def get_contest(request: Request,
                status: str = Query(default=None),
                key_word: str = Query(default=""),
                page: int = Query(default=None),
                size: int = Query(default=None)):
    member_id = request.headers.get("Member-id")
    return contest_service.get_contests(member_id, status, key_word, page, size)


@router.get("/outline")
async def get_contest_outline(request: Request):
    member_id = request.headers.get("Member-id")
    return await contest_service.get_contest_outline(member_id)


@router.get("/result/{contest_id}")
async def get_contest_result(contest_id: int):
    return await contest_service.get_contest_result(contest_id)


@router.post("")
def enroll_contest(contest_create: ContestRequest):
    # 관리자인지 확인하는 과정 추가해야됨
    # header에 Id가 들어가는데 Admin이면 할 수 있는 걸로
    contest_service.create_contest(contest_create=contest_create)


@router.post("/participate")
async def participate_contest(request: Request, info_create: InfoRequest):
    member_id = request.headers.get("Member-id")
    await contest_service.participate_contest(member_id, info_create)


@router.delete("/participate/{contest_id}")
def cancel_participate_contest(request: Request, contest_id: int):
    member_id = request.headers.get("Member-id")
    contest_service.cancel_participate_contest(member_id, contest_id)


@router.delete("/{contest_id}")
def delete_contest(contest_id: int):
    # 관리자인지 확인하는 과정 추가
    contest_service.delete_contest(contest_id)


@router.get("/history")
def get_contest_history(request: Request):
    member_id = request.headers.get("Member-id")
    return contest_service.get_contest_history(member_id)


@router.get("/chart/{contest_id}")
def get_contest_chart(contest_id: int):
    return contest_service.get_contest_chart(contest_id)


@router.get("/result/{contest_id}")
def get_real_contest_result(contest_id: int):
    return contest_service.get_real_contest_result(contest_id)


@router.get("/trade/{contest_id}")
def get_trade_contest(request: Request, contest_id: int):
    member_id = request.headers.get("Member-id")
    return contest_service.get_trade_contest(contest_id, member_id)