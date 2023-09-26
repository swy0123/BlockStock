import asyncio

import py_eureka_client.eureka_client as eureka_client
from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from starlette import status

import infra.kafka.member_consumer as member_consumer
from common.conn import engineconn
from domain.contest.routers import contest
from domain.contest.services.contest_schedule import check_contest
from domain.member.services.member_service import req_member_data, save_member_data, get_member_data, is_key_exists
from domain.option.routers import option
from domain.tactic.routers import tactic

app = FastAPI(host="0.0.0.0", port=8000)
check_contest()
route = APIRouter()

origins = [
    "http://localhost:5173/",
    "http://127.0.0.1:5173/",
    "https://j9b210.p.ssafy.io:8443/",
    "https://j9b210.p.ssafy.io:443/",
    "https://j9b210.p.ssafy.io/"
    "https://seal-striking-presumably.ngrok-free.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"]
)

app.include_router(member_consumer.route)
asyncio.create_task(member_consumer.consume())


@app.options("/{path:path}", status_code=status.HTTP_200_OK)
async def options_handler(path):
    return {"Allow" : "GET, POST, PUT, DELETE, OPTIONS"}

app.include_router(tactic.app)
app.include_router(contest.router)
app.include_router(option.app)

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
    # member = await req_member_data(10)
    # print(get_member_data(10).nickname)
    # print(str(is_key_exists(10)) + "===" + str(is_key_exists(2)))
    return "hello root"
