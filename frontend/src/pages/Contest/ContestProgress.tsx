import React from "react";
import styled from "styled-components";
import { TacticContainer } from "../MakeTactic/MakeTactic.style";
import ContestTacticResult from "../../components/Contest/ContestProgress/ContestTacticResult";
import { useLocation, useEffect } from "react-router-dom";

function ContestProgress() {
  const location = useLocation();
  const selectedContest = location.state.selectedContest;
  useEffect(()=>{
    console.log(selectedContest)
  },[])
  return (
    <TacticContainer>
      {/* <div>{selectedContest.code}</div>
      <div>{selectedContest.content}</div>
      <div>{selectedContest.id}</div>
      <div>{selectedContest.startAsset}</div>
      <div>{selectedContest.term}</div>
      <div>{selectedContest.title}</div> */}
      {/* <ContestTacticResult state={selectedContest.id}></ContestTacticResult> */}
      <ContestTacticResult></ContestTacticResult>
    </TacticContainer>
  );
}

export default ContestProgress;
