from fastapi import HTTPException
from sqlalchemy import desc

from domain.contest.schemas.contest_history_response import ContestHistoryResponse
from domain.contest.schemas.contest_result_response import ContestResultList
from domain.contest.schemas.contest_list_resopnse import ContestListResponse
from domain.contest.schemas.contest_requeset import ContestRequest
from domain.contest.schemas.info_request import InfoRequest
from domain.contest.schemas.contest_response import ContestResponse
from domain.contest.schemas.contest_prev_response import ContestPrevResponse
from domain.contest.schemas.contest_type import ContestType
from domain.contest.models.contest import Contest, Participate
from domain.contest.error.contest_exception import StatusCode, Message
from common.conn import engineconn
from datetime import datetime

engine = engineconn()
session = engine.sessionmaker()


def get_contests(status: str,
                 key_word: str,
                 page: int,
                 size: int):
    offset = page * size

    result = None
    contest_result = []

    if status == ContestType.PROCEED:
        result = (session.query(Contest).where(Contest.start_time <= datetime.now()).
                  where(datetime.now() <= Contest.end_time).filter((Contest.title.ilike(f'%%{key_word}%%'))).
                  order_by(desc(Contest.created_at)).
                  offset(offset).limit(size).all())

    elif status == ContestType.EXPECTED:
        result = (session.query(Contest).where(datetime.now() < Contest.start_time).
                  filter(Contest.title.like(f'%%{key_word}%%')).
                  order_by(desc(Contest.created_at)).offset(offset).limit(size).all())

    elif status == ContestType.FINISH:
        result = (session.query(Contest).where(Contest.end_time < datetime.now()).
                  filter(Contest.title.ilike(f'%%{key_word}%%')).
                  order_by(desc(Contest.created_at)).offset(offset).limit(size).all())

    for contest in result:
        # 참가한건지 안한건지 확인하는 변수 추가
        # 참여 인원 수 추가
        is_registed = False
        join_people = session.query(Participate).where(Contest.id == Participate.contest_id).count()
        contest_result.append(ContestResponse(contest, is_registed, join_people))

    return ContestListResponse(contest_result, len(contest_result))


def get_proceed_contest_result():
    contests = (session.query(Contest).filter(Contest.start_time <= datetime.now(), datetime.now() < Contest.end_time).
                order_by(Contest.start_time.asc()).all())


    result = []

    for contest in contests:
        rankings = session.query(Participate).filter(Participate.contest_id == contest.id).order_by(
            Participate.result_money.desc()).all()

        ranking_result = []
        for rank in rankings:
            # rank.member_id를 통해 image_path 구하기

            profile_image = ""
            ranking_response = ContestPrevResponse(member_id=rank.member_id,
                                                   profile_image=profile_image,
                                                   ticket=contest.ticket,
                                                   result_money=rank.result_money)

            ranking_result.append(ranking_response)
            # ranking_result.append(ranking_result)

        result.append(ContestResultList(contest, ranking_result))

    return result


def get_contest_result(contest_id: int):
    result = []

    contest = session.get(Contest, contest_id)
    if not contest:
        raise HTTPException(status_code=StatusCode.CONTEST_NOT_EXIST_ERROR_CODE,
                            detail=Message.CONTEST_NOT_EXIST_ERROR_CODE)

    contest_ticket = contest.ticket
    # contest_ticket = session.query(Contest.ticket).filter(Contest.id == contest_id).one()[0]

    participates = session.query(Participate).filter(Participate.contest_id == contest_id).order_by(
        Participate.result_money.desc())

    for participate in participates:
        # 사용자 프로필 이미지 요청
        profile_image = ""

        result.append(ContestPrevResponse(member_id=participate.member_id,
                                          profile_image=profile_image,
                                          ticket=contest_ticket,
                                          result_money=participate.result_money))

    return result


def get_prev_contest_result():
    contest = session.query(Contest).filter(Contest.end_time < datetime.now()).order_by(Contest.end_time.desc()).first()

    members = (session.query(Participate.member_id, Participate.result_money).
               outerjoin(Contest, Contest.id == Participate.contest_id).
               filter(Contest.id == contest.id).
               limit(3).all())

    result = []

    for member in members:
        result.append(ContestPrevResponse(member_id=member.member_id,
                                          profile_image="",  # 이미지 받아오기
                                          ticket=contest.ticket,
                                          result_money=member.result_money))

    return result


def create_contest(contest_create: ContestRequest):
    db_contest = Contest(contest_create)

    session.add(db_contest)
    session.commit()


def delete_contest(contest_id: int):
    contest = session.get(Contest, contest_id)

    if not contest:
        raise HTTPException(status_code=StatusCode.CONTEST_NOT_EXIST_ERROR_CODE,
                            detail=Message.CONTEST_NOT_EXIST_ERROR_CODE)
    session.delete(contest)
    session.commit()

    return {"ok": True}


def participate_contest(user_id: int, info_create: InfoRequest):
    db_participate = Participate(user_id, info_create)

    # user 유효한지 확인
    # 이미 참가 했으면 에러
    if not session.get(Contest, InfoRequest.contestId):
        raise HTTPException(status_code=StatusCode.CONTEST_NOT_EXIST_ERROR_CODE)

    # tactic 값 유효한지 확인

    session.add(db_participate)
    session.commit()


def get_contest_history(user_id: int):
    result = []

    participate_history = (session.query(Participate.result_money,
                                         Participate.tactic_id,
                                         Contest.ticket).
                           outerjoin(Contest, Contest.id == Participate.contest_id).
                           filter(Participate.member_id == user_id).all())

    for history in participate_history:
        rank = 0
        result.append(ContestHistoryResponse(result_money=history.result_money,
                                             tactic_id=history.tactic_id,
                                             ticket=history.ticket,
                                             rank=rank))

    return result


def cancel_participate_contest(user_id, contest_id):
    # user 유효한지 확인
    # 이미 대회에 참여하지 않는다면 에러
    if not session.get(Contest, contest_id):
        raise HTTPException(status_code=StatusCode.CONTEST_NOT_EXIST_ERROR_CODE)

    # 해당 참가내역이 없으면 에러

    participate = (session.query(Participate).where(Participate.member_id == user_id).
                   where(Participate.contest_id == contest_id)).one()

    session.delete(participate)
    session.commit()


def save_contest_sec_info():
    return ""
