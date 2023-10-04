import styled from "styled-components";
import { colors } from '@mui/material';

export const TacticTitle = styled.div`
  /* background-color: rgba(0, 150, 0, 0.08); */
  display: flex;
  width: 100%;
  padding: 10px 0 0 10px;
  font-weight: bolder;
`;
export const TradingHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const TradingHistoryContents = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 95%;
  overflow: hidden;
  padding-bottom: 40px;
`;

export const LeftDiv = styled.div`
  /* background-color: rgba(0, 0, 150, 0.08); */
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px;
  width: 23%;
  height: 100%;
`;

export const CenterDiv = styled.div`
  /* background-color: rgba(0, 0, 150, 0.08); */
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px;
  width: 50%;
  height: 100%;
`;

export const RightDiv = styled.div`
  /* background-color: rgba(0, 0, 150, 0.08); */
  display: flex;
  flex-direction: column;
  position: relative;
  width: 23%;
  padding: 10px;
  height: 100%;
`;

export const TradingHistoryDiv = styled.div`
  background-color: white;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const TradingHistoryTitle = styled.div`
  width: 100%;
  margin-left: 30px;
  /* height: 7%; */
  padding: 10px;
  display: flex;
  font-size: 18px;
  font-weight: bold;
`;

export const OptionHistoryItemList = styled.div`
  width: 90%;
  height: 88%;
  margin-top: 2%;
  display: flex;
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemList = styled.div`
  width: 100%;
  height: 90%;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

export const OptionHistoryItemTitle = styled.div`
  width: 100%;
  height: 7%;
  font-size: 10px;
  margin-bottom: 1%;
  position: relative;
  display: flex;
  text-align: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const OptionHistoryItemPosLeft = styled.div`
  position: absolute;
  left: 3%;
  font-size: 15px;
  text-align: start;
`;
export const OptionHistoryItemPosCenter = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 50%;
  font-size: 15px;
  transform: translate(-50%, 0%);
`;
export const OptionHistoryItemPosRight = styled.div`
  position: absolute;
  font-size: 15px;
  right: 5%;
`;
export const OptionHistoryItemPosUp = styled.div`
  font-size: 15px;
  right: 10%;
`;
export const OptionHistoryItemPosDown = styled.div`
  display: flex;
  font-size: 13px;
  right: 10%;
  justify-content: end;
  color:#525252;
`;

export const HistoryChartDiv = styled.div`
  background-color: white;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HistorySummary = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HistorySummaryContents = styled.div`
  background-color: white;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  width: 100%;
  height: 100%;

  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HistorySummaryContentsResult = styled.div`
  display: flex;
  
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f7f3ff;
  border-radius: 6px;
  width: 75%;
  height: 26%;
  margin-left: 12.5%;
  margin-right: 12.5%;
`;

// export const HistorySummaryContentsTitle = styled.div`
//   display: flex;
//   font-weight: bolder;
//   font-size: 20px;
//   width: 100%;
//   height: 10%;
//   text-align: center;
//   align-items: center;
// `;
export const HistorySummaryContentsItem = styled.div`
  position: relative;
  margin-top: 20px;
  width: 100%;
  height: 5%;
`;
export const HistorySummaryContentsItemLeft = styled.span`
  position: absolute;
  left: 12.5%;
  color: #929292;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const HistorySummaryContentsItemRight = styled.span`
  position: absolute;
  right: 12.5%;
  color: #000;
  text-align: right;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const HistorySaveButton = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
  height: 10%;
  background: #9155fd;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #ffffff;
  &:hover {
    background-color: #b992fc;
    color: black;
  }
  /* padding: 8px 13px; */
  /* margin: 10px 0px 0px 10px; */
`;
