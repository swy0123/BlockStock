from fastapi import HTTPException
from sqlalchemy import desc, func

from domain.contest.models.trade import Trade
from domain.member.services.member_service import *
from domain.contest.schemas.contest_history_response import ContestHistoryResponse
from domain.contest.schemas.contest_outline_response import ContestOutlineResponse
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
from domain.option.services import option_service

from domain.option.models.option import Option


def get_contests(member_id: int,
                 status: str,
                 key_word: str,
                 page: int,
                 size: int):

    engine = engineconn()
    session = engine.sessionmaker()

    offset = page * size

    result = None
    contest_result = []

    if status == ContestType.PROCEED:
        result = (session.query(Contest).where(Contest.start_time <= datetime.now()).
                  where(datetime.now() <= Contest.end_time).filter((Contest.title.ilike(f'%%{key_word}%%'))).
                  order_by(desc(Contest.created_at)))

    elif status == ContestType.EXPECTED:
        result = (session.query(Contest).where(datetime.now() < Contest.start_time).
                  filter(Contest.title.like(f'%%{key_word}%%')).
                  order_by(desc(Contest.created_at)))

    elif status == ContestType.FINISH:
        result = (session.query(Contest).where(Contest.end_time < datetime.now()).
                  filter(Contest.title.ilike(f'%%{key_word}%%')).
                  order_by(desc(Contest.created_at)))

    total_cnt = result.count()

    result = result.offset(offset).limit(size).all()

    for contest in result:
        if (session.query(Participate).outerjoin(Contest, Participate.contest_id == Contest.id).
                filter(Participate.member_id == member_id, Contest.id == contest.id).one_or_none()) is not None:
            is_registed = True
        else:
            is_registed = False

        join_people = (session.query(Participate).outerjoin(Contest, Contest.id == Participate.contest_id).
                       where(Contest.id == contest.id).count())

        option_name = option_service.get_option_name(contest.option_code)
        contest_result.append(ContestResponse(contest, is_registed, join_people, option_name))

    session.close()
    return ContestListResponse(contest_result, total_cnt)


async def get_contest_result(contest_id: int):
    engine = engineconn()
    session = engine.sessionmaker()
    result = []

    contest = session.get(Contest, contest_id)
    if not contest:
        raise HTTPException(status_code=StatusCode.CONTEST_NOT_EXIST_ERROR_CODE,
                            detail=Message.CONTEST_NOT_EXIST_ERROR_MSG)

    contest_ticket = contest.ticket

    participates = session.query(Participate).filter(Participate.contest_id == contest_id).order_by(
        Participate.result_money.desc())

    for participate in participates:
        member = await get_member_data(participate.member_id)

        result.append(ContestRankingResponse(member_id=participate.member_id,
                                             nick_name=member.nickname,
                                             ticket=contest_ticket,
                                             result_money=participate.result_money))
    session.close()
    return result


def create_contest(contest_create: ContestRequest):
    engine = engineconn()
    session = engine.sessionmaker()
    if contest_create.start_time < datetime.now():
        raise HTTPException(status_code=StatusCode.CONTEST_ENROLL_BOFORE_TODAY_ERROR_CODE,
                            detail=Message.CONTEST_ENROLL_BOFORE_TODAY_ERROR_MSG)

    if contest_create.end_time < contest_create.start_time:
        raise HTTPException(status_code=StatusCode.CONTEST_ENROLL_START_END_ERROR_CODE,
                            detail=Message.CONTEST_ENROLL_START_END_ERROR_MSG)

    db_contest = Contest(contest_create)

    session.add(db_contest)
    session.commit()
    session.close()


def delete_contest(contest_id: int):
    engine = engineconn()
    session = engine.sessionmaker()
    session.query(Participate).filter(Participate.contest_id == contest_id).delete()

    contest_delete = (session.query(Contest).where(Contest.id == contest_id)).one()

    if not contest_delete:
        raise HTTPException(status_code=StatusCode.CONTEST_NOT_EXIST_ERROR_CODE,
                            detail=Message.CONTEST_NOT_EXIST_ERROR_MSG)
    session.delete(contest_delete)
    session.commit()
    session.close()


async def participate_contest(member_id: int, info_create: InfoRequest):

    member = await get_member_data(member_id)

    engine = engineconn()
    session = engine.sessionmaker()
    contest_ticket = session.get(Contest, info_create.contest_id).ticket

    if member.ticket_count < contest_ticket:
        raise HTTPException(status_code=StatusCode.LESS_TICKET_ERROR_CODE,
                            detail=Message.LESS_TICKET_ERROR_MSG)

    db_participate = Participate(member_id, info_create, contest_ticket)

    join_people = (session.query(Participate).outerjoin(Contest, Contest.id == Participate.contest_id).
                   where(Contest.id == info_create.contest_id).count())

    if session.query(Contest.max_capacity).filter(Contest.id == info_create.contest_id).first()[0] == join_people:
        raise HTTPException(status_code=StatusCode.MAXIMUM_JOIN_PEOPLE_ERROR_CODE,
                            detail=Message.MAXIMUM_JOIN_PEOPLE_ERROR_MSG)

    if session.query(Participate).filter(
            Participate.contest_id == info_create.contest_id, Participate.member_id == member_id).all():
        raise HTTPException(status_code=StatusCode.ALREADY_EXIST_PARTICIPATE_ERROR_CODE,
                            detail=Message.ALREADY_EXIST_PARTICIPATE_ERROR_MSG)

    if not session.get(Contest, info_create.contest_id):
        raise HTTPException(status_code=StatusCode.CONTEST_NOT_EXIST_ERROR_CODE,
                            detail=Message.CONTEST_NOT_EXIST_ERROR_MSG)

    session.add(db_participate)
    session.commit()
    session.close()


