import styled from "styled-components";

export const Container = styled.div`
min-width: 20%;
height: 100%;
@media (max-width: 1500px) {
    min-width: 250px;
  }
`;

export const Wrapper = styled.div`
width: 100%;
height: 150px;
margin: 50px 0px 0px 0px;
`;

export const ReceiveBox = styled.div`
  width: 5px;
  height: 30px;
  margin: 0px 50px 0px 0px;
  background-color: white;
`;

export const ReceiveStyleBox = styled.div`
  min-width: 200px;
  height: 40px;
  display: flex;
  &:hover {
    color: #9747FF;
    ${ReceiveBox} {
      background-color: #9747FF;
    }
  }
`;

export const ReceiveTitle = styled.div`
font-size: 13px;
margin: 3.5px 0px 0px 10px;
/* font-weight: bold; */
`;

export const SendBox = styled.div`
width: 5px;
height: 30px;
margin: 0px 50px 0px 0px;
`;

export const SendStyleBox = styled.div`
width: 100%;
height: 40px;
display: flex;
&:hover {
    color: #9747FF;
    ${SendBox} {
      background-color: #9747FF;
    }
  }
`;

export const SendTitle = styled.div`
font-size: 13px;
margin: 4px 0px 0px 13px;
/* font-weight: bold; */
`;

export const KeepBox = styled.div`
width: 5px;
height: 30px;
margin: 0px 45px 0px 0px;
`;

export const KeepStyleBox = styled.div`
width: 100%;
height: 40px;
display: flex;
&:hover {
    color: #9747FF;
    ${KeepBox} {
      background-color: #9747FF;
    }
  }
`;

export const KeepTitle = styled.div`
font-size: 13px;
margin: 5.5px 0px 0px 12px;
/* font-weight: bold; */
`;