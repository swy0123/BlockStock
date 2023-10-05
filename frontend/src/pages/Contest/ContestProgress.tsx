import { TacticContainer } from "../MakeTactic/MakeTactic.style";
import React, {useEffect} from "react";
import ContestTacticResult from "../../components/Contest/ContestProgress/ContestTacticResult";
import { useLocation } from "react-router-dom";

function ContestProgress() {
  const location = useLocation();
  const selectedContest = location.state.selectedContest;
  const type = location.state.type;
  useEffect(()=>{
    console.log(selectedContest)
    console.log(type)
  },[])
  return (
    <TacticContainer>
      <ContestTacticResult contestId={Number(selectedContest.id)} type={type}></ContestTacticResult>
    </TacticContainer>
  );
}

export default ContestProgress;
