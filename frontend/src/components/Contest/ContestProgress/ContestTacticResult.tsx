import { useEffect, useState } from "react";
import CandleChart from "./CandleChart";
import useComponentSize from "../../Util/ComponentSize";
import {
  CenterDiv,
  ContestRankinig,
  ContestRankinigItem,
  HistoryChartDiv,
  HistorySummary,
  HistorySummaryContents,
  HistorySummaryContentsItem,
  HistorySummaryContentsItemLeft,
  HistorySummaryContentsItemList,
  HistorySummaryContentsItemRight,
  HistorySummaryContentsResult,
  ItemList,
  LeftDiv,
  OptionHistoryItemList,
  OptionHistoryItemPosCenter,
  OptionHistoryItemPosDown,
  OptionHistoryItemPosLeft,
  OptionHistoryItemPosRight,
  OptionHistoryItemPosUp,
  OptionHistoryItemTitle,
  RightDiv,
  TradingHistoryContainer,
  TradingHistoryContents,
  TradingHistoryDiv,
  TradingHistoryTitle,
} from "./ContestTacticResult.style";
import OptionHistoryItem from "./OptionHistoryItem";
import { format } from "d3-format";
import { contestChart, contestRanking, contestTrade } from "../../../api/Contest/ContestProgress";
import dayjs from "dayjs";

