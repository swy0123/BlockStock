from fastapi import APIRouter
# from websocket_client import get_approval, pdbind, on_message, on_error, on_close, on_open
# import websocket
from domain.contest.services.contest_schedule import contest_update

router = APIRouter(
    # prefix="/contest"
)

# @router.post("/contest")
# async def enroll_contest(req: contest_create):
#     query = contest.insert()
#
#     values = req
#     await db.execute(query.values)
#     return {**req.dict()}

@router.get("/contest/real-time/{option_code}")
async def real_time_stock(option_code: str):
    # 1. 웹소켓을 사용하는 방법
    # ws = websocket.WebSocketApp("ws://ops.koreainvestment.com:31000",
    #                             on_open=on_open, on_message=on_message, on_error=on_error)
    # ws.run_forever()

    # 2. 실시간 데이터를 특정 초마다 crontab을 이용하던지 하는게 나을듯
    # 대회를 시작할 때, 이전 데이터들을 가지고 옴
    # 1초 마다 해당 주식의 시세, ... 데이터 가지고 옴 (DB에 저장)
    # 주기마다 대회 참여하는 사람들의 알고리즘 실행하면서 자산 변동해주기

    # 대회를 참가하는 사람들의 로직을 실행
    contest_update()

    return {"message": option_code}
