import styled from "styled-components";

export const TacticTitle = styled.div`
  /* background-color: rgba(0, 150, 0, 0.08); */
  display: flex;
  width: 100%;
  height: 5%;
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
`;

export const LeftDiv = styled.div`
  /* background-color: rgba(0, 0, 150, 0.08); */
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px;
  width: 22%;
  height: 100%;
`;

export const CenterDiv = styled.div`
  background-color: rgba(0, 0, 150, 0.08);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px;
  width: 50%;
  height: 100%;
`;

export const RightDiv = styled.div`
  background-color: rgba(0, 0, 150, 0.08);
  display: flex;
  flex-direction: column;
  position: relative;
  width: 22%;
  padding: 10px;
  height: 100%;
`;

export const TradingHistoryDiv = styled.div`
  background-color: white;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border: 1px solid #d4d4d4;
  margin-bottom: 50px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

export const TradingHistoryTitle = styled.div`
  width: 90%;
  height: 7%;
  padding: 10px;
  display: flex;
  font-size: 18px;
  font-weight: bold;
`;

export const OptionHistoryItemList = styled.div`
  width: 90%;
  height: 85%;
  margin-bottom: 2%;
  display: flex;
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const OptionHistoryItemTitle = styled.div`
  width: 100%;
  height: 7%;
  font-size: 10px;
  margin-bottom: 1%;
  position: relative;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  padding: 5px;
`;

export const HistoryChartDiv = styled.div`
  background-color: white;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border: 1px solid #d4d4d4;
  margin-bottom: 50px;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HistorySummary = styled.div`
  margin-bottom: 50px;
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
  height: 85%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HistorySummaryContentsResult = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #B38FFF;
  border-radius: 5px;
  width: 70%;
  height: 26%;
  text-align: center;
  align-items: center;
  padding: 10px;
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
  border-radius: 5px;
  width: 100%;
  height: 16%;
`;

export const HistorySaveButton = styled.button`
  display: flex;
  position: relative;
  width: 80%;
  height: 10%;
  justify-content: center;
  align-items: center;
`;
