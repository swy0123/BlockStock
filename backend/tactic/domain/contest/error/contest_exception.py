from fastapi import status
class StatusCode:
    CONTEST_DELETE_ERROR_CODE = status.HTTP_403_FORBIDDEN

class Message:
    CONTEST_DELETE_ERROR_MSG = "해당 번호의 대회가 없습니다."