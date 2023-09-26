import pandas as pd
import os
import requests
import json

import win32com.client
from fastapi import HTTPException
from sqlalchemy import or_, exists, and_

from domain.option.error.option_exception import StatusCode, Message
from domain.option.model.option import Option, OptionLike
from domain.option.schemas.option_like_request import OptionLikeRequest
from domain.option.schemas.search_option_response import SearchOptionResponse
from common.conn import engineconn

engine = engineconn()
session = engine.sessionmaker()

# 연결 여부 체크
objCpCybos = win32com.client.Dispatch("CpUtil.CpCybos")
bConnect = objCpCybos.IsConnect
if bConnect == 0:
    print("PLUS가 정상적으로 연결되지 않음. ")
    exit()


def get_options():
    stocks = pd.read_html('http://kind.krx.co.kr/corpgeneral/corpList.do?method=download', header=0)[0]

    # 랜덤 8개 추출하고, json으로 저장
    stocks = stocks[['종목코드', '회사명']].sample(8)
    stocks['종목코드'] = stocks['종목코드'].astype(str).str.zfill(6)

    token = get_token()

    URL = f'{os.environ["HT_BASE_URL"]}/{os.environ["HT_STOCK_PATH"]}'
    print(URL)

    for idx, row in stocks.iterrows():
        print(get_stock(row, token, URL))

    return ""


def get_stock(row, token, URL):
    headers = {"Content-Type": "application/json",
               "authorization": f"Bearer {token}",
               "appKey": os.environ["HT_APP_KEY"],
               "appSecret": os.environ["HT_APP_SECRET"],
               "tr_id": "FHKST01010100"}

    params = {
        "fid_cond_mrkt_div_code": "J",
        "fid_input_iscd": [row["종목코드"]]
    }

    res = requests.get(URL, headers=headers, params=params)
    print(res.json())
    return ""


def get_token():
    URL = f'{os.environ["HT_BASE_URL"]}/{os.environ["HT_TOKEN_PATH"]}'
    headers = {"content-type": "application/json"}
    body = {"grant_type": "client_credentials",
            "appkey": os.environ["HT_APP_KEY"],
            "appsecret": os.environ["HT_APP_SECRET"]}

    res = requests.post(URL, headers=headers, data=json.dumps(body))
    res.text

    return res.json()["access_token"]


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

    if like:
        favorite_options = session.query(Option).join(OptionLike, OptionLike.option_code == Option.option_code).filter(
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

    return result


def like_option(member_id: int, option_like_request: OptionLikeRequest):
    db_option_like = OptionLike(member_id=member_id, option_code=option_like_request.optionCode)
    session.add(db_option_like)
    session.commit()
