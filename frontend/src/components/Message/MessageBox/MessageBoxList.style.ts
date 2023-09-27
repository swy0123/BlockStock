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
overflow-y: auto;
overflow-x: hidden;
  /* 스크롤바 스타일 지정 */
  &::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 지정 */
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* 스크롤바 트랙의 배경색 지정 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; /* 스크롤바 색상 지정 */
    border-radius: 6px; /* 스크롤바의 모서리를 둥글게 만듭니다. */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* 스크롤바를 호버할 때의 색상 지정 */
  }
`;

export const MessageItem = styled.div`
max-width: 100%;
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
margin: 3px 0px 0px 30px;
font-size: 13px;
/* width: 300px;
border: 1px solid black; */
`;
export const MessageItemSchedule = styled.div`
font-size: 8px;
color: #A5A5A5;
margin: 5px 0px 0px 30px;
`;
export const MessageItemImg = styled.img`
width: 23px;
height: 23px;
margin: 0px 0px 0px 0px;
`;
export const MessageItemNickName = styled.div`
font-size: 10px;
color: #A5A5A5;
margin: 4px 0px 0px 10px;
`;

export const ItemContentBox = styled.div`
width: 60%;
display: flex;
@media (max-width: 1300px) {
    width: 500px;
  }
`;