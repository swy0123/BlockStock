from fastapi import FastAPI
from schedular import check_contest

app = FastAPI()


@app.on_event("startup")
async def on_startup():
    await check_contest()
