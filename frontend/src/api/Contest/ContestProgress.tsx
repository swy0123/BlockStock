import { privateApi } from "..";

// 대회 차트 불러오기
export const contestChart = async (params: string) => {
  console.log(params);
  //   const res = await privateApi.get(`/contest/chart`, {params});
  //   console.log(res.data);
  //   return res.data;

  const chartInfos = [
    {
      date: "20211108",
      time: "0000",
      open: 20150,
      high: 20400,
      low: 19850,
      close: 20400,
      volume: 89000,
    },
    {
      date: "20211109",
      time: "0000",
      open: 20400,
      high: 20500,
      low: 20100,
      close: 20200,
      volume: 33863,
    },
    {
      date: "20211110",
      time: "0000",
      open: 20200,
      high: 20200,
      low: 19850,
      close: 20000,
      volume: 91991,
    },
    {
      date: "20211111",
      time: "0000",
      open: 19900,
      high: 20050,
      low: 19700,
      close: 19950,
      volume: 46618,
    },
    {
      date: "20211112",
      time: "0000",
      open: 19950,
      high: 20250,
      low: 19950,
      close: 20200,
      volume: 45109,
    },
    {
      date: "20211115",
      time: "0000",
      open: 20350,
      high: 20500,
      low: 20250,
      close: 20400,
      volume: 85702,
    },
    {
      date: "20211116",
      time: "0000",
      open: 20400,
      high: 20400,
      low: 20000,
      close: 20150,
      volume: 84727,
    },
    {
      date: "20211117",
      time: "0000",
      open: 20200,
      high: 20350,
      low: 19800,
      close: 20050,
      volume: 150937,
    },
    {
      date: "20211118",
      time: "0000",
      open: 20050,
      high: 20150,
      low: 19850,
      close: 20150,
      volume: 48410,
    },
    {
      date: "20211119",
      time: "0000",
      open: 20150,
      high: 20150,
      low: 19900,
      close: 19900,
      volume: 69761,
    },
    {
      date: "20211122",
      time: "0000",
      open: 19900,
      high: 20000,
      low: 19800,
      close: 19900,
      volume: 84539,
    },
    {
      date: "20211123",
      time: "0000",
      open: 19900,
      high: 20000,
      low: 19800,
      close: 19950,
      volume: 46659,
    },
    {
      date: "20211124",
      time: "0000",
      open: 19950,
      high: 20100,
      low: 19800,
      close: 20100,
      volume: 101233,
    },
    {
      date: "20211125",
      time: "0000",
      open: 19950,
      high: 20050,
      low: 19800,
      close: 19900,
      volume: 44065,
    },
  ];

  return chartInfos;
};

// 대회 내역 불러오기
export const contestTrade = async (params: string) => {
  console.log(params);
  //   const res = await privateApi.get(`/contest/trade`, {params});
  //   console.log(res.data);
  //   return res.data;

  const tmp = {
    optionHistory: [
      {
        type: "buy",
        date: "20211108",
        time: "0000",
        cost: 8000, // 주식 가격
        tradeCnt: 350, // 거래 수 ( 몇개 샀는지 )
        profitAndLoss: 0, // 실현손익
      },
      {
        type: "sell",
        date: "20211108",
        time: "0001",
        cost: 6000,
        tradeCnt: 100,
        profitAndLoss: 0, // 실현 손익 : (매도 평균 - 매수 평균) * 매도 수량
      },
      {
        type: "sell",
        date: "20211108",
        time: "0002",
        cost: 5500,
        tradeCnt: 300,
        profitAndLoss: 0, // 실현 손익 : (매도 평균 - 매수 평균) * 매도 수량
      },
      {
        type: "sell",
        date: "20211108",
        time: "0003",
        cost: 6000,
        tradeCnt: 300,
        profitAndLoss: 0, // 실현 손익 : (매도 평균 - 매수 평균) * 매도 수량
      },
      {
        type: "buy",
        date: "20211108",
        time: "0004",
        cost: 6300,
        tradeCnt: 200,
        profitAndLoss: 0, // 실현 손익 : (매도 평균 - 매수 평균) * 매도 수량
      },
    ],
    optionName: "카카오",
    optionCode: "586854",
    startDate: "2020-08-07",
    startTime: "19:20",
    startAsset: 10000000, // 초기 자산
    endAsset: 143001230, // 최종 자산
    returnPercent: 1.4, // 수익률
    returns: 100, // 수익금
  };
  return tmp;
};
