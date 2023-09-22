import redis
import os.path


def redis_config():
    try:
        REDIS_HOST = str = os.environ["REDIS_HOST"]
        REDIS_PORT = integer = os.environ["REDIS_PORT"]
        REDIS_PASSWORD = str = os.environ["REDIS_PASSWORD"]

        return redis.Redis(host=REDIS_HOST,
                           port=REDIS_PORT,
                           db=5,
                           password=REDIS_PASSWORD)

    except:
        print("redis connection failure")
