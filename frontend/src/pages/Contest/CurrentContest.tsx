import React from "react";
import styled from "styled-components";
import CurrentContestContent from "../../components/Contest/ContestStore/CurrentContest/CurrentContestContent";
import ContestStoreBtn from "../../components/Contest/ContestStore/ContestStoreBtn";

const Container = styled.div`
width: 100%;
min-height: 200px;
`;

function CurrentContest(){

  return(
    <Container>
      <ContestStoreBtn name='진행'/>
      <CurrentContestContent/>
    </Container>
  )
}

export default CurrentContest