import styled from "styled-components";

export const Modal = styled.div`
    width: 800px;
    height: 475px;
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
margin-top: 20px;
font-size: 25px;
font-weight: 600;
`;
export const Box = styled.div`
margin: 0px 0px 0px 0px;
padding: 10px;
height: 250px;
width: 100%;
`;
export const TitleBox = styled.div`
width: 100%;
display: flex; /* Flex 컨테이너로 설정 */
justify-content: center; /* 수평 가운데 정렬 */
align-items: center; /* 수직 가운데 정렬 */
`;
export const Wrapper = styled.div`
margin: 30px 0px 0px 0px;
`;
export const Card = styled.div`
width: 180px;
height: 230px;
background: #FFFFFF;
border: 2px solid #D9D9D9;
border-radius: 10px;
cursor: pointer;
`;
export const TaticTitle = styled.div`
font-size: 14px;
font-weight: 600;
margin: 20px 0px 0px 25px;
`;
export const TaticImg = styled.img`
width: 130px;
height: 120px;
margin: 5px 0px 0px 25px;
`;
export const TaticTime = styled.div`
font-size: 12px;
margin: 5px 0px 0px 30px;
font-weight: 600;
`;
export const Explanation1 = styled.div`
margin: 0px 0px 0px 75px;
font-size: 16px;
font-weight: 600;
`;
export const Explanation2 = styled.div`
margin: 5px 0px 0px 75px;
font-size: 12px;
color: #5B5B5B;
`;
export const Button = styled.div`
  margin: 10px 0px 0px 346px;
  width: 100px;
  height: 35px;
  background: #FFFFFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #9155FD;
  display: flex; /* Flex 컨테이너로 설정 */
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  &:hover{
    background-color: #9155FD;
    color: white;
    transition: background-color 0.7s ease;
  }
`;














