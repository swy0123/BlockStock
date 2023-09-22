import styled from "styled-components";

export const ItemContainer = styled.div`
    max-width: 400px;
    margin-bottom: 2px;
    display: flex;
    max-height: 40px;
    padding: 10px;
`;

export const LikeImg = styled.img`
  width: 13px;
  height: 13px;
  margin: 7px 0px 0px 0px;
`;

export const Choice = styled.div`
background: #ffffff;
border-radius: 6px;
font-weight: 300;
font-size: 10px;
display: flex;
align-items: center;
text-align: center;
color: #9256FD;
border: 1px solid #9256FD;
padding: 2px 10px;
height: 20px;
cursor: pointer;
transition: transform 0.2s ease; /* 변환 효과 추가 */
&:active{
  background:#9256FD;
  color:white ;
}
&:hover{
  transform: scale(1.1); /* 호버 시에 10% 확대 (커짐) */
}
`;


export const OptionName = styled.div`
font-size: 12px;
font-weight: 500;
`;
