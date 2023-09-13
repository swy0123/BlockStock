import styled from "styled-components";

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
export const TacticTitle = styled.div`
  background-color: rgba(0, 150, 0, 0.08);
  display: flex;
  width: 100%;
  height: 5%;
`;

export const TradingHistoryDiv = styled.div`
  background-color: rgba(0, 0, 150, 0.08);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  width: 22%;
  /* margin-right: 2%; */
  padding: 1%;
  height: 100%;
`;
export const HistoryChartDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.08);
  position: relative;
  padding: 1%;
  width: 50%;
  height: 100%;
`;
export const HistorySummary = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 22%;
  /* margin-right: 2%; */
  padding: 1%;
  height: 100%;
`;
export const HistorySummaryContents = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: rgba(150, 0, 0, 0.08);
  width: 100%;
  margin-bottom: 5%;
  padding: 1%;
  height: 80%;
`;
export const HistorySaveButton = styled.button`
  display: flex;
  position: absolute;
  width: 80%;
  /* margin-right: 2%; */
  /* padding: 1%; */
  height: 10%;
  justify-content: center;
  align-items: center;
  bottom: 5%;
`;