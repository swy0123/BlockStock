import { style } from "@mui/system";
import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  min-height: 410px;
  background: #FFFFFF;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin: 30px 0px 50px 5px;
  `;
export const Header = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
export const Line = styled.div`
width: 35%;
background-color: #c7c7c7;
height: 2px;
margin: 8px 0px 0px 0px;
`;

export const HeaderTitle = styled.div`
font-size: 23px;
margin: 0px 10px 0px 10px;
`;
export const Wrapper = styled.div`
background-color: #F4F6F8;
height: 580px;
overflow: auto;
min-width: 80%;
padding: 5px 20px 30px 60px ;
/* & > * {
    display: flex;
    justify-items: center;
    align-items: center;
  } */
`;

export const Card = styled.div`
width: 210px;
height: 270px;
background: #FFFFFF;
box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
border-radius: 8px;
margin: 20px 10px 0px 30px;
z-index: 5;
display: flex;
justify-content: center;
align-items: center;
&:hover{
  background-color: #F4F6F8;
  cursor: pointer;
}
`;

export const TitleBox = styled.div`
width: 100%;
height: 40px;
`;
export const Title = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
  margin: 10px 0px 0px 0px;
`;
export const Img = styled.img`
width: 80%;
height: 130px;
display: block; 
margin: 0px 0px 0px 0px; 
object-fit: contain;
`;
export const ReturnBox = styled.div`
max-width: 100%;
height: 40px;
padding: 15px 20px 0px 20px;
font-size: 12px;
font-weight: 600;
`;

export const Testreturn = styled.div`
display: flex;
`;

export const Contestreturn = styled.div`
display: flex;
`;

export const LikeBox = styled.div`
padding: 3px 20px 0px 20px;
width: 100%;
height: 40px;
display: flex;
font-size: 12px;
`;
export const Like = styled.div`
display: flex;
`;
export const Hit = styled.div`
margin: 0px 0px 0px 100px;
display: flex;
`;