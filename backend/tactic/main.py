import os

import uvicorn
from fastapi import FastAPI, Depends, status, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from db.conn import engineconn
from domain.tactic.routers import tactic
from domain.contest.routers import contest
from domain.option.routers import option
from redis_config import redis_config
import asyncio
import infra.kafka.member_consumer as member_consumer

import py_eureka_client.eureka_client as eureka_client

app = FastAPI(host="0.0.0.0", port=8000)
route = APIRouter()

origins = [
    "http://localhost:5173/",
    "http://127.0.0.1:5173/",
    "https://j9b210.p.ssafy.io:8443/"
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