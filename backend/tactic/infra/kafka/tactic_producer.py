import json

from aiokafka import AIOKafkaConsumer, AIOKafkaProducer
import asyncio
from fastapi import APIRouter
import os.path

from domain.contest.schemas.contest_end_message import ContestEndMessage
from domain.contest.schemas.contest_participate_message import ContestParticipateMessage

loop = asyncio.get_event_loop()


async def produce_contest_participate(member_id: int, contest_id: int, ticket_cnt: int):
    producer = AIOKafkaProducer(loop=loop, bootstrap_servers=os.environ["KAFKA_SERVER"])
    await producer.start()
    participate_message = ContestParticipateMessage()
    participate_message.message = "CONTEST_PARTICIPATE"
    participate_message.contestId = member_id
    participate_message.contestId = contest_id
    participate_message.ticketCnt = ticket_cnt
    await producer.send("tactic-topic", json.dumps(participate_message.to_dict()).encode("UTF-8"))


async def produce_contest_end(contest_id: int, contest_title: str, member_ids: list, results: list):
    producer = AIOKafkaProducer(loop=loop, bootstrap_servers=os.environ["KAFKA_SERVER"])
    await producer.start()
    end_message = ContestEndMessage()
    end_message.message = "CONTEST_END"
    end_message.contestId = contest_id
    end_message.contestTitle = contest_title
    end_message.memberIds = member_ids
    end_message.results = results
    await producer.send("tactic-topic", json.dumps(end_message.to_dict()).encode("UTF-8"))
