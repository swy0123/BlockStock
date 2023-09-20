from fastapi import APIRouter, Query, Header
from typing import Optional
from domain.contest.schemas.contest_requeset import ContestRequest
from domain.contest.schemas.info_request import InfoRequest
from domain.contest.services import contest_service
from redis_config import redis_config

router = APIRouter()


@router.get("/api/contest")
def get_contest(status: str = Query(default=None),
                key_word: str = Query(default=""),
                page: int = Query(default=None),
                size: int = Query(default=None)):
    return contest_service.get_contests(status, key_word, page, size)

@router.get("/api/contest/result")
def get_contest_result():
    return contest_service.get_contest_result()

@router.get("/api/result/prev")
def get_prev_contest_result():
    return contest_service.get_prev_contest_result()

@router.post("/api/contest")
def enroll_contest(contest_create: ContestRequest):
    # 관리자인지 확인하는 과정 추가해야됨
    # header에 Id가 들어가는데 Admin이면 할 수 있는 걸로
    rd = redis_config()

    contest_service.create_contest(contest_create=contest_create)

    return {"message": "대회 등록"}


@router.post("/api/contest/participate")
def participate_contest(info_create: InfoRequest, user_id: Optional[int] = Header(None)):
    contest_service.participate_contest(user_id, info_create)

@router.delete("/api/contest/participate/{contest_id}")
def cancel_participate_contest(contest_id: int, user_id: Optional[int] = Header(None)):
    contest_service.cancel_participate_contest(user_id, contest_id)

@router.delete("/{contest_id}")
def delete_contest(contest_id: int):
    # 관리자인지 확인하는 과정 추가
    contest_service.delete_contest(contest_id)

    return {"message": "대회 삭제"}

@router.get('/contest/result/prev')
def get_prev_contest_result():
    return contest_service.get_prev_contest_result()


@router.get("/real-time")
def real_time_stock(option_code: str):
    # 대회에 대한 초당 데이터 저장
    # 시가

    # 실시간 데이터를 특정 초마다 crontab을 이용하던지 하는게 나을듯
    # 대회는 9시나 15시 사이에 시작

    # 대회를 시작할 때, 이전 데이터들을 가지고 옴
    # 1초 마다 해당 주식의 시세, ... 데이터 가지고 옴 (DB에 저장)
    # 주기마다 대회 참여하는 사람들의 알고리즘 실행하면서 자산 변동해주기

    # 대회를 참가하는 사람들의 로직을 실행
    # contest_update()

    return {"message": option_code}
