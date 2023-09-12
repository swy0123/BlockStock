import React from 'react'
import styled from "styled-components";
import CurrentContest from '../../components/Contest/Main/CurrentContest'
import ExpectedContest from '../../components/Contest/Main/ExpectedContest'

function Contest(){
  
  const ContestBox = styled.div`
    display:flex
  `;

  const ContestContent = styled.div`
    margin: 20px 160px
  `;

  return(
    <>
      <ContestBox>
        <ContestContent>
          <CurrentContest/>
          <ExpectedContest/>
        </ContestContent>
      </ContestBox>
    </>
  )
};

export default Contest