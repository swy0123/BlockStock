import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 650px;
  background: #FFFFFF;
  border: 1px solid #D4D4D4;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin: 10px 0px 0px 0px;
`;

export const Wrapper = styled.div`
width: 100%;
margin: 0px 0px 10px 0px;
height: 88%;
overflow: auto;
scrollbar-width: none;

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
height: 30px;
font-weight: 600;
font-size: 20px;
line-height: 26px;
`;

export const Schedule = styled.div`
width: 449px;
height: 15px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 15px;
display: flex;
align-items: center;
color: #B6ABBB;
`;

export const ContestBox = styled.div`
display: flex;
`;
export const Box = styled.div`
& :hover{
  background-color: #f5f5f5;
}
`;
export const ContentBox = styled.div`
margin: 0px 0px 0px 50px;
`;

export const Content = styled.div`
font-weight: 400;
font-size: 12px;
display: flex;
align-items: center;
margin: 10px 0px 0px 0px;
`;

export const StartAsset = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
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
font-size: 12px;
line-height: 19px;
display: flex;
align-items: center;
color: #B6ABBB;
margin:30px 0px 0px 0px;
`;

export const Term = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 19px;
display: flex;
align-items: center;
color: #B6ABBB;
margin: 10px 0px 20px 0px;
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
margin: 50px 0px 20px 88%;
&:hover{
  background-color: rgba(145, 85, 253, 2);
  transition: background-color 0.6s ease;
}
`;

export const Notexist = styled.div`
color: #ABABAB;
`;

export const Registed = styled.div`
margin: 2px 0px 0px 10px;
width: 60px;
height: 20px;
font-weight: 600;
font-size: 8px;
background-color: #D4D4D4;
border-radius: 6px;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
&:hover{
  background-color: #D4D4D4;
border-radius: 6px;
color: #FFFFFF;
}
`;
export const NotRegisted = styled.div`
margin: 2px 0px 0px 10px;
width: 60px;
height: 20px;
font-weight: 600;
font-size: 8px;
background-color: #676767;
border-radius: 6px;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
&:hover{
  background-color: #676767;
border-radius: 6px;
color: #FFFFFF;
}
`;



