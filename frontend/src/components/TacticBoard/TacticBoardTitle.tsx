import React from "react";
import styled from "styled-components";

const Container = styled.div`
font-weight: 400;
font-size: 25px;
color: #000000;
font-weight: bold;
display: flex;
margin: 0px 0px 0px 10px;
`;
const Line = styled.div`
width: 88%;
height: 1px;
background-color: #B6ABBB;
margin: 16px 0px 0px 20px;
`;

function TacticBoardTitle(){
  return(
    <Container>
      <div style={{minWidth:'120px'}}>
        전략게시판
      </div>
      <Line />
    </Container>
  )
}

export default TacticBoardTitle