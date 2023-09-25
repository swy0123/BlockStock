import React from "react";
import styled from "styled-components";
import { TacticContainer } from "../MakeTactic/MakeTactic.style";
import ContestTacticResult from "../../components/Contest/ContestProgress/ContestTacticResult";
import { useLocation } from "react-router-dom";

function ContestProgress() {
  // const { state } = useLocation();

  return (
    <TacticContainer>
      {/* <ContestTacticResult state={state}></ContestTacticResult> */}
      <ContestTacticResult></ContestTacticResult>
    </TacticContainer>
  );
}

export default ContestProgress;
