import json
import os.path

from sqlalchemy import *
from sqlalchemy.orm import sessionmaker

DB_URL = f'mysql+pymysql://{os.environ["db_user"]}:{os.environ["db_password"]}@{os.environ["db_host"]}:{os.environ["db_port"]}/{os.environ["db_schema"]}'

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