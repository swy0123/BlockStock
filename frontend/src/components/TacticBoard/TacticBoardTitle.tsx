import React from "react";
import styled from "styled-components";

const Container = styled.div`
font-weight: 400;
font-size: 25px;
color: #000000;
font-weight: bold;
`;


function TacticBoardTitle(){
  return(
    <Container>
      전략게시판
    </Container>
  )
}

export default TacticBoardTitle