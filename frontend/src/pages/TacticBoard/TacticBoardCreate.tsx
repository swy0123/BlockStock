import React from "react";
import styled from "styled-components";
import TacticBoardCreateBox from "../../components/TacticBoard/TacticBoardCreate/TacticBoardCreateBox";
const Container = styled.div`
  margin: 50px 0px 0px 50px;
`;
function TacticBoardCreate(){
  return(
    <Container>
        <TacticBoardCreateBox/>
    </Container>
  )
}

export default TacticBoardCreate