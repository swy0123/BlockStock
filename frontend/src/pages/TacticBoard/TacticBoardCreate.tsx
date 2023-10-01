import React from "react";
import styled from "styled-components";
import TacticBoardCreateBox from "../../components/TacticBoard/TacticBoardCreate/TacticBoardCreateBox";
const Container = styled.div`
`;
function TacticBoardCreate(){
  return(
    <Container>
        <TacticBoardCreateBox/>
    </Container>
  )
}

export default TacticBoardCreate