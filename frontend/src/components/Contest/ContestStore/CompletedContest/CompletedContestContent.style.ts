import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  height: 650px;
  background: #FFFFFF;
  border: 1px solid #D4D4D4;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin: 30px 0px 0px 0px;

`;

export const Wrapper = styled.div`
margin: 30px 0px 0px 0px;
height: 84%;
overflow: auto;
    /* 스크롤바 트랙 (배경) 스타일링 */
    &::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 설정 */
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

export const Title = styled.div`
width: 410px;
height: 30px;
font-weight: 600;
font-size: 20px;
line-height: 26px;
margin: 0px 0px 10px 50px;
`;

export const Schedule = styled.div`
width: 449px;
height: 15px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
margin: 0px 0px 0px 50px;

display: flex;
align-items: center;
color: #B6ABBB;
`;

export const ContestBox = styled.div`
display: flex;
`;

export const ContentBox = styled.div`
margin: 0px 0px 0px 50px;
`;

export const Content = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 19px;
display: flex;
align-items: center;
margin: 10px 0px 0px 0px;
`;

export const StartAsset = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 19px;
display: flex;
align-items: center;
color: #B6ABBB;
margin: 10px 0px 0px 0px;
`;

export const Stock = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 19px;
display: flex;
align-items: center;
color: #B6ABBB;
margin: 30px 0px 0px 0px;
`;

export const Term = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 19px;
display: flex;
align-items: center;
color: #B6ABBB;
margin: 10px 0px 30px 0px;
`;

export const Button = styled.button`
padding: 5px 10px;
background: rgba(145, 85, 253, 0.8);
border-radius: 6px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 19px;
align-items: center;
text-align: center;
color: #FFFFFF;
border: none;
margin: 50px 0px 0px 830px;
&:hover{
  background-color: rgba(145, 85, 253, 2);
  transition: background-color 0.6s ease;
}
`;