def get_contest_history(user_id: int):
    engine = engineconn()
    session = engine.sessionmaker()
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
    session.close()
    return result


def cancel_participate_contest(user_id: int, contest_id: int):
    engine = engineconn()
    session = engine.sessionmaker()

    if not session.get(Contest, contest_id):
        raise HTTPException(status_code=StatusCode.CONTEST_NOT_EXIST_ERROR_CODE)

    participate = (session.query(Participate).where(Participate.member_id == user_id).
                   where(Participate.contest_id == contest_id)).one()

    session.delete(participate)
    session.commit()
    session.close()


def get_contest_chart(contest_id: int):
    engine = engineconn()
    session = engine.sessionmaker()
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
    session.close()
    return result


def get_real_contest_result(contest_id: int):
    engine = engineconn()
    session = engine.sessionmaker()
    participate_results = (session.query(Participate).filter(Participate.contest_id == contest_id).
                           order_by(desc(Participate.result_money)))

    result = []

    for participate_result in participate_results:
        member = get_member_data(participate_result.member_id)

        ranking_response = ContestRankingResponse(member_id=participate_result.member_id,
                                                  nick_name=member.id,
                                                  ticket=participate_result.ticket,
                                                  result_money=participate_result.result_money)

        result.append(ranking_response)
    session.close()
    return result


def get_trade_contest(contest_id: int, member_id: int):
    engine = engineconn()
    session = engine.sessionmaker()
    participate = session.query(Participate).filter(Participate.contest_id == contest_id,
                                                    member_id == member_id).first()
    contest = session.query(Contest).filter(Contest.id == contest_id).first()
    trades = (session.query(Trade).outerjoin(Participate, Participate.id == Trade.participate_id).
              filter(Participate.member_id == member_id).order_by(desc(Trade.trade_at)).all())

    option_name = session.query(Option.option_name).filter(Option.option_code == contest.option_code).first()[0]

    trade_response = []
    for trade in trades:
        trade_response.append(ContestTradeResponse(trade))
    session.close()
    return ContestTradeInfoResponse(participate, contest, option_name, trade_response)


async def get_contest_outline(member_id: int):
    engine = engineconn()
    session = engine.sessionmaker()
    contests = (session.query(Contest).filter(Contest.start_time <= datetime.now(), datetime.now() < Contest.end_time).
                order_by(Contest.start_time.asc()).all())

    contest_result = []

    for contest in contests:
        rankings = session.query(Participate).filter(Participate.contest_id == contest.id).order_by(
            Participate.result_money.desc()).all()

        ranking_result = []
        for rank in rankings:
            member = await get_member_data(rank.member_id)

            ranking_response = ContestRankingResponse(member_id=rank.member_id,
                                                      nick_name=member.nickname,
                                                      ticket=contest.ticket,
                                                      result_money=rank.result_money)

            ranking_result.append(ranking_response)

        contest_result.append(ContestResultList(contest, ranking_result))

    nextContestList = []
    prevContestResult = []

    expected_contests = (session.query(Contest).where(datetime.now() < Contest.start_time).
                         order_by(desc(Contest.created_at)).all())

    for contest in expected_contests:
        if (session.query(Participate).outerjoin(Contest, Participate.contest_id == Contest.id).
                filter(Participate.member_id == member_id, Contest.id == contest.id).one_or_none()) is not None:
            is_registed = True
        else:
            is_registed = False

        join_people = (session.query(Participate).outerjoin(Contest, Contest.id == Participate.contest_id).
                       where(Contest.id == contest.id).count())

        option_name = option_service.get_option_name(contest.option_code)

        nextContestList.append(ContestResponse(contest=contest,
                                               is_registed=is_registed,
                                               join_people=join_people,
                                               option_name=option_name))

    last_contest = (session.query(Contest).filter(Contest.end_time < datetime.now()).
                    order_by(Contest.end_time.desc()).first())

    if last_contest is not None:
        members = (session.query(Participate.member_id, Participate.result_money).
                   outerjoin(Contest, Contest.id == Participate.contest_id).
                   filter(Contest.id == last_contest.id).
                   limit(3).all())

        for member in members:
            get_member = await get_member_data(member.member_id)

            prevContestResult.append(ContestRankingResponse(member_id=member.member_id,
                                                            nick_name=get_member.nickname,
                                                            ticket=contest.ticket,
                                                            result_money=member.result_money))

    session.close()
    return ContestOutlineResponse(currentContestResultList=contest_result,
                                  nextContestList=nextContestList,
                                  prevContestResult=prevContestResult)