const TacticResult = (id:any) => {
  const [componentRef, size] = useComponentSize();
  const [optionHistory, setOptionHistory] = useState<any>([]);
  const [chartInfos, setChartInfos] = useState<any[]>([]);
  const [rankInfos, setRanktInfos] = useState<any[]>([]);
  const [startAsset, setStartAsset] = useState(0);
  const [endAsset, setEndAssets] = useState(0);
  const [returnPercent, setReturnPercent] = useState(0);
  const [optionName, setOptionName] = useState("");
  const [optionCode, setOptionCode] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [updateTime, setUpdateTime] = useState(dayjs().format("YYYY.MM.DD HH:mm:ss"));
  const [count, setCount] = useState(15); // 남은 시간 (단위: 초)

  const pricesDisplayFormat = format(",");


  useEffect(() => {
    const id = setInterval(() => {
      // 타이머 숫자가 하나씩 줄어들도록
      setCount((count) => count - 1);
    }, 1000);

    if (count === 1) {
      setCount(15);
      axiosGetData();
      setUpdateTime(dayjs().format("YYYY.MM.DD HH:mm:ss"));
    }
    return () => clearInterval(id);
  }, [count]);

  const axiosGetData = async () => {

    //테스트 데이터 id는 7
    // const propsTmp: string = id;
    const propsTmp = 7;

    const chartres = await contestChart(propsTmp);
    const traderes = await contestTrade(propsTmp);
    const rankingres = await contestRanking(propsTmp);
    console.log("결과~~~~~~~~~~~~~");
    console.log(chartres);
    console.log(traderes);
    setOptionHistory(traderes.optionHistory);
    setChartInfos(chartres);
    setRanktInfos(rankingres);
    setStartAsset(traderes.startAsset);
    setEndAssets(traderes.endAsset);
    setReturnPercent(traderes.returnPercent);
    setOptionName(traderes.optionName);
    setOptionCode(traderes.optionCode);
    setStartDate(traderes.startDate);
    setStartTime(traderes.startTime);
  };

  useEffect(() => {
    axiosGetData();
    console.log("res useEffect");
    console.log(chartInfos);
    console.log("!!!!!!");
    // console.log(typeof props.tacticImg);
  }, []);

  return (
    <TradingHistoryContainer>
      {/* 전략 이름 */}
      <TradingHistoryTitle style={{ fontSize: "22px" }}>
        대회 진행 현황 <span style={{ fontSize: "10px" }}>{updateTime}</span>
      </TradingHistoryTitle>
      {/* {props.tacticImg ? <img src={props.tacticImg}/>:<></>} */}

      <TradingHistoryContents>
        {/* 매매내역 */}
        <LeftDiv>
          <TradingHistoryDiv>
            <TradingHistoryTitle>매매내역</TradingHistoryTitle>
            <OptionHistoryItemList>
              <OptionHistoryItemTitle>
                <OptionHistoryItemPosLeft>유형</OptionHistoryItemPosLeft>
                <OptionHistoryItemPosCenter>
                  <OptionHistoryItemPosUp>가격(수량)</OptionHistoryItemPosUp>
                  <OptionHistoryItemPosDown>수수료</OptionHistoryItemPosDown>
                </OptionHistoryItemPosCenter>
                <OptionHistoryItemPosRight>
                  <OptionHistoryItemPosUp>체결금액</OptionHistoryItemPosUp>
                  <OptionHistoryItemPosDown>실현손익</OptionHistoryItemPosDown>
                </OptionHistoryItemPosRight>
              </OptionHistoryItemTitle>
              <ItemList>
                {optionHistory.map((item, index) => (
                  <OptionHistoryItem item={item} key={index}></OptionHistoryItem>
                ))}
              </ItemList>
            </OptionHistoryItemList>
          </TradingHistoryDiv>
        </LeftDiv>
        <CenterDiv>
          <HistoryChartDiv ref={componentRef}>
            <TradingHistoryTitle>
              {optionName} 매매내역 상세
              <span style={{ fontSize: "10px" }}>종목번호 {optionCode}</span>
            </TradingHistoryTitle>
            {/* <div >
                        <p>가로너비: {size.width}px</p>
                        <p>세로너비: {size.height}px</p>
                    </div> */}
            {/* 차트 */}
            {size.width > 0 &&
            size.height > 0 &&
            chartInfos !== undefined &&
            chartInfos.length > 0 ? (
              <CandleChart
                curwidth={size.width - 10}
                curheight={size.height - 10}
                optionHistory={optionHistory}
                chartInfos={chartInfos}
              ></CandleChart>
            ) : (
              <></>
            )}
          </HistoryChartDiv>
        </CenterDiv>
        <RightDiv>
          <HistorySummary>
            <HistorySummaryContents>
              <TradingHistoryTitle>요약</TradingHistoryTitle>
              <HistorySummaryContentsResult>
                <div style={{ fontSize: "14px" }}>초기자산</div>
                <div style={{ fontSize: "13px" }}>{pricesDisplayFormat(startAsset)}원</div>
                <div>↓</div>
                <div style={{ fontSize: "14px" }}>최종자산</div>
                <div style={{ fontSize: "16px", color: "#F24822" }}>
                  {pricesDisplayFormat(startAsset * returnPercent)}원
                </div>
              </HistorySummaryContentsResult>
              <HistorySummaryContentsItemList>
                <HistorySummaryContentsItem>
                  <HistorySummaryContentsItemLeft>종목:</HistorySummaryContentsItemLeft>
                  <HistorySummaryContentsItemRight>
                    {optionName}({optionCode})
                  </HistorySummaryContentsItemRight>
                </HistorySummaryContentsItem>
                <HistorySummaryContentsItem>
                  <HistorySummaryContentsItemLeft>시작 일자</HistorySummaryContentsItemLeft>
                  <HistorySummaryContentsItemRight>{startDate}</HistorySummaryContentsItemRight>
                </HistorySummaryContentsItem>
                <HistorySummaryContentsItem>
                  <HistorySummaryContentsItemLeft>시작 시간</HistorySummaryContentsItemLeft>
                  <HistorySummaryContentsItemRight>{startTime}</HistorySummaryContentsItemRight>
                </HistorySummaryContentsItem>
                <HistorySummaryContentsItem>
                  <HistorySummaryContentsItemLeft>수익률</HistorySummaryContentsItemLeft>
                  <HistorySummaryContentsItemRight style={{ color: "#F24822" }}>
                    {pricesDisplayFormat(returnPercent)}%
                  </HistorySummaryContentsItemRight>
                </HistorySummaryContentsItem>
                <HistorySummaryContentsItem>
                  <HistorySummaryContentsItemLeft>수익금</HistorySummaryContentsItemLeft>
                  <HistorySummaryContentsItemRight>
                    {pricesDisplayFormat(startAsset * returnPercent - startAsset)}
                  </HistorySummaryContentsItemRight>
                </HistorySummaryContentsItem>
                <HistorySummaryContentsItem>
                  <HistorySummaryContentsItemLeft>수수료</HistorySummaryContentsItemLeft>
                  <HistorySummaryContentsItemRight>???</HistorySummaryContentsItemRight>
                </HistorySummaryContentsItem>
                <HistorySummaryContentsItem>
                  <HistorySummaryContentsItemLeft>총 거래 횟수</HistorySummaryContentsItemLeft>
                  <HistorySummaryContentsItemRight>
                    {optionHistory.length}
                  </HistorySummaryContentsItemRight>
                </HistorySummaryContentsItem>
              </HistorySummaryContentsItemList>
            </HistorySummaryContents>
          </HistorySummary>
          <ContestRankinig>
            <ContestRankinigItem>
              {/* 
              랭킹창
              */}
            </ContestRankinigItem>
          </ContestRankinig>
        </RightDiv>
      </TradingHistoryContents>
    </TradingHistoryContainer>
  );
};

export default TacticResult;
