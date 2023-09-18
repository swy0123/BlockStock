import styled from "styled-components";

export const Container = styled.div`
width: 609px;
height: 302px;
background: #FFFFFF;
box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.1);
border-radius: 10px;
z-index: 999;
position: fixed; /* 화면 아래에 고정 */
  bottom: 10px; /* 화면 아래에 배치 */
  right: 10px;
`;

export const Header = styled.div`
width: 100%;
background-color: #F0EFF0;
height: 40px;
display: flex;
`;

export const Title = styled.div`
font-size: 16px;
margin: 8px 0px 0px 20px;
color: #585858;
`;

export const Wrapper = styled.div`
`;

export const UserBox = styled.div`
display: flex;
font-size: 20px;
margin: 10px 0px 10px 20px;
color: #595959;
`;

export const UserImg = styled.img`
width: 23px;
height: 23px;
margin: 2px 10px 0px 20px;
`;

export const Line = styled.div`
width: 100%;
border: 1px solid #DADADA;
`;
export const NickName = styled.div`
color: #9E9E9E;
`;

export const Content = styled.textarea`
width: 93%;
height: 140px;
resize: none;
font-size: 17px;
padding: 15px 20px 0px 20px;
  border: none;
  outline: none;
  font-weight: 500;
`;

export const Send = styled.div`
width: 70px;
height: 25px;
color: white;
font-size: 12px;
background: #9155FD;
box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
border-radius: 5px;
display: flex; /* Set display to flex */
justify-content: center; /* Center horizontally */
align-items: center; 
margin: 0px 0px 0px 85%;
cursor: pointer;
transition: background-color 0.5s ease, color 0.5s ease;
&:hover{
  background-color: white;
  color: #9155FD;
}
`;
