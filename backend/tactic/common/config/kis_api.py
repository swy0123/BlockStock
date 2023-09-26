import copy
import os

import requests
import json

from collections import namedtuple
from datetime import datetime


_TRENV = tuple()
_last_auth_time = datetime.now()
_autoReAuth = False
_DEBUG = True
_isPaper = True

_base_headers = {
    "Content-Type": "application/json",
    "Accept": "text/plain",
    "charset": "UTF-8",
    'User-Agent': os.environ['HT_ACCT_STOCK']
}


def _getBaseHeader():
    if _autoReAuth: reAuth()
    return copy.deepcopy(_base_headers)


def _setTRENV(cfg):
    nt1 = namedtuple('KISEnv', ['my_app', 'my_sec', 'my_acct', 'my_prod', 'my_token', 'my_url'])
    d = {
        'my_app': cfg['my_app'],
        'my_sec': cfg['my_sec'],
        'my_acct': cfg['my_acct'],
        'my_prod': cfg['my_prod'],
        'my_token': cfg['my_token'],
        'my_url': cfg['my_url']
    }

    global _TRENV
    _TRENV = nt1(**d)


def isPaperTrading():
    return _isPaper


def changeTREnv(token_key, svr='prod', product='01'):
    cfg = dict()

    ak1 = 'HT_APP_KEY'
    ak2 = 'HT_APP_SECRET'

    cfg['my_app'] = os.environ[ak1]
    cfg['my_sec'] = os.environ[ak2]

    cfg['my_acct'] = os.environ['HT_ACCT_STOCK']
    cfg['my_prod'] = product
    cfg['my_token'] = token_key
    cfg['my_url'] = os.environ['HT_PROD']

    _setTRENV(cfg)


def _getResultObject(json_data):
    _tc_ = namedtuple('res', json_data.keys())

    return _tc_(**json_data)


def auth(svr='prod', product='01'):
    p = {
        "grant_type": "client_credentials",
    }

    ak1 = 'HT_APP_KEY'
    ak2 = 'HT_APP_SECRET'

    p["appkey"] = os.environ[ak1]
    p["appsecret"] = os.environ[ak2]

    url = f'{os.environ["HT_PROD"]}/oauth2/tokenP'

    res = requests.post(url, data=json.dumps(p), headers=_getBaseHeader())
    rescode = res.status_code
    if rescode == 200:
        my_token = _getResultObject(res.json()).access_token
    else:
        print('Get Authentification token fail!\nYou have to restart your app!!!')
        return

    changeTREnv(f"Bearer {my_token}", svr, product)

    _base_headers["authorization"] = _TRENV.my_token
    _base_headers["appkey"] = _TRENV.my_app
    _base_headers["appsecret"] = _TRENV.my_sec

    global _last_auth_time
    _last_auth_time = datetime.now()


def reAuth(svr='prod', product='01'):
    n2 = datetime.now()
    if (n2 - _last_auth_time).seconds >= 86400:
        auth(svr, product)


def getTREnv():
    return _TRENV


def set_order_hash_key(h, p):
    url = f"{getTREnv().my_url}/uapi/hashkey"

    res = requests.post(url, data=json.dumps(p), headers=h)
    rescode = res.status_code
    if rescode == 200:
        h['hashkey'] = _getResultObject(res.json()).HASH
    else:
        print("Error:", rescode)


class APIResp:
    def __init__(self, resp):
        self._rescode = resp.status_code
        self._resp = resp
        self._header = self._setHeader()
        self._body = self._setBody()
        self._err_code = self._body.rt_cd
        self._err_message = self._body.msg1

    def getResCode(self):
        return self._rescode

    def _setHeader(self):
        fld = dict()
        for x in self._resp.headers.keys():
            if x.islower():
                fld[x] = self._resp.headers.get(x)
        _th_ = namedtuple('header', fld.keys())

        return _th_(**fld)

    def _setBody(self):
        _tb_ = namedtuple('body', self._resp.json().keys())

        return _tb_(**self._resp.json())

    def getHeader(self):
        return self._header

    def getBody(self):
        return self._body

    def getResponse(self):
        return self._resp

    def isOK(self):
        try:
            if (self.getBody().rt_cd == '0'):
                return True
            else:
                return False
        except:
            return False

    def getErrorCode(self):
        return self._err_code

    def getErrorMessage(self):
        return self._err_message

    def printAll(self):
        print("<Header>")
        for x in self.getHeader()._fields:
            print(f'\t-{x}: {getattr(self.getHeader(), x)}')
        print("<Body>")
        for x in self.getBody()._fields:
            print(f'\t-{x}: {getattr(self.getBody(), x)}')

    def printError(self):
        print('-------------------------------\nError in response: ', self.getResCode())
        print(self.getBody().rt_cd, self.getErrorCode(), self.getErrorMessage())
        print('-------------------------------')


def _url_fetch(api_url, ptr_id, params, appendHeaders=None, postFlag=False, hashFlag=True):
    url = f"{getTREnv().my_url}{api_url}"

    headers = _getBaseHeader()

    # 추가 Header 설정
    tr_id = ptr_id
    if ptr_id[0] in ('T', 'J', 'C'):
        if isPaperTrading():
            tr_id = 'V' + ptr_id[1:]

    headers["tr_id"] = tr_id
    headers["custtype"] = "P"

    if appendHeaders is not None:
        if len(appendHeaders) > 0:
            for x in appendHeaders.keys():
                headers[x] = appendHeaders.get(x)

    if (postFlag):
        if (hashFlag): set_order_hash_key(headers, params)
        res = requests.post(url, headers=headers, data=json.dumps(params))
    else:
        res = requests.get(url, headers=headers, params=params)

    if res.status_code == 200:
        ar = APIResp(res)
        return ar
    else:
        print("Error Code : " + str(res.status_code) + " | " + res.text)
        return None


def get_current_price(stock_no):
    url = "/uapi/domestic-stock/v1/quotations/inquire-price"
    tr_id = "FHKST01010100"

    params = {
        'FID_COND_MRKT_DIV_CODE': 'J',
        'FID_INPUT_ISCD': stock_no
    }

    t1 = _url_fetch(url, tr_id, params)

    if t1.isOK():
        return t1.getBody().output
    else:
        t1.printError()
        return dict()
