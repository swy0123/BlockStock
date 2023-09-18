import styled from "styled-components";

export const Container = styled.div`
width: 100%;
min-height: 400px;
justify-content: center; /* 수평 가운데 정렬 */
align-items: center;
`;
export const Wrapper = styled.div`
width: 830px;
min-height: 270px;
border: 2px solid #F4F1F1;
border-radius: 6px;
padding: 30px;
margin: 0px auto 25px auto;
`;
export const Title = styled.div`
font-size: 20px;
font-weight: 600;
color: #ABABAB;
`;

export const CommentInput = styled.textarea`
resize: none;
margin: 20px 0px 0px 20px;
max-width: 750px;
width: 1084px;
min-height: 120px;
border-radius: 6px;
/* color: #C2C2C2; */
border: 1px solid #C2C2C2;
outline: none;
font-size: 13px;
padding: 20px;
`;

export const CommentBtn = styled.div`
width: 120.05px;
height: 30px;
background: #9155FD;
border-radius: 6px;
font-style: normal;
font-size: 13px;
display: flex;
justify-content: center; /* 수평 가운데 정렬 */
align-items: center;
color: #FFFFFF;
margin: 20px 0px 0px 692px;
&:hover{
  background-color: #6C30C5;
}
`;

export const BackBtn = styled.div`
width: 100px;
height: 32px;
background: #FFFFFF;
border: 1px solid #A7A7A7;
border-radius: 200px;

font-weight: 600;
font-size: 12px;
display: flex;
justify-content: center; /* 수평 가운데 정렬 */
align-items: center;
color: #6D6D6D;
margin: 0px 0px 0px 20px;
`;
