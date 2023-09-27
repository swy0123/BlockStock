import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
`;

export const Header = styled.div`
width: 98%;
height: 4%;
display: flex;
padding: 10px;
`;

export const IconBox = styled.div`
margin: 0px 0px 0px 87%;
@media (max-width: 1000px) {
    margin-right: 5%; 
  }
`;

export const Line = styled.div`
width: 100%;
border: 1px solid #DFDFDF;
`;
export const Wrapper = styled.div`
width: 100%;
height: 570px;
overflow: auto;
`;

export const MessageItem = styled.div`
width: 98%;
height: 40px;
padding: 15px 0px 0px 0px;
&:hover{
  background-color: #F8F8F8;
}
`;
export const Box = styled.div`
display: flex;
margin: 0px 0px 0px 10px;
`;
export const MessageItemTitle = styled.div`
margin: 0px 0px 0px 30px;
/* width: 300px;
border: 1px solid black; */
`;
export const MessageItemSchedule = styled.div`
font-size: 12px;
color: #A5A5A5;
margin: 5px 0px 0px 30px;
`;
export const MessageItemImg = styled.img`
width: 25px;
height: 25px;
margin: 0px 0px 0px 0px;
`;
export const MessageItemNickName = styled.div`
font-size: 13px;
color: #A5A5A5;
margin: 4px 0px 0px 10px;
`;

export const ItemContentBox = styled.div`
width: 700px;
display: flex;
`;