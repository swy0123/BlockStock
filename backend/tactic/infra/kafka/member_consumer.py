from aiokafka import AIOKafkaConsumer
import asyncio
from fastapi import APIRouter
import os.path
from domain.member.services.member_service import msg_to_member, is_key_exists, save_member_data

route = APIRouter()

loop = asyncio.get_event_loop()


async def consume():
    consumer = AIOKafkaConsumer("member-topic", loop=loop,
                                bootstrap_servers=os.environ["KAFKA_SERVER"], group_id="tactic-consumer")
    await consumer.start()
    try:
        async for msg in consumer:
            member = msg_to_member(msg.value)
            if is_key_exists(member.id):
                save_member_data(member)
    finally:
        await consumer.stop()
