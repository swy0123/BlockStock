import styled from "styled-components";
import { Title } from "./CommentCeate.style";

export const Container = styled.div`
min-height: 200px;
overflow-y: auto;
`;

export const Header = styled.div`
display: flex;
margin: 30px 0px 10px 50px;
color: #B8B6B6;
font-size: 13px;
`;
export const UserImg = styled.img`
width: 23px;
height: 23px;
`;

export const NickName = styled.div`
margin: 2px 10px 0px 20px;
`;
export const Day = styled.div`
margin: 2px 0px 0px 10px;
`;
export const DeleteBtn = styled.div`
position: relative;
left: 47%;
width: 40px;
height: 20px;
color: white;
font-size: 10px;
background: #EC4275;
border-radius: 6px;
display: flex;
cursor: pointer;
justify-content: center; /* 수평 가운데 정렬 */
align-items: center;
@media(max-width:1300px){
  left: 30%;
}
@media(max-width:1200px){
  left: 20%;
}
@media(max-width:1000px){
  left: 0%;
}
`;
export const Comment = styled.div`
margin: 20px 0px 35px 50px;
font-size: 13px;
white-space: pre-line;
word-wrap: break-word;
max-width: 800px;
min-height: 50px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh; 
`;