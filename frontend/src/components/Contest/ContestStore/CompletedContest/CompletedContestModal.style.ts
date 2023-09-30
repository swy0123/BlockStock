import styled from "styled-components";

export const Modal = styled.div`
    width: 800px;
    height: 450px;
    background: #FFFFFF;
    border: 1px solid #D4D4D4;
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    z-index: 99;
    /* position: absolute; */
    /* top: 50%; */
    /* left: 50%; */
    /* transform: translate(-50%, -50%); */
`;
export const NotUser = styled.div`
text-align: center;
color: #D4D4D4;
margin: 12% 0px 0px 0px;
`;
export const Container = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Header = styled.div`
display: flex;
padding: 30px 0px 0px 40px;
`;
export const CloseBtn = styled.div`
/* position: absolute; */
  /* top: 30px;  */
  /* right: 40px;  */
  cursor: pointer;
  color: #B2B2B2;
  margin: 0px 0px 0px 160px ;
`;
export const Title = styled.div`
width: 533px;
height: 32.9px;
font-weight: 600;
font-size: 25px;
`;
export const Schedule = styled.div`
font-weight: 400;
font-size: 14px;
color: #B6ABBB;
margin: 10px 0px 0px 40px;
`;
export const Personnel = styled.div`
font-weight: 400;
font-size: 14px;
color: #B6ABBB;
margin: 5px 0px 0px 40px;
`;

export const Wrapper = styled.div`
width: 800px;
display: flex;
  justify-content: center;
  align-items: center;
`;
export const RankUser = styled.div`
width: 55%;
height: 300px;
`;
export const RankImage = styled.img`
 width: 60px;
  height: 60px;
  border-radius: 50px;
  margin: 30px 0px 0px 55px;
`;
export const RankUserNickName = styled.div`
  font-size:15px;
  font-weight: bold;
  margin-top: 8px;
  text-align: center;
`;
export const ContestReturn = styled.div`
  margin: 8px 0px 0px 0px;
  color: #8A8A8A;
  font-size: 12px;
`;
export const Participant = styled.div`
  /* width: 45%; */
  width: 300px;
  max-height: 200px;
  overflow-y: auto;

  /* 스크롤바 트랙 (배경) 스타일링 */
  &::-webkit-scrollbar {
    width: 6px; /* 스크롤바의 너비 설정 */
  }

  /* 스크롤바 색상 설정 */
  &::-webkit-scrollbar-thumb {
    background: #888; /* 스크롤바 색상 설정 */
    border-radius: 6px; /* 스크롤바 모양을 둥글게 만듭니다. */
  }

  /* 스크롤바 hover 시 색상 변경 */
  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* 스크롤바 hover 시 색상 변경 */
  }

  /* 스크롤바가 보이지 않도록 */
  /* overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  } */
`;

export const Line = styled.div`
height: 200px;
border: 1px solid #D3D3D3;
`;

export const NoRankImage = styled.img`
  width: 25px;
  height: 25px;
  margin: 7px 15px 0px 0px;
  border-radius: 50px;
`;