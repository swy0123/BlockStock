from fastapi import FastAPI
from db.conn import engineconn
from domain.contest.models.trade_info import TradeInfo
from domain.tactic.routers import tactic
from domain.contest.routers import contest
from domain.option.routers import option

import py_eureka_client.eureka_client as eureka_client

app = FastAPI()

app.include_router(tactic.app)
app.include_router(contest.router)
app.include_router(option.router)

your_rest_server_port = 64414

@app.on_event("startup")
async def startup_event():
    await eureka_client.init_async(eureka_server="https://j9b210.p.ssafy.io:8761",
                       app_name="tactic-service",
                       instance_port=64414)

engine = engineconn()
session = engine.sessionmaker()



@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/contest")
async def root():
    # DB연동 테스트
    # example = session.query(TradeInfo).all()
    # return example
    return {"message": "DB연동 테스트"}