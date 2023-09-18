import styled from "styled-components";

export const BlockCodingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const TitleDiv = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */
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
export const LeftDiv = styled.div`
  /* background-color: rgba(0, 0, 0, 0.08); */
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  width: 27%;
  /* margin-right: 2%; */
  padding: 1%;
  height: 100%;
`;
export const Input = styled.input`
  /* width: 95%; */
  height: 30px;
  /* border: none; */
  border-radius: 5px;
  background-color: transparent;
`;
export const IsSearchDiv = styled.div`
  background-color: white;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border: 1px solid #d4d4d4;
  margin-top: 20px;
  padding: 0 5%;
  margin-bottom: 50px;
  border-radius: 10px;
  width: 90%;
  height: 85%;
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
  margin: 2%;
  margin-top: 4%;
  position: relative;
`;
export const SearchImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  /* padding: 0; */
  height: 100%;
  /* position: absolute; */
  outline: none;
  border-width: 0 0 1px;
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
  /* background-color: rgba(0, 0, 0, 0.08); */
  position: relative;
  padding: 1%;
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
  /* margin-top: 1%; */
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
  height: 100%;
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
