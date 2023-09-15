import styled from "styled-components";

export const Container = styled.div`
width: 100%;
min-height: 400px;
display: flex;
justify-content: center; /* 수평 가운데 정렬 */
align-items: center;
`;
export const Wrapper = styled.div`
width: 1130px;
min-height: 270px;
border: 2px solid #F4F1F1;
border-radius: 6px;
padding: 30px;

`;
export const Title = styled.div`
font-size: 20px;
font-weight: 600;
color: #ABABAB;
`;

export const CommentInput = styled.textarea`
resize: none;
margin: 20px 0px 0px 0px;
max-width: 1120px;
width: 1084px;
min-height: 150px;
border-radius: 6px;
/* color: #C2C2C2; */
border: 1px solid #C2C2C2;
outline: none;
font-size: 20px;
padding: 20px;
`;

export const CommentBtn = styled.div`
width: 156.05px;
height: 34px;
background: #9155FD;
border-radius: 6px;
font-style: normal;
font-size: 16px;
display: flex;
justify-content: center; /* 수평 가운데 정렬 */
align-items: center;
color: #FFFFFF;
margin: 20px 0px 0px 970px;
&:hover{
  background-color: #6C30C5;
}
`;

