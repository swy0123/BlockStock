import React from "react";
import styled from "styled-components";
import ContestStoreBtn from "../../components/Contest/ContestStore/ContestStoreBtn";
import ExpectedContestContent from "../../components/Contest/ContestStore/ExpectedContest/ExpectedContestContent";


const Container = styled.div`
margin: 30px 0px 0px 200px;
width: 1200px;
height: 800px;
`;

function ExpectedContest(){
  return(
    <Container>
      <ContestStoreBtn name="/expectedContest" />
      <ExpectedContestContent/>
    </Container>
  )
}

export default ExpectedContest