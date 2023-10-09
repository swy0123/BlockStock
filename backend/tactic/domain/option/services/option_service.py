import win32com.client
from fastapi import HTTPException
from sqlalchemy import or_, exists, and_, func

from domain.option.error.option_exception import StatusCode, Message
from domain.option.model.option import Option, OptionLike
from domain.option.schemas.option_like_request import OptionLikeRequest
from domain.option.schemas.option_response import OptionResponse
from domain.option.schemas.search_option_response import SearchOptionResponse
from common.conn import engineconn
import common.config.kis_api as kis

engine = engineconn()

# 연결 여부 체크
objCpCybos = win32com.client.Dispatch("CpUtil.CpCybos")
bConnect = objCpCybos.IsConnect

if bConnect == 0:
    print("PLUS가 정상적으로 연결되지 않음. ")
    exit()

kis.auth()


def get_main_stock_info():
    session = engine.sessionmaker()

    try:
        stocks = (session.query(Option.option_code, Option.option_name).
                  order_by(func.random()).limit(5).all())

        result = []

        for stock in stocks:
            res = kis.get_current_price(stock[0])

            priceChange = res["prdy_ctrt"]

            option_response = OptionResponse(option_code=stock.option_code,
                                             option_name=stock.option_name,
                                             currentPrice=res["stck_prpr"],
                                             comparePrevious=priceChange)

            result.append(option_response)
    finally:
        session.close()

    return result


def get_option_detail(option_code: str):
    response = SearchOptionResponse()

    inst_cp_stock_code = win32com.client.Dispatch("CpUtil.CpStockCode")

    name = inst_cp_stock_code.CodeToName(option_code)
    option_code = inst_cp_stock_code.NameToCode(name)

    if name == "":
        raise HTTPException(status_code=StatusCode.OPTION_NOT_EXIST_ERROR,
                            detail=Message.OPTION_NOT_EXIST_ERROR)

    response.optionCode = option_code
    response.optionName = name

    inst_stock_chart = win32com.client.Dispatch("CpSysDib.StockChart")
    inst_stock_chart.SetInputValue(0, option_code)
    inst_stock_chart.SetInputValue(1, ord('2'))
    inst_stock_chart.SetInputValue(4, 2)
    inst_stock_chart.SetInputValue(5, 5)
    inst_stock_chart.SetInputValue(6, ord('D'))
    inst_stock_chart.SetInputValue(9, ord('1'))
    inst_stock_chart.BlockRequest()

    print(inst_stock_chart.GetDataValue(0, 1))
    yesterday_close = inst_stock_chart.GetDataValue(0, 0)
    today_close = inst_stock_chart.GetDataValue(0, 1)

    response.todayClose = today_close

    diff_rate = (1 - today_close / yesterday_close) * 100
    response.diffRate = round(diff_rate, 3)

    return response


def get_keyword_search(member_id: int, keyword: str, like: bool):
    result = []
    session = engine.sessionmaker()

    try:
        if like:
            favorite_options = session.query(Option).join(OptionLike,
                                                          OptionLike.option_code == Option.option_code).filter(
                OptionLike.member_id == member_id).all()

            result = []
            for option in favorite_options:
                result.append({
                    'optionCode': option.option_code,
                    'optionName': option.option_name,
                    'like': True
                })
        elif keyword != "":
            options = session.query(Option).filter(
                or_(Option.option_name.like(f'%{keyword}%'), Option.option_code.like(f'%{keyword}%'))
            ).all()

            for option in options:
                liked = session.query(exists().where(
                    and_(OptionLike.member_id == member_id, OptionLike.option_code == option.option_code))).scalar()

                result.append({
                    'optionCode': option.option_code,
                    'optionName': option.option_name,
                    'like': liked
                })
    finally:
        session.close()
    return result


def like_option(member_id: int, option_like_request: OptionLikeRequest):
    db_option_like = OptionLike(member_id=member_id, option_code=option_like_request.optionCode)
    session = engine.sessionmaker()

    try:
        session.add(db_option_like)
        session.commit()
    finally:
        session.close()


def unlike_option(member_id: int, option_code: str):
    session = engine.sessionmaker()
    try:
        db_option_like = session.query(OptionLike).filter(OptionLike.member_id == member_id,
                                                          OptionLike.option_code == option_code).first()

        if db_option_like:
            session.delete(db_option_like)
            session.commit()
    finally:
        session.close()


def get_option_name(option_code: str):
    session = engine.sessionmaker()

    try:
        option_name = session.query(Option.option_name).filter(Option.option_code == option_code).first()[0]

        if option_name is None:
            option_name = "종목이름 없음"
    finally:
        session.close()
    return option_name
