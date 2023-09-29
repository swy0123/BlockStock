from fastapi import FastAPI
from schedular import check_contest

check_contest()
app = FastAPI()