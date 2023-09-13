import pandas as pd
import os
import requests
import json

def get_options():

    # 한국 종목 가져오기
    stocks = pd.read_html('http://kind.krx.co.kr/corpgeneral/corpList.do?method=download',header=0)[0]

    # 랜덤 8개 추출하고, json으로 저장
    stocks = stocks[['종목코드', '회사명']].sample(8)
    stocks['종목코드'] = stocks['종목코드'].astype(str).str.zfill(6)

    # print(stocks)

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