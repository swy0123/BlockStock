from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db.conn import engineconn
from domain.tactic.routers import tactic
from domain.contest.routers import contest
from domain.option.routers import option
from redis_config import redis_config
from domain.contest.services.contest_schedule import check_contest

import py_eureka_client.eureka_client as eureka_client

app = FastAPI()
check_contest() # 대회 시작시간인지 확인하는 스케줄러

origin = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"]
)
app.include_router(tactic.app)
app.include_router(contest.router)
app.include_router(option.router)

your_rest_server_port = 8000


@app.on_event("startup")
async def startup_event():
    await eureka_client.init_async(eureka_server="https://j9b210.p.ssafy.io:8761",
                                   app_name="tactic-service",
                                   instance_port=8000)


engine = engineconn()
session = engine.sessionmaker()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/api/redis_test")
async def redis_test():
    res = await redis_test()

    return {"res": res}


async def redis_test():
    rd = redis_config()

    return {
        "data": rd.get("juice")
    }
