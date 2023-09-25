from fastapi import status


class StatusCode:
    OPTION_NOT_EXIST_ERROR = status.HTTP_403_FORBIDDEN


class Message:
    OPTION_NOT_EXIST_ERROR = "존재하지 않는 종목입니다."