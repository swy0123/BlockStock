import win32com.client

# 연결 여부 체크
objCpCybos = win32com.client.Dispatch("CpUtil.CpCybos")
bConnect = objCpCybos.IsConnect
if (bConnect == 0):
    print("PLUS가 정상적으로 연결되지 않음. ")
    exit()



# # 종목코드 리스트 구하기
# objCpCodeMgr = win32com.client.Dispatch("CpUtil.CpCodeMgr")
# codeList = objCpCodeMgr.GetStockListByMarket(1)  # 거래소
# codeList2 = objCpCodeMgr.GetStockListByMarket(2)  # 코스닥
#
# print("거래소 종목코드", len(codeList))
# for i, code in enumerate(codeList):
#     secondCode = objCpCodeMgr.GetStockSectionKind(code)
#     name = objCpCodeMgr.CodeToName(code)
#     stdPrice = objCpCodeMgr.GetStockStdPrice(code)
#     print(i, code, secondCode, stdPrice, name)
#
# print("코스닥 종목코드", len(codeList2))
# for i, code in enumerate(codeList2):
#     secondCode = objCpCodeMgr.GetStockSectionKind(code)
#     name = objCpCodeMgr.CodeToName(code)
#     stdPrice = objCpCodeMgr.GetStockStdPrice(code)
#     print(i, code, secondCode, stdPrice, name)
#
# print("거래소 + 코스닥 종목코드 ", len(codeList) + len(codeList2))

# 이름 -> 코드
# 코드 -> 이름
# instCpStockCode = win32com.client.Dispatch("CpUtil.CpStockCode")
# print(instCpStockCode.CodeToFullCode("A035720"))
# print(instCpStockCode.CodeToName("A035720"))
# print(instCpStockCode.NameToCode("NAVER"))
# print(instCpStockCode.NameToCode("카카오"))



# 객체 생성
instStockChart = win32com.client.Dispatch("CpSysDib.StockChart")

# 요청값 설정
instStockChart.SetInputValue(0, "A003540")
instStockChart.SetInputValue(1, ord('1'))
instStockChart.SetInputValue(2, 20230912)
instStockChart.SetInputValue(3, 20220912)
instStockChart.SetInputValue(4, 10)
instStockChart.SetInputValue(5, (0, 1, 2, 3, 4, 5, 8))
instStockChart.SetInputValue(6, ord('m'))
instStockChart.SetInputValue(9, ord('1'))

# 요청
instStockChart.BlockRequest()

# 응답
numData = instStockChart.GetHeaderValue(3)
numField = instStockChart.GetHeaderValue(1)

# 응답값 확인
for i in range(numData):
    for j in range(numField):
        print(instStockChart.GetDataValue(j, i), end=" ")
    print("")
