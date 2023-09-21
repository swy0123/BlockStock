import ReactDatePicker from "react-datepicker";
import styled from "styled-components";

export const BlockCodingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 95%;
  overflow: hidden;
`;

export const LeftDiv = styled.div`
  /* background-color: rgba(0, 0, 0, 0.08); */
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  width: 25%;
  height: 100%;
  padding: 0 10px 0 0;
  height: 100%;
`;

export const TitleDiv = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  align-items: center;
  justify-content: start;
  /* overflow: hidden; */
`;
export const Title = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bolder;
  width: 100%;
  height: 100%;
  align-items: center;
  white-space: nowrap;
  /* text-overflow: ellipsis; */
  outline: none;
  overflow: hidden;
  border-style: solid;
  border-width: 0 0 2px 0;
  border-color: transparent;
`;
export const TitleInput = styled.input`
display: flex;
  width: 100%;
  height: 100%;
  font-size: 18px;
  font-weight: bolder;
  align-items: center;
  white-space: nowrap;
  /* text-overflow: ellipsis; */
  overflow: hidden;
  outline: none;
  border-style: solid;
  border-width: 0 0 2px 0;
  margin: 1px 0 0.5px 0;
  /* margin: 0; */
  background-color: transparent;
`;
export const IsSearchDiv = styled.div`
  background-color: white;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  margin-top: 25px;
  padding: 0 5%;
  margin-bottom: 50px;
  border-radius: 10px;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SearchTypeDiv = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
export const SearchType = styled.div<{ $isChecked: boolean }>`
  /* float: left; */
  width: 45%;
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
  height: 25px;
  margin: 4% 0;
  padding: 1px;
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
  width: 17px;
`;

export const SearchInput = styled.input`
  width: 90%;
  height: 100%;
  outline: none;
  border-style: solid;
  border-width: 0;
`;
export const SearchItemList = styled.div`
  width: 100%;
  height: 80%;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

//-----------------------------------------------
export const BlockCodingDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  background-color: white;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  /* margin-top: 20px; */
  padding: 10px;
  margin-bottom: 50px;
  border-radius: 10px;
  width: 72%;
  height: 100%;
`;
export const Test = styled.div`
  position: relative;
  width: 100%;
  height: 75%;
  margin-bottom: 5%;
`;
export const InputDetailDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 5%;
  text-align: center;
  margin-bottom: 1%;
`;
export const InputDetailTitle = styled.div`
  position: relative;
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const InputDetailValue = styled.div`
  position: relative;
  width: 25%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const InputOptionDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  height: 14%;
  margin-bottom: 1%;
  align-items: center;
`;

export const Input = styled.input`
  width: 120px;
  height: 35px;
  font-size: 16px;
  text-align: center;
  border-radius: 5px;
  border-width: 1px;
  background-color: transparent;
`;

export const StyledDatePicker = styled(ReactDatePicker)`
  width: 70%;
  height: 35px;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  border-radius: 5px;
  border-width: 1px;
`;
