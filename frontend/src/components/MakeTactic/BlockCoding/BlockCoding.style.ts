import ReactDatePicker from "react-datepicker";
import styled from "styled-components";
import { colors } from "@mui/material";

export const BlockCodingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const TopDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const TitleDiv = styled.div`
  width: fit-content;
  min-width: 100px;
  height: 40px;
  align-items: center;
  margin: 0 10px 0 25px;
`;
export const Title = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bolder;
  width: 100%;
  height: 100%;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  border-style: solid;
  border-width: 0 0 1px;
  border-color: transparent;
  cursor: pointer;
`;
export const TitleSpan = styled.span`
  color: #ababab;
  cursor: pointer;
  width: fit-content;
  font-size: 12px;
  text-align: center;
  align-items: center;
`;
export const TitleInput = styled.input`
  width: 100%;
  height: 80%;
  font-size: 20px;
  font-weight: bolder;
  outline: none;
  border-style: solid;
  border-width: 0 0 2px;
  background-color: transparent;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90%;
`;

export const LeftDiv = styled.div<{ $isLeftOpen: boolean }>`
  /* display: flex; */
  display: ${(props) => (props.$isLeftOpen ? "flex" : "none")};
  position: relative;
  /* width: 26%; */
  width: ${(props) => (props.$isLeftOpen ? "26%" : "0%")};
  padding: 10px;
  height: 100%;
`;

export const IsSearchDiv = styled.div`
  background-color: white;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 2%;
`;

export const SearchTypeDiv = styled.div`
  width: 90%;
  height: 6%;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
export const SearchType = styled.div<{ $isChecked: boolean }>`
  /* float: left; */
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: ${(props) => (props.$isChecked ? " #9155FD" : "black")};
  border-style: solid;
  border-width: 0 0 3px;
  border-color: ${(props) => (props.$isChecked ? "#9155FD" : "transparent")};
`;

export const SearchInputDiv = styled.div`
  width: 90%;
  height: 5%;
  position: relative;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  border-style: solid;
  border-width: 0 0 1px 0;
`;
export const SearchImg = styled.img`
  position: absolute;
  bottom: 20%;
  right: 0;
  width: 18px;
`;

export const SearchInput = styled.input`
  width: 90%;
  height: 80%;
  outline: none;
  border-style: solid;
  border-width: 0;
  font-size: 15px;
`;
export const SearchItemList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 83%;
  margin-top: 2%;
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

export const OptionDetail = styled.div`
  width: 90%;
  height: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ececec;
  border-radius: 10px;
`;
export const OptionDetailItem = styled.div`
  width: 90%;
  height: 20%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #ececec;
  border-radius: 10px;
`;

//-----------------------------------------------

export const RightDiv = styled.div<{ $isLeftOpen: boolean }>`
  display: flex;
  position: relative;
  /* width: 74%; */
  width: ${(props) => (props.$isLeftOpen ? "74%" : "99%")};
  margin-left: ${(props) => (props.$isLeftOpen ? "0%" : "1%")};
  padding: 10px;
  height: 100%;
`;

export const BlockCodingDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  background: #ffffff;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding-top: 1%;
`;
export const BlocklyDiv = styled.div`
  position: relative;
  width: 100%;
  height: 75%;
`;
export const InputDetailTitle = styled.div`
  display: flex;
  color: #ababab;
  width: 100%;
  height: 20px;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
`;
export const InputDetailDiv = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ababab;
  width: 100%;
  height: 30px;
  background: #ffffff;
  border: 1px solid #ececec;
  border-radius: 10px;
  padding: 10px;
`;

export const InputDetailValue = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
export const InputOptionDiv = styled.div`
  display: flex;
  justify-content: end;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 25px;
  font-size: 15px;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 80%;
  height: 25px;
  font-size: 13px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid transparent; /* 보더를 투명하게 만듭니다. */
  background-color: transparent;
  outline: none;
`;

export const StyledDatePicker = styled(ReactDatePicker)`
  width: 100%;
  height: 25px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 12px;
  border-radius: 5px;
  border-width: 1px;
  border: 1px solid transparent; /* 보더를 투명하게 만듭니다. */
  background-color: transparent;
  outline: none;
  
`;

//======================================

export const BottomDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ChoiceBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MoneyBox = styled.div`
  display: flex;
  width: 19%;
  margin: 0 0.5%;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #d9d9da;
  border-radius: 6px;
`;

export const ScheduleBox = styled.div`
  display: flex;
  width: 19%;
  margin: 0 0.5%;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #d9d9da;
  border-radius: 6px;
`;

export const PeriodBox = styled.div`
  display: flex;
  width: 19%;
  padding: 0 0.5%;
  justify-content: center;
  background: #ffffff;
  /* border: 1px solid #d9d9da;
  border-radius: 6px; */
`;

export const StocksInput = styled.input`
  display: flex;
  width: 80%;
  height: 25px;
  font-size: 13px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid transparent; /* 보더를 투명하게 만듭니다. */
  background-color: transparent;
  outline: none;
`;

export const ChoiceTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #ababab;
  width: 100%;
  margin: 10px 0;
`;

export const TestButton = styled.div`
  background: #9155fd;
  border-radius: 6px;
  font-size: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  padding: 8px 13px;
  margin-right: 5%;
  cursor: pointer;
`;

export const SearchDivOpenButton = styled.div<{ $isLeftOpen: boolean }>`
  position: absolute;
  width: 10px;
  height: 100px;
  border-radius: ${(props) => (props.$isLeftOpen ? "0 100px 100px 0" : "100px 0 0 100px")};
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  //
  &:hover {
    background-color: #9256fd;
  }
`;

export const SearchDivOpenImg = styled.img`
  width: 100%;
  height: 20px;
  color: #9155fd;
`;
