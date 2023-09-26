import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TacticContainer } from "../MakeTactic/MakeTactic.style";
import ContestTacticResult from "../../components/Contest/ContestProgress/ContestTacticResult";
import { useLocation, } from "react-router-dom";

function ContestProgress() {
  const location = useLocation();
  const selectedContest = location.state.selectedContest;
  
  return (
    <TacticContainer>
      <ContestTacticResult id={selectedContest.id}></ContestTacticResult>
    </TacticContainer>
  );
}

export default ContestProgress;
