from fastapi import FastAPI
from db.conn import engineconn
from domain.contest.models.trade_info import TradeInfo

from domain.tactic.routers import tactic
from domain.contest.routers import contest

app = FastAPI()

engine = engineconn()
session = engine.sessionmaker()

app.include_router(tactic.app)
app.include_router(contest.router)

@app.get("/")
async def root():
    return {"message": "Hello World"}

# @app.get("/hello/{name}")
# async def say_hello(name: str):
#     return {"message": f"Hello {name}"}

@app.get("/contest")
async def root():
    # DB연동 테스트
    example = session.query(TradeInfo).all()
    return example
