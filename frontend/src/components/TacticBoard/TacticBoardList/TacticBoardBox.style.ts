import styled from "styled-components";

export const Container = styled.div`
  width: 98%;
  min-height: 410px;
  background: #FFFFFF;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin: 30px 0px 0px 5px;
`;
export const Wrapper = styled.div`
width: 100%;
@media (max-width: 1200px) {
 width : 99%;
}
@media (max-width: 900px) {
 width : 95.5%;
}
`;
export const CreateBtn = styled.div`
margin-left: 70%;
min-width: 90px;
height: 30px;
/* margin: 0px 0px 0px 53%; */
font-weight: 400;
font-size: 13px;
background: #9155FD;
text-align: center;
border-radius: 6px;
color: #FFFFFF;
border: none;
transition: 0.5s; // 자연스럽게 호버 효과 주려고 넣음(필수)
&:hover{
  background: #dfd1f8;
    color: #535155;
    transition: 0.5s;
}
@media (max-width: 1400px) {
    margin-left: 57%;
}
@media (max-width: 1300px) {
    margin-left: 50%;
}
@media (max-width: 1300px) {
  margin: 0px;
  position: relative;
  top: 0px;
  left: 30px;
}
`;
export const Header = styled.div`
display: flex;
padding: 30px;
width: 100%;
`;
export const Search = styled.input`
margin: 0px 0px 0px 30px;
font-size: 12px;
  border-radius: 6px;
height: 28px;
border: solid 1px lightgrey;
width: 50px;
outline: none;
transition:  width 1s ease;
&:focus {
  width: 250px; 
  }
`;

export const ItemBox = styled.div`
background-color: #F4F6F8;
min-height: 500px;
min-width: 96%;
padding: 0px 20px 60px 20px ;
`;

export const Card = styled.div`
width: 210px;
height: 270px;
background: #FFFFFF;
box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
border-radius: 8px;
margin: 60px 0px 0px 20px;
z-index: 5;
`;

export const TitleBox = styled.div`
width: 100%;
height: 40px;
`;
export const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
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
margin: 0 auto; 
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