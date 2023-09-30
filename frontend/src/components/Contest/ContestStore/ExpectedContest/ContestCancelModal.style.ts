import styled from "styled-components";

export const Modal = styled.div`
    width: 700px;
    height: 500px;
    background: #FFFFFF;
    border: 1px solid #D4D4D4;
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    z-index: 99;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
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

export const Title = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 39px;
align-items: center;
text-align: center;
color: #444444;
margin: 40px 0px 0px 0px;
`;

export const Wrapper = styled.div`
width: 550px;
height: 270px;
background: #FFFFFF;
border: 3px solid #D4D4D4;
border-radius: 10px;
margin: 30px 0px 0px 70px;
overflow: auto;
scrollbar-width: none;

&::-webkit-scrollbar {
width: 8px; /* 스크롤바의 너비 설정 */
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

export const ContestTitle = styled.div`
font-weight: 400;
font-size: 20px;
line-height: 26px;
text-align: center;
color: #000000;
font-weight: bold;
margin: 20px 0px 0px 0px;
`;

export const Schedule = styled.div`
font-weight: 400;
font-size: 12px;
align-items: center;
text-align: center;
color: #B6ABBB;
margin: 20px 0px 20px 0px;
`;


export const Content = styled.div`
font-weight: 400;
font-size: 13px;
line-height: 19px;
color: #444444;
margin: 20px 30px 0px 30px;
`;

export const Personnel = styled.div`
font-weight: 400;
font-size: 13px;
color: #B6ABBB;
margin: 20px 0px 0px 30px;
`;

export const Box = styled.div`
display: flex;
margin: 30px 0px 0px 440px;
`;
export const Button1 = styled.div`
width: 70px;
height: 30px;
background: #EC4275;
border-radius: 6px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 12px;
align-items: center;
text-align: center;
margin: 0px 40px 0px 0px;
color: #FFFFFF;
display: flex; /* Flex 컨테이너로 설정 */
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  &:hover{
    background-color: #D63527;
    color: white;
    transition: background-color 0.7s ease;
  }
`;
export const Button2 = styled.div`
width: 70px;
height: 30px;
background: #097DF3;
border-radius: 6px;
font-weight: 700;
font-size: 12px;
line-height: 19px;
align-items: center;
text-align: center;
color: #FFFFFF;
display: flex; /* Flex 컨테이너로 설정 */
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  &:hover{
    background-color: #0040A0;
    color: white;
    transition: background-color 0.7s ease;
  }
`;