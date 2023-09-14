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
  z-index: 5;
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
margin: 30px 0px 0px 400px;
font-size: 30px;
font-weight: 600;
`;
export const Wrapper = styled.div`
margin: 50px 0px 0px 0px;
`;
export const Card = styled.div`
width: 230px;
height: 300px;
background: #FFFFFF;
border: 2px solid #D9D9D9;
border-radius: 10px;
cursor: pointer;
`;
export const TaticTitle = styled.div`
font-size: 20px;
font-weight: 600;
margin: 0px 0px 0px 30px;
`;
export const TaticImg = styled.img`
width: 170px;
height: 160px;
margin: 5px 0px 0px 30px;
`;
export const TaticTime = styled.div`
font-size: 17px;
margin: 5px 0px 0px 30px;
font-weight: 600;
`;
export const Explanation1 = styled.div`
margin: 20px 0px 0px 100px;
font-size: 20px;
font-weight: 600;
`;
export const Explanation2 = styled.div`
margin: 10px 0px 0px 103px;
color: #5B5B5B;
`;
export const Button = styled.div`
  margin: 10px 0px 0px 473px;
  width: 121px;
  height: 40px;
  background: #FFFFFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #9155FD;
  display: flex; /* Flex 컨테이너로 설정 */
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  &:hover{
    background-color: #9155FD;
    color: white;
  }
`;














