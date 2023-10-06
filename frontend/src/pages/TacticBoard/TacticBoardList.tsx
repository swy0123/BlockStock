import React from "react";
import styled from "styled-components";
import TacticBoardTitle from "../../components/TacticBoard/TacticBoardTitle";
import TacticBoardBox from "../../components/TacticBoard/TacticBoardList/TacticBoardBox";

const Container = styled.div`
  width: 100%;
  height: 600px;
`;

function TacticBoardList() {
  return (
    <Container>
      <TacticBoardTitle />
      <TacticBoardBox />
    </Container>
  );
}

export default TacticBoardList;
