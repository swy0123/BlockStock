import json

from common.config.redis_config import redis_config
from domain.member.model.member import Member
import httpx

rd = redis_config()


def get_member_data(member_id):
    redis_key = f"member:{member_id}"
    redis_value = rd.get(redis_key)

    if redis_value is not None:
        member_dict = json.loads(redis_value.decode('utf-8'))
        member = Member(**member_dict)
        return member
    else:
        return None


def msg_to_member(data_str):
    data_dict = json.loads(data_str)
    snake_case_data_dict = {camel_to_snake(key): value for key, value in data_dict.items()}
    return Member(**snake_case_data_dict)


def save_member_data(member):
    try:
        redis_key = f"member:{member.id}"
        member_dict = member.dict()
        redis_value = json.dumps(member_dict)
        rd.set(redis_key, redis_value)
        return f"Member 데이터가 성공적으로 저장되었습니다: {redis_key}"
    except Exception as e:
        return f"오류 발생: {str(e)}"


def is_key_exists(member_id):
    redis_key = f"member:{member_id}"
    return rd.exists(redis_key)


async def req_member_data(member_id):
    api_url = "https://j9b210.p.ssafy.io:64412/api/member"
    async with httpx.AsyncClient() as client:
        response = await client.get(api_url, headers={"Member-id": str(member_id)})
        if response.status_code == 200:
            response_json = response.json()
            member_data = {
                "id": response_json["id"],
                "nickname": response_json["nickname"],
                "money": response_json["money"],
                "ticket_count": response_json["ticketCnt"]
            }

            return Member(**member_data)


def camel_to_snake(name):
    result = [name[0].lower()]
    for char in name[1:]:
        if char.isupper():
            result.extend(['_', char.lower()])
        else:
            result.append(char)
    return ''.join(result)
