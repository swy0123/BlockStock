import styled from "styled-components";

export const Modal = styled.div`
    width: 1000px;
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
  z-index: 999;
`;
export const Header = styled.div`
display: flex;
`;
export const CloseBtn = styled.div`
position: absolute;
  top: 30px; /* Adjust the top position as needed */
  right: 40px; /* Adjust the right position as needed */
  cursor: pointer;
  color: #B2B2B2;
`;
 
export const Title = styled.div`
margin: 40px 0px 0px 340px;
font-size: 30px;
font-weight: 600;
text-align: center;
`;
export const TicketImg = styled.img`
margin: 20px 0px 0px 360px;
width: 260px;
`;
export const Explanation1 = styled.div`
margin: 40px 0px 0px 350px;
font-size: 18px;
font-weight: 600;
`;
export const Explanation2 = styled.div`
margin: 20px 0px 0px 400px;
font-size: 18px;
font-weight: 600;
`;

export const Box = styled.div`
display: flex;
margin: 30px 0px 0px 330px;
`;
export const Button1 = styled.div`
width: 100px;
height: 40px;
background: #EC4275;
border-radius: 6px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
align-items: center;
text-align: center;
margin: 10px 100px 0px 30px;
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
width: 100px;
height: 40px;
background: #097DF3;
border-radius: 6px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 19px;
align-items: center;
text-align: center;
color: #FFFFFF;
margin: 10px 0px 0px 0px;
display: flex; /* Flex 컨테이너로 설정 */
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  &:hover{
    background-color: #0040A0;
    color: white;
    transition: background-color 0.7s ease;
  }
`;






