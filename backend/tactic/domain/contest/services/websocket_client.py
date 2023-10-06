import json
import websocket
import requests
import os.path

# 웹소켓 접속키 발급
def get_approval(key, secret):
    url = 'https://openapivts.koreainvestment.com:29443' # 모의투자계좌
    # url = 'https://openapi.koreainvestment.com:9443'  # 실전투자계좌
    headers = {"content-type": "application/json"}
    body = {"grant_type": "client_credentials",
            "appkey": key,
            "secretkey": secret}
    PATH = "oauth2/Approval"
    URL = f"{url}/{PATH}"
    res = requests.post(URL, headers=headers, data=json.dumps(body))
    approval_key = res.json()["approval_key"]
    return approval_key

i_stock = "005930"
i_appkey = os.environ["ht_app_key"]
i_appsecret = os.environ["ht_app_secret"]

i_approval_key = get_approval(i_appkey, i_appsecret)
print("approval_key [%s]" % (i_approval_key))

b = {
    "header": {"approval_key": i_approval_key, "custtype": "P", "tr_type": "1", "content-type": "utf-8"},
    "body": {"input": {"tr_id": "H0STCNT0",  # API명
                       "tr_key": i_stock  # 종목번호
                       }
             }
}

# Pandas DataFrame 이용
def pdbind(result):
    print("종목코드1:", result[0], " 체결시간:", result[1], " 현재가:", result[2])


def on_message(ws, data):
    # print('type=', type(data), '\ndata=', data)

    if data[0] in ['0', '1']:  # 시세데이터가 아닌경우
        d1 = data.split("|")
        if len(d1) >= 4:
            isEncrypt = d1[0]
            tr_id = d1[1]
            tr_cnt = d1[2]
            recvData = d1[3]
            result = recvData.split("^")
            print("start time=", result[1])
            pdbind(result)  # pandas dataframe 이용 변경
        else:
            print('Data Size Error=', len(d1))
    else:
        recv_dic = json.loads(data)
        tr_id = recv_dic['header']['tr_id']

        if tr_id == 'PINGPONG':
            send_ping = recv_dic
            ws.send(data, websocket.ABNF.OPCODE_PING)
        else:  # parser data
            print('tr_id=', tr_id, '\nmsg=', data)

def on_error(ws, error):
    print('error=', error)

def on_close(ws, status_code, close_msg):
    print('on_close close_status_code=', status_code, " close_msg=", close_msg)

def on_open(ws):
    print('on_open send data=', json.dumps(b))
    ws.send(json.dumps(b), websocket.ABNF.OPCODE_TEXT)  # 종목코드 1
