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
cursor: pointer;
/* font-weight: bold; */
`;

export const SendBox = styled.div`
width: 5px;
height: 30px;
margin: 0px 50px 0px 0px;
cursor: pointer;
`;

export const SendStyleBox = styled.div`
width: 100%;
height: 40px;
display: flex;
cursor: pointer;
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
cursor: pointer;
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
cursor: pointer;
/* font-weight: bold; */
`;

export const BackBtn = styled.div`
  padding: 10px 10px;
  border-radius: 50%;
  max-width: 30px;
  max-height: 30px;
  font-size: 13px;
  background: #9155FD;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  text-align: center;
  color: #FFFFFF;
  margin: 0px 0px 0px 20px;
  position: relative;
  top:400px;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1); 
  }
`;





