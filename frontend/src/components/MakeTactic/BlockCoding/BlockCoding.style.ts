import ReactDatePicker from "react-datepicker";
import styled from "styled-components";

export const BlockCodingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const TitleDiv = styled.div`
  display: flex;
  width: 300px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bolder;
  width: 90%;
  height: 100%;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  border-style: solid;
  border-width: 0 0 3px;
  border-color: transparent;
`;
export const TitleInput = styled.input`
  width: 90%;
  height: 80%;
  font-size: 20px;
  font-weight: bolder;
  outline: none;
  border-style: solid;
  border-width: 0 0 3px;
  background-color: transparent;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90%;
`;

export const LeftDiv = styled.div`
  display: flex;
  position: relative;
  width: 26%;
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
  height: 98%;
  padding-top: 2%;
`;

export const SearchTypeDiv = styled.div`
  width: 90%;
  height: 5%;
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
  width: 100%;
  height: 80%;
  margin-top: 2%;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 3px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

//-----------------------------------------------

export const RightDiv = styled.div`
  display: flex;
  position: relative;
  width: 74%;
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
  height: 98%;
  padding-top: 2%;
`;
export const Test = styled.div`
  position: relative;
  width: 700px;
  min-height: 400px;
  margin-bottom: 5%;
`;
export const InputDetailTitleBox = styled.div`
  /* position: relative; */
  display: flex;
  margin: 0px 0px 0px 45px;
  color: #ababab;
  width: 700px;
  height: 20px;
  background: #ffffff;
  border-radius: 10px;
`;
export const InputDetailDiv = styled.div`
  /* position: relative; */
  display: flex;
  color: #ababab;
  width: 700px;
  height: 30px;
  background: #ffffff;
  border: 1px solid #ececec;
  border-radius: 10px;
  padding: 10px;
`;

export const InputDetailTitle = styled.div`
  min-width: 150px;
  height: 20px;
  margin: 0px 0px 0px 20px;
`;
export const InputDetailValue = styled.div`
  /* position: relative; */
  width: 150px;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
`;
export const InputOptionDiv = styled.div`
  display: flex;
  /* flex-direction: row-reverse; */
  align-items: center;
  width: 100%;
  margin: 10px 0px 0px 75%;
  /* align-items: center; */
`;

export const Input = styled.input`
  width: 120px;
  height: 25px;
  font-size: 12px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid transparent; /* 보더를 투명하게 만듭니다. */
  background-color: transparent;
  outline: none;
`;
export const StocksInput = styled.input`
  width: 120px;
  height: 25px;
  font-size: 14px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid transparent; /* 보더를 투명하게 만듭니다. */
  background-color: transparent;
  background: #ffffff;
  border: 3px solid #9155fd;
  border-radius: 10px;
  margin: 10px 10px 0px 10px;
`;

export const StyledDatePicker = styled(ReactDatePicker)`
  width: 70%;
  height: 25px;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  border-radius: 5px;
  border-width: 1px;
  border: 1px solid transparent; /* 보더를 투명하게 만듭니다. */
  background-color: transparent;
  outline: none;
`;

//======================================

export const MoneyBox = styled.div`
  background: #ffffff;
  border: 1px solid #d9d9da;
  border-radius: 6px;
`;

export const ScheduleBox = styled.div`
  background: #ffffff;
  border: 1px solid #d9d9da;
  border-radius: 6px;
  margin: 0px 0px 0px 30px;
`;

export const PeriodBox = styled.div`
  background: #ffffff;
  /* border: 1px solid #D9D9DA; */
  width: 150px;
  border-radius: 6px;
  margin: 0px 0px 0px 30px;
`;

export const ChoiceBox = styled.div`
  width: 100%;
  margin: 0px 0px 0px 40px;
  font-size: 12px;
`;

export const ChoiceTitleBox = styled.div`
  display: flex;
  color: #ababab;
`;

export const TestButton = styled.div`
  background: #9155fd;
  border-radius: 6px;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  padding: 8px 13px;
  margin: 10px 0px 0px 10px;
`;
