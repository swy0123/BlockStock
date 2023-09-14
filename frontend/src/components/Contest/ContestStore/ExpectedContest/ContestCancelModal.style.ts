import styled from "styled-components";

export const Modal = styled.div`
    width: 1000px;
    height: 550px;
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

export const Title = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
align-items: center;
text-align: center;
color: #444444;
margin: 40px 0px 0px 0px;
`;

export const Wrapper = styled.div`
width: 847px;
height: 300px;
background: #FFFFFF;
border: 3px solid #D4D4D4;
border-radius: 10px;
margin: 30px 0px 0px 70px;
`;

export const ContestTitle = styled.div`
font-weight: 400;
font-size: 22px;
line-height: 26px;
text-align: center;
color: #000000;
font-weight: bold;
margin: 20px 0px 0px 0px;
`;

export const Schedule = styled.div`
font-weight: 400;
font-size: 16px;
line-height: 15px;
align-items: center;
text-align: center;
color: #B6ABBB;
margin: 20px 0px 20px 0px;
`;


export const Content = styled.div`
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #444444;
margin: 20px 0px 0px 30px;
`;

export const Personnel = styled.div`
font-weight: 400;
font-size: 16px;
color: #B6ABBB;
margin: 20px 0px 0px 30px;
`;

export const Box = styled.div`
display: flex;
margin: 30px 0px 0px 330px;
`;
export const Button1 = styled.div`
width: 130px;
height: 50px;
background: #EC4275;
border-radius: 6px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 19px;
align-items: center;
text-align: center;
margin: 0px 100px 0px 0px;
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
width: 130px;
height: 50px;
background: #097DF3;
border-radius: 6px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 20px;
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