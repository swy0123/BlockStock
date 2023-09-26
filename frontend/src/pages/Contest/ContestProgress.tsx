<<<<<<< HEAD
import React, {useEffect} from "react";
import { TacticContainer } from "../MakeTactic/MakeTactic.style";
import ContestTacticResult from "../../components/Contest/ContestProgress/ContestTacticResult";
import { useLocation } from "react-router-dom";

=======
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TacticContainer } from "../MakeTactic/MakeTactic.style";
import ContestTacticResult from "../../components/Contest/ContestProgress/ContestTacticResult";
import { useLocation, } from "react-router-dom";
>>>>>>> 257736c7c50927b421a37bc32b695952507a9158

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
