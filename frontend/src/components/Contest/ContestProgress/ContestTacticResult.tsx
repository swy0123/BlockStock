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
import ContestRankBox from "./ContestRankBox";
import Spinner from "../../Util/Spinner";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { contesttype } from "../../../recoil/Contest/ContestList";
import CompletedContestModal from "../ContestStore/CompletedContest/CompletedContestModal";
import { contestResult } from "../../../api/Contest/ContestStore";

const TacticResult = (props: { contestId: number }) => {
  const [componentRef, size] = useComponentSize();
  const [optionHistory, setOptionHistory] = useState<any>([]);
  const [chartInfos, setChartInfos] = useState<any[]>([]);
  const [rankInfos, setRanktInfos] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [startAsset, setStartAsset] = useState(0);
  const [endAsset, setEndAssets] = useState(0);
  const [returns, setReturns] = useState(0);
  const [returnPercent, setReturnPercent] = useState(0);
  const [optionName, setOptionName] = useState("");
  const [optionCode, setOptionCode] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [updateTime, setUpdateTime] = useState(dayjs().format("YYYY.MM.DD HH:mm:ss"));
  const [count, setCount] = useState(2); // 남은 시간 (단위: 초)

  const [isPlayer, setIsPlayer] = useState(false);
  const [isRunning, setIsRunning] = useState(true);

  //modal
  const [ userRank, setUserRank] = useState([])

  const pricesDisplayFormat = format(",.0f");
  const floatDisplayFormat = format(",.3f");

  const navigate = useNavigate();
  const [type, setType] = useRecoilState(contesttype);
  const handleNav = () => {
    setType("finish");
    navigate("/contestlist");
  };
  useEffect(() => {
    console.log(isRunning)
    if (isRunning) {
      const cnt = setInterval(() => {
        // 타이머 숫자가 하나씩 줄어들도록
        setCount((count) => count - 1);
      }, 1000);

      if (count <= 1) {
        setCount(15);
        axiosGetData();
        setUpdateTime(dayjs().format("YYYY.MM.DD HH:mm:ss"));
      }
      return () => clearInterval(cnt);
    }
  }, [count, isRunning]);

  const axiosGetData = async () => {
    //테스트 데이터 id는 7
    const contestId = props.contestId;
    // const propsTmp = 66;

    const chartres = await contestChart(contestId);
    const traderes = await contestTrade(contestId);

    console.log("결과~~~~~~~~~~~~~");
    console.log(chartres);
    setChartInfos(chartres);
    console.log(traderes);
    const curTime = dayjs().format("YYYYMMDDHHmm")
    console.log(curTime)
    if (curTime > traderes.endDate + traderes.endTime) {
      //15초 반복 방지
      setIsRunning(false);
      Swal.fire({
        title: "종료된 대회입니다",
        // text: "수고하셨습니다.",
        // icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "확인",
        cancelButtonColor: "#d33",
        cancelButtonText: "나가기",
      }).then((result) => {
        if (result.isConfirmed) {
          // 결과 모달
          OpenModal(contestId);
        } else {
          handleNav();
        }
      });
    } else if (curTime === traderes.endDate + traderes.endTime) {
      //15초 반복 방지
      setIsRunning(false);
      Swal.fire({
        title: "대회 종료",
        text: "수고하셨습니다.",
        // icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "확인",
        cancelButtonColor: "#d33",
        cancelButtonText: "나가기",
      }).then((result) => {
        if (result.isConfirmed) {
          // 결과 모달
          OpenModal(contestId);
        } else {
          handleNav();
        }
      });
    } else if (traderes.isPlayer) {
      setIsPlayer(traderes.isPlayer);
      setOptionHistory(traderes.contestTradeHistory);
      setTitle(traderes.title);
      setStartAsset(traderes.startAsset);
      setEndAssets(traderes.endAsset);
      setReturnPercent(traderes.returnPercent);
      setReturns(traderes.returns);
      setOptionName(traderes.optionName);
      setOptionCode(traderes.optionCode);
      setStartDate(traderes.startDate);
      setStartTime(traderes.startTime);
    } else {
      setIsPlayer(traderes.isPlayer);
    }
  };

  useEffect(() => {
    axiosGetData();
    console.log("res useEffect");
    console.log(chartInfos);
    console.log("!!!!!!");
    // console.log(typeof props.tacticImg);
  }, []);



  // 선택한 대회 상세보기(모달) ======================================================
  const [selectedContest, setSelectedContest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const OpenModal = (id) => {
    console.log(id)
    setIsModalOpen(!isModalOpen);
    resultApi(id)
  };

  const CloseModal = () => {
    setIsModalOpen(false);
  };
  // 선택한 대회 상세보기(모달) ======================================================

  // 상세 조회api ================================================================
  const resultApi = async (id)=>{
    const res =  await contestResult(id)
    console.log(res, 'res')
    if (res === undefined){
      setUserRank([])
    }else{
      setUserRank(res)
    }
  }
  // api ================================================================
  


  return (
    <TradingHistoryContainer>
      {/* 전략 이름 */}
      <TradingHistoryTitle style={{ fontSize: "22px" }}>
        "{title}" 대회 진행 현황
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
              {isPlayer ? (
                <ItemList>
                  {optionHistory.map((item, index) => (
                    <OptionHistoryItem item={item} key={index}></OptionHistoryItem>
                  ))}
                </ItemList>
              ) : (
                <>참가자가 아닙니다</>
              )}
            </OptionHistoryItemList>
          </TradingHistoryDiv>
        </LeftDiv>
        <CenterDiv>
          <HistoryChartDiv ref={componentRef}>
            <TradingHistoryTitle>
              {/* {optionName}<span style={{ fontSize: "10px" }}> ({optionCode})</span> */}
              매매내역 상세
              <div style={{ fontSize: "10px", position: "absolute", right: "5%" }}>
                {" "}
                마지막 업데이트 시간 : {updateTime}
              </div>
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
              <Spinner></Spinner>
            )}
          </HistoryChartDiv>
        </CenterDiv>
        <RightDiv>
          <HistorySummary>
            <HistorySummaryContents>
              <TradingHistoryTitle>요약</TradingHistoryTitle>
              <HistorySummaryContentsResult>
                {isPlayer ? (
                  <>
                    <div style={{ fontSize: "14px" }}>초기자산</div>
                    <div style={{ fontSize: "13px" }}>{pricesDisplayFormat(startAsset)}원</div>
                    <div>↓</div>
                    <div style={{ fontSize: "14px" }}>최종자산</div>
                    <div style={{ fontSize: "16px", color: "#F24822" }}>
                      {pricesDisplayFormat(endAsset)}원
                    </div>
                  </>
                ) : (
                  <>참가자가 아닙니다</>
                )}
              </HistorySummaryContentsResult>
              <HistorySummaryContentsItemList>
                {isPlayer ? (
                  <>
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
                        {floatDisplayFormat(returnPercent)}%
                      </HistorySummaryContentsItemRight>
                    </HistorySummaryContentsItem>
                    <HistorySummaryContentsItem>
                      <HistorySummaryContentsItemLeft>수익금</HistorySummaryContentsItemLeft>
                      <HistorySummaryContentsItemRight>
                        {pricesDisplayFormat(returns)}
                      </HistorySummaryContentsItemRight>
                    </HistorySummaryContentsItem>
                    <HistorySummaryContentsItem>
                      <HistorySummaryContentsItemLeft>수수료</HistorySummaryContentsItemLeft>
                      <HistorySummaryContentsItemRight>0</HistorySummaryContentsItemRight>
                    </HistorySummaryContentsItem>
                    <HistorySummaryContentsItem>
                      <HistorySummaryContentsItemLeft>총 거래 횟수</HistorySummaryContentsItemLeft>
                      <HistorySummaryContentsItemRight>
                        {pricesDisplayFormat(optionHistory.length)}
                      </HistorySummaryContentsItemRight>
                    </HistorySummaryContentsItem>
                  </>
                ) : (
                  <></>
                )}
              </HistorySummaryContentsItemList>
              <span style={{ fontSize: "10px" }}>마지막 업데이트 시간 : {updateTime}</span>
            </HistorySummaryContents>
          </HistorySummary>
          <ContestRankinig>
            <ContestRankinigItem>
              {/* 
              랭킹창
              */}
              <ContestRankBox contestId={props.contestId} isRunning={isRunning}></ContestRankBox>
            </ContestRankinigItem>
          </ContestRankinig>
        </RightDiv>
      </TradingHistoryContents>
      {isModalOpen ? <CompletedContestModal selectedContest={selectedContest} onClose={CloseModal} rank={userRank}/> : null}
    </TradingHistoryContainer>
  );
};

export default TacticResult;
