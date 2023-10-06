import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 90%;
  /* height: 10%; */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5%;
`;

export const LikeImg = styled.img`
  width: 13px;
  height: 13px;
  margin: 7px 0px 0px 0px;
`;

export const ItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0px 0px 0px 10px;
`;

export const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  display: flex;
  align-items: start;
  justify-content: center;
  font-size: 5px;
  color: gray;
  cursor: pointer;
  &:hover {
    color: #9256fd;
  }
`;

export const ItemSelect = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Choice = styled.div`
  background: #ffffff;
  border-radius: 6px;
  font-weight: 300;
  font-size: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #9256fd;
  border: 1px solid #9256fd;
  padding: 2px 10px;
  height: 20px;
  cursor: pointer;
  transition: transform 0.2s ease; /* 변환 효과 추가 */
  &:active {
    background: #9256fd;
    color: white;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const OptionName = styled.div`
  font-size: 15px;
`;
export const OptionCode = styled.div`
  color: #9a9a9a;
  font-size: 1px;
  padding-left: 5px;
  text-align: start;
`;
