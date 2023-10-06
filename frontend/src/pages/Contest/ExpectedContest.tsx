import React from "react";
import styled from "styled-components";
import ContestStoreBtn from "../../components/Contest/ContestStore/ContestStoreBtn";
import ExpectedContestContent from "../../components/Contest/ContestStore/ExpectedContest/ExpectedContestContent";


const Container = styled.div`
width: 100%;
min-height: 200px;
`;

function ExpectedContest(){
  return(
    <Container>
      <ContestStoreBtn name="예정" />
      <ExpectedContestContent/>
    </Container>
  )
}

export default ExpectedContest