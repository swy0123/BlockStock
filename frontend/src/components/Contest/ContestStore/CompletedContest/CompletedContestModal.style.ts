import styled from "styled-components";

export const Modal = styled.div`
    width: 1200px;
    height: 600px;
    background: #FFFFFF;
    border: 1px solid #D4D4D4;
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    z-index: 99;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
  z-index: 5;
`;

export const Header = styled.div`
display: flex;
padding: 30px 0px 0px 40px;
`;
export const CloseBtn = styled.div`
position: absolute;
  top: 30px; /* Adjust the top position as needed */
  right: 40px; /* Adjust the right position as needed */
  cursor: pointer;
  color: #B2B2B2;
`;
export const Title = styled.div`
width: 533px;
height: 32.9px;
font-weight: 600;
font-size: 40px;
`;
export const Schedule = styled.div`
font-weight: 400;
font-size: 16px;
color: #B6ABBB;
margin: 40px 0px 0px 40px;
`;
export const Personnel = styled.div`
font-weight: 400;
font-size: 16px;
color: #B6ABBB;
margin: 20px 0px 0px 40px;
`;

export const Wrapper = styled.div`
display:flex;
`;
export const RankUser = styled.div`
width: 55%;
height: 100%;
`;
export const RankImage = styled.img`
 width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 30px 0px 0px 50px;
`;
export const RankUserNickName = styled.div`
  font-size:17px;
  font-weight: bold;
  margin-top: 8px;
  text-align: center;
`;
export const ContestReturn = styled.div`
  margin: 8px 0px 0px 0px;
  color: #8A8A8A;
`;
export const Participant = styled.div`
  width: 35%;
  max-height: 330px;
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
`;

export const Line = styled.div`
height: 330px;
border: 1px solid #D3D3D3;
`;

export const NoRankImage = styled.img`
  width: 45px;
  height: 45px;
  margin: 0px 25px 0px 0px;
  border-radius: 50px;
`;