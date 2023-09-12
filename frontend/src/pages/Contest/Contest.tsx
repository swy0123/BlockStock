import React from 'react'
import styled from "styled-components";
import CurrentContest from '../../components/Contest/Main/CurrentContest'
import ExpectedContest from '../../components/Contest/Main/ExpectedContest'
import RecentContestResults from '../../components/Contest/Main/RecentContestResults';

function Contest(){
  
  const ContestBox = styled.div`
    margin: 20px 160px
  `;

  const ContestContent = styled.div`
    display:flex
  `;

  return(
    <>
      <ContestBox>
          <CurrentContest/>
          <ContestContent>
            <ExpectedContest/>
            <RecentContestResults/>
        </ContestContent>
      </ContestBox>
    </>
  )
};

export default Contest