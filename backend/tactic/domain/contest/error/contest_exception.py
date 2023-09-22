from fastapi import status
class StatusCode:
    CONTEST_NOT_EXIST_ERROR_CODE = status.HTTP_403_FORBIDDEN
    CONTEST_ENROLL_BOFORE_TODAY = status.HTTP_403_FORBIDDEN
    CONTEST_ENROLL_START_END_ERROR = status.HTTP_403_FORBIDDEN
    ALREADY_EXIST_PARTICIPATE_CODE = status.HTTP_403_FORBIDDEN

class Message:
    CONTEST_NOT_EXIST_ERROR_CODE = "해당 번호의 대회가 없습니다."
    CONTEST_ENROLL_BOFORE_TODAY="대회 시작 날짜는 오늘 이후의 날짜를 입력해주세요."
    CONTEST_ENROLL_START_END_ERROR="대회 종료날짜는 시작 날짜 이후로 입력해주세요."
    ALREADY_EXIST_PARTICIPATE_CODE = "이미 대회 참가를 진행했습니다."