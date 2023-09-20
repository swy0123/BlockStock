import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  min-height: 410px;
  background: #FFFFFF;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin: 30px 0px 0px 0px;
`;
export const Wrapper = styled.div`
`;
export const Header = styled.div`
display: flex;
margin: 20px 30px 0px 500px;
padding: 30px;
`;
export const Search = styled.input`
margin: 0px 0px 0px 30px;
font-size: 12px;
`;
export const CreateBtn = styled.div`
width: 117px;
height: 33px;
margin: 0px 0px 0px 30px;
font-weight: 400;
font-size: 16px;
line-height: 22px;
background: #9155FD;
text-align: center;
border-radius: 5px;
color: #FFFFFF;
&:hover{
  background-color: #5A3EFF;
}
`;

export const ItemBox = styled.div`
background-color: #F4F6F8;
min-height: 500px;
max-width: 100%;
padding: 0px 30px 60px 30px ;
`;

export const Card = styled.div`
width: 210px;
height: 270px;
background: #FFFFFF;
box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
border-radius: 8px;
margin: 60px 0px 0px 20px;
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