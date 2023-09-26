from fastapi import HTTPException
from sqlalchemy import desc, func

from domain.contest.models.trade import Trade
from domain.contest.schemas.contest_history_response import ContestHistoryResponse
from domain.contest.schemas.contest_real_time_response import ContestRealTimeResponse
from domain.contest.schemas.contest_result_response import ContestResultList
from domain.contest.schemas.contest_list_resopnse import ContestListResponse
from domain.contest.schemas.contest_request import ContestRequest
from domain.contest.schemas.contest_trade_info_response import ContestTradeInfoResponse
from domain.contest.schemas.contest_trade_response import ContestTradeResponse
from domain.contest.schemas.info_request import InfoRequest
from domain.contest.schemas.contest_response import ContestResponse
from domain.contest.schemas.contest_ranking_response import ContestRankingResponse
from domain.contest.schemas.contest_type import ContestType
from domain.contest.models.contest import Contest, Participate, ContestRealTime
from domain.contest.error.contest_exception import StatusCode, Message
from common.conn import engineconn
from datetime import datetime

from domain.option.models.option import Option

engine = engineconn()
session = engine.sessionmaker()

user_profile_service_url = "https://j9b210.p.ssafy.io:8443/api/member/profile"


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
            nick_name = ""
            ranking_response = ContestRankingResponse(member_id=rank.member_id,
                                                      nick_name=nick_name,
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
        nick_name = ""
        result.append(ContestRankingResponse(member_id=participate.member_id,
                                             nick_name=nick_name,
                                             profile_image=profile_image,
                                             ticket=contest_ticket,
                                             result_money=participate.result_money))

    return result


def get_prev_contest_result():
    contest = session.query(Contest).filter(Contest.end_time < datetime.now()).order_by(
        Contest.end_time.desc()).first()

    members = (session.query(Participate.member_id, Participate.result_money).
               outerjoin(Contest, Contest.id == Participate.contest_id).
               filter(Contest.id == contest.id).
               limit(3).all())

    result = []

    for member in members:
        nick_name = ""
        result.append(ContestRankingResponse(member_id=member.member_id,
                                             nick_name=nick_name,
                                             profile_image="",  # 이미지 받아오기
                                             ticket=contest.ticket,
                                             result_money=member.result_money))

    return result


def create_contest(contest_create: ContestRequest):
    if contest_create.start_time < datetime.now():
        raise HTTPException(status_code=StatusCode.CONTEST_NOT_EXIST_ERROR_CODE,
                            detail=Message.CONTEST_ENROLL_BOFORE_TODAY)

    if contest_create.end_time < contest_create.start_time:
        raise HTTPException(status_code=StatusCode.CONTEST_ENROLL_START_END_ERROR,
                            detail=Message.CONTEST_ENROLL_START_END_ERROR)

    db_contest = Contest(contest_create)

    session.add(db_contest)
    session.commit()


def delete_contest(contest_id: int):
    session.query(Participate).filter(Participate.contest_id == contest_id).delete()

    contest_delete = (session.query(Contest).where(Contest.id == contest_id)).one()

    if not contest_delete:
        raise HTTPException(status_code=StatusCode.CONTEST_NOT_EXIST_ERROR_CODE,
                            detail=Message.CONTEST_NOT_EXIST_ERROR_CODE)
    session.delete(contest_delete)
    session.commit()

    return {"ok": True}


def participate_contest(user_id: int, info_create: InfoRequest):
    contest_ticket = session.get(Contest, info_create.contest_id).ticket

    db_participate = Participate(user_id, info_create, contest_ticket)

    # user 유효한지 확인

    # 이미 참가 했으면 에러
    if session.query(Participate).filter(
            Participate.contest_id == info_create.contest_id, Participate.member_id == user_id).all():
        raise HTTPException(status_code=StatusCode.ALREADY_EXIST_PARTICIPATE_CODE,
                            detail=Message.ALREADY_EXIST_PARTICIPATE_CODE)

    if not session.get(Contest, info_create.contest_id):
        raise HTTPException(status_code=StatusCode.CONTEST_NOT_EXIST_ERROR_CODE,
                            detail=Message.CONTEST_NOT_EXIST_ERROR_CODE)

    # tactic 값 유효한지 확인

    session.add(db_participate)
    session.commit()


def get_contest_history(user_id: int):
    result = []

    participate_history = (session.query(Participate.id,
                                         Participate.result_money,
                                         Participate.tactic_id,
                                         Participate.member_id,
                                         Contest.title,
                                         Contest.ticket,
                                         Contest.id.label('contest_id')).
                           outerjoin(Contest, Contest.id == Participate.contest_id).
                           filter(Participate.member_id == user_id).all())

    rank = None

    for history in participate_history:
        subquery = (
            session
            .query(Participate.id, Participate.member_id,
                   func.rank().over(order_by=Participate.result_money.desc()).label('rank'))
            .join(Contest, Participate.contest_id == Contest.id)
            .filter(Contest.id == history.contest_id)
            .subquery()
        )

        rank = (
            session
            .query(subquery.c.rank)
            .filter(subquery.c.member_id == history.member_id)
            .first()
        )

        result.append(ContestHistoryResponse(participate_id=history.id,
                                             title=history.title,
                                             result_money=history.result_money,
                                             tactic_id=history.tactic_id,
                                             rank=rank[0],
                                             ticket=history.ticket))

    return result


def cancel_participate_contest(user_id: int, contest_id: int):
    # user 유효한지 확인
    # 이미 대회에 참여하지 않는다면 에러
    if not session.get(Contest, contest_id):
        raise HTTPException(status_code=StatusCode.CONTEST_NOT_EXIST_ERROR_CODE)

    # 해당 참가내역이 없으면 에러

    participate = (session.query(Participate).where(Participate.member_id == user_id).
                   where(Participate.contest_id == contest_id)).one()

    session.delete(participate)
    session.commit()


def get_contest_chart(contest_id: int):
    if not session.get(Contest, contest_id):
        raise HTTPException(status_code=StatusCode.CONTEST_NOT_EXIST_ERROR_CODE)

    contest_real_times = session.query(ContestRealTime).filter(ContestRealTime.contest_id == contest_id)

    result = []
    for contest_real_time in contest_real_times:
        idx = contest_real_time.id

        if idx == 0:
            vol = contest_real_time.vol
        else:
            prev_data = session.query(ContestRealTime.vol).filter(ContestRealTime.id == idx - 1).first()

            if prev_data is None:
                vol = contest_real_time.vol
            else:
                vol = prev_data[0]

        result.append(ContestRealTimeResponse(contest_real_time, contest_real_time.vol - vol))

    return result


def get_real_contest_result(contest_id: int):
    participate_results = (session.query(Participate).filter(Participate.contest_id == contest_id).
                           order_by(desc(Participate.result_money)))

    result = []

    for participate_result in participate_results:
        profile_image = ""
        nick_name = ""
        ranking_response = ContestRankingResponse(member_id=participate_result.member_id,
                                                  nick_name=nick_name,
                                                  profile_image=profile_image,
                                                  ticket=participate_result.ticket,
                                                  result_money=participate_result.result_money)

        result.append(ranking_response)

    return result


def get_trade_contest(contest_id: int, member_id: int):
    participate = session.query(Participate).filter(Participate.contest_id == contest_id, member_id == member_id).first()
    contest = session.query(Contest).filter(Contest.id == contest_id).first()
    trades = (session.query(Trade).outerjoin(Participate, Participate.id == Trade.participate_id).
              filter(Participate.member_id == member_id).order_by(desc(Trade.trade_at)).all())

    option_name = session.query(Option.option_name).filter(Option.option_code == contest.option_code).first()[0]

    trade_response = []
    for trade in trades:
        trade_response.append(ContestTradeResponse(trade))

    return ContestTradeInfoResponse(participate, contest, option_name, trade_response)