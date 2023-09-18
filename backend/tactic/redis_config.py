import os
from dotenv import load_dotenv
import redis

load_dotenv()

def redis_config():
    try:
        REDIS_HOST = str = os.environ["REDIS_HOST"]
        REDIS_PORT = integer = os.environ["REDIS_PORT"]
        REDIS_DATABASE = integer = 5 # 데이터베이스 번호
        REDIS_PASSWORD = str = os.environ["REDIS_PASSWORD"]

        return redis.Redis(host=REDIS_HOST,
                           port=REDIS_PORT,
                           db=REDIS_DATABASE,
                           password=REDIS_PASSWORD)

    except:
        print("redis connection failure")
