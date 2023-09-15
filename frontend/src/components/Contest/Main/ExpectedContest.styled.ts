
import { styled } from "styled-components";

export const Container = styled.div`
width: 720px;
margin: 0px 0px 500px 0px;
`;

export const ContestTitleWrapper = styled.div`
min-width: 400px;
display: flex;
`;

export const ContestTitle = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const ContestLink = styled.div`
margin: 10px;
color: #A0A0A0;
cursor: pointer;
`;

export const Wrappe = styled.div`
width: 720px;
height: 268px;
border: 2px solid #D4D4D4;
overflow: auto;
box-sizing: border-box;
position: absolute;
background: #FFFFFF;
box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
border-radius: 10px;
/* 스크롤바 트랙 (배경) 스타일링 */
&::-webkit-scrollbar {
  width: 6px; /* 스크롤바의 너비 설정 */
}

/* 스크롤바 색상 설정 */
&::-webkit-scrollbar-thumb {
  background: #888; /* 스크롤바 색상 설정 */
  border-radius: 6px; /* 스크롤바 모양을 둥글게 만듭니다. */
}

/* 스크롤바 hover 시 색상 변경 */
&::-webkit-scrollbar-thumb:hover {
  background: #555; /* 스크롤바 hover 시 색상 변경 */
}
`;

export const ContestHeader = styled.div`
display:flex;
height: 36px;
padding: 10px 0px 0px 15px;
`;

export const ConfirmationBtn1 = styled.button`
margin: 10px 0px 0px 20px;
width: 60px;
height: 20px;
font-weight: 600;
font-size: 8px;
line-height: 11px;
background: #676767;
border-radius: 6px;
color: #FFFFFF;
border: 1px;
`;

export const ConfirmationBtn2 = styled.button`
margin: 10px 0px 0px 20px;
width: 60px;
height: 20px;
font-weight: 600;
font-size: 8px;
line-height: 11px;
background: #D4D4D4;
border-radius: 6px;
color: black;
border: 1px;
`;

export const Title = styled.div`
font-size:20px;
margin: 0px 0px 0px 10px;
font-weight: 600;
`;

export const ContestPeriod = styled.div`
margin: 3px 0px 10px 20px;
font-size:13px;
color: #B6ABBB;
`;

export const ContestBox = styled.div`
padding: 10px 0px 0px 30px;
`;

export const ContentBox = styled.div`
// padding: 10px 0px 0px 60px;
display: none;
`;

export const Participants = styled.div`
color: #B6ABBB;
margin: 3px 0px 3px 0px
`;
export const Ticket = styled.div`
color: #B6ABBB;
margin: 3px 0px 3px 0px
`;
export const Term = styled.div`
color: #B6ABBB;
margin: 3px 0px 20px 0px
`;
export const ContestContent = styled.div`
margin: 0px 0px 30px 0px;
`;



