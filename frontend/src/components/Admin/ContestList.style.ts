import styled from "styled-components";

export const Container = styled.div`
width: 613.02px;
height: 571px;
background: #FFFFFF;
border: 1px solid #D4D4D4;
box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`;

export const Wrapper = styled.div`
margin: 10px 0px 0px 0px;
padding: 20px 0px 0px 0px;
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
font-size: 16px;
margin: 0px 0px 10px 30px;
`;

export const Schedule = styled.div`
width: 449px;
height: 15px;
font-weight: 400;
font-size: 10px;
margin: 0px 0px 0px 30px;
display: flex;
align-items: center;
color: #B6ABBB;
`;

export const ContestBox = styled.div`
display: flex;
`;

export const ContentBox = styled.div`
margin: 0px 0px 0px 30px;
`;

export const Content = styled.div`
font-weight: 400;
font-size: 13px;
line-height: 19px;
display: flex;
align-items: center;
margin: 10px 0px 0px 0px;
`;

export const StartAsset = styled.div`
font-weight: 400;
font-size: 13px;
line-height: 19px;
display: flex;
align-items: center;
color: #B6ABBB;
margin: 10px 0px 0px 0px;
`;

export const Stock = styled.div`
font-weight: 400;
font-size: 13px;
line-height: 19px;
display: flex;
align-items: center;
color: #B6ABBB;
margin: 30px 0px 0px 0px;
`;

export const Term = styled.div`
font-weight: 400;
font-size: 13px;
line-height: 19px;
display: flex;
align-items: center;
color: #B6ABBB;
margin: 10px 0px 30px 0px;
`;

export const BtnBox = styled.div`
display: flex;
margin: 0px 0px 0px 380px;
`;
export const UpdateBtn = styled.button`
padding: 5px 10px;
background: #097DF3;
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
margin: 0px 20px 0px 0px;
&:hover{
  background-color: rgba(145, 85, 253, 2);
  transition: background-color 0.6s ease;
}
`;
export const DeleteBtn = styled.button`
padding: 5px 10px;
background: #EC4275;
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
&:hover{
  background-color: rgba(145, 85, 253, 2);
  transition: background-color 0.6s ease;
}
`;





