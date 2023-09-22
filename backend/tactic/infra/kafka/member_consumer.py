from aiokafka import AIOKafkaConsumer
import asyncio
from fastapi import APIRouter
import os.path

route = APIRouter()

loop = asyncio.get_event_loop()


async def consume():
    consumer = AIOKafkaConsumer("member-topic", loop=loop,
                                bootstrap_servers=os.environ["KAFKA_SERVER"], group_id="tactic-consumer-tmp")
    await consumer.start()
    try:
        async for msg in consumer:
            print(f'Consumer msg: {msg}')
    finally:
        await consumer.stop()
