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
  height: 15%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const Title = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const TitleInput = styled.input`
  width: 90%;
  height: 80%;
  /* border: none; */
  border-radius: 5px;
  background-color: transparent;
`;
export const LeftDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  width: 25%;
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
  margin-bottom: 50px;
  border-radius: 10px;
  width: 100%;
  height: 85%;
`;
export const SearchType = styled.div<{ $isChecked: boolean }>`
  float: left;
  width: 50%;
  height: 7%;
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: ${(props) => (props.$isChecked ? " #9155FD" : "black")};
  /* border-style: solid; */
`;

export const SearchTypeUnderLine = styled.div<{ $isChecked: boolean }>`
  float: left;
  width: 70%;
  height: 2px;
  display: flex;
  margin-top: 2%;
  background-color: ${(props) => (props.$isChecked ? " #9155FD" : "")};
  /* border-style: solid; */
`;

export const SearchInput = styled.input`
  width: 92%;
  /* padding: 0; */
  height: 25px;
  margin: 2%;
  /* position: absolute; */
  /* border: none; */
  border-radius: 5px;
  /* background-color: transparent; */
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
  background-color: rgba(0, 0, 0, 0.08);
  position: relative;
  padding: 1%;
  width: 75%;
  height: 100%;
`;
export const Test = styled.div`
  position: relative;
  width: 100%;
  height: 75%;
  margin-bottom: 1%;
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
