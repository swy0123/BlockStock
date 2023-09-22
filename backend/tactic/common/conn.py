from sqlalchemy import *
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

import os.path
import os
import redis

load_dotenv()

DB_URL = f'mysql+pymysql://{os.environ["MARIA_USER"]}:{os.environ["MARIA_PASSWORD"]}@{os.environ["MARIA_HOST"]}:{os.environ["MARIA_PORT"]}/{os.environ["MARIA_SCHEMA"]}'


class engineconn:

    def __init__(self):
        self.engine = create_engine(DB_URL, pool_recycle=500, echo=True)

    def sessionmaker(self):
        Session = sessionmaker(bind=self.engine)
        session = Session()
        return session

    def connection(self):
        conn = self.engine.connect()
        return conn


def redis_config():
    try:
        REDIS_HOST = str = os.environ["REDIS_HOST"]
        REDIS_PORT = integer = os.environ["REDIS_PORT"]
        REDIS_DATABASE = integer = 5  # 데이터베이스 번호
        REDIS_PASSWORD = str = os.environ["REDIS_PASSWORD"]

        return redis.Redis(host=REDIS_HOST,
                           port=REDIS_PORT,
                           db=REDIS_DATABASE,
                           password=REDIS_PASSWORD)

    except:
        print("redis connection failure")
