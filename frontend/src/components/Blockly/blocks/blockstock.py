# import numpy as np
# import pandas as pd

# name = "wonyoung"
# trade_signal = "NULL"

# # 예제 데이터 (10개의 시가, 종가, 고가, 저가, 거래량)
# data = [
#     [100, 101, 105, 98, 10000],
#     [102, 103, 107, 100, 12000],
#     [105, 104, 110, 103, 15000],
#     [103, 106, 108, 101, 11000],
#     [110, 108, 112, 105, 13000],
#     [112, 110, 115, 108, 14000],
#     [108, 109, 112, 105, 12000],
#     [109, 112, 115, 108, 11000],
#     [111, 114, 117, 110, 10000],
#     [115, 116, 120, 112, 9000],
#     [103, 106, 108, 101, 11000],
#     [110, 108, 112, 105, 13000],
#     [112, 110, 115, 108, 14000],
#     [108, 109, 112, 105, 12000],
# ]

# # 새로운 시세 데이터
# new_data = [117, 118, 120, 115, 8000]

# # RSI 계산 함수
# def calculate_rsi(data, period=14):
#     delta = data.diff(1)
#     gain = delta.where(delta > 0, 0)
#     loss = -delta.where(delta < 0, 0)

#     avg_gain = gain.rolling(window=period).mean()
#     avg_loss = loss.rolling(window=period).mean()

#     rs = avg_gain / avg_loss
#     rsi = 100 - (100 / (1 + rs))
#     return rsi

# def generate_trade_signal(data):
#     global trade_signal

#     # 입력 데이터를 DataFrame으로 변환
#     df = pd.DataFrame(data, columns=["Open", "Close", "High", "Low", "Volume"])

#     # 종가(Close)를 기반으로 RSI 계산
#     rsi = calculate_rsi(df["Close"])

#     # 새로운 데이터의 RSI 값
#     last_rsi = rsi.iloc[-1]

#     # RSI 기준에 따라 매매 신호 생성
#     if last_rsi >= 70:
#         return "SELL"
#     elif last_rsi <= 30:
#         return "BUY"
#     else:
#         return "STAY"

# def plus(a, b) :
#     return a + b


# # trade_signal = generate_trade_signal(data + [new_data])