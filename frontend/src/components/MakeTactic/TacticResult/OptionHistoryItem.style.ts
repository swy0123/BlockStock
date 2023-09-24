import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 70px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

export const TermImg = styled.img`
  width: 13px;
  height: 13px;
  margin-right: 5px;
  /* margin: 7px 0px 0px 0px; */
`;

export const TermContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-left: 10px;
  height: 20px;
  width: 60px;
  margin-right: 15px;
  border-style: solid;
  border-width: 1px;
  color: #9c9c9c;
  
`;

export const OptionHistoryItemContent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
  display: flex;
  text-align: center;
  align-items: center;
`;
