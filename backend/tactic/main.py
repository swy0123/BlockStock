from fastapi import FastAPI

from domain.tactic.routers import tactic

app = FastAPI()
app.include_router(tactic.app)

@app.get("/")
async def root():
    return {"message": "Hello World"}

# @app.get("/hello/{name}")
# async def say_hello(name: str):
#     return {"message": f"Hello {name}"}


