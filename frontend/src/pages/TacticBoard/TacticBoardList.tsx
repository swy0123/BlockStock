import React from "react";
import styled from "styled-components";
import TacticBoardTitle from "../../components/TacticBoard/TacticBoardTitle";
import TacticBoardBox from "../../components/TacticBoard/TacticBoardList/TacticBoardBox";

const Container = styled.div`
  /* margin: 30px 0px 0px 80px; */
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  text-align: center;
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
