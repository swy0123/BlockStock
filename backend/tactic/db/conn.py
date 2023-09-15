import json
import os.path

from sqlalchemy import *
from sqlalchemy.orm import sessionmaker

DB_URL = f'mysql+pymysql://{os.environ["MARIA_USER"]}:{os.environ["MARIA_PASSWORD"]}@{os.environ["MARIA_HOST"]}:{os.environ["MARIA_PORT"]}/{os.environ["MARIA_SCHEMA"]}'

class engineconn:

    def __init__(self):
        self.engine = create_engine(DB_URL, pool_recycle = 500)

    def sessionmaker(self):
        Session = sessionmaker(bind=self.engine)
        session = Session()
        return session

    def connection(self):
        conn = self.engine.connect()
        return conn