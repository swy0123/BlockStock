from fastapi import APIRouter
from websocket_client import get_approval, pdbind, on_message, on_error, on_close, on_open
import websocket

router = APIRouter(
    prefix="/contest"
)

@router.get("/real-time/{option_code}")
async def real_time_stock(option_code: str):
    # 모의투자
    ws = websocket.WebSocketApp("ws://ops.koreainvestment.com:31000",
                                on_open=on_open, on_message=on_message, on_error=on_error)
    ws.run_forever()

    return {"message": option_code}
