import React from "react";
import ContestStoreBtn from "../../components/Contest/ContestStore/ContestStoreBtn";
import CurrentContestContent from "../../components/Contest/ContestStore/CurrentContest/CurrentContestContent";
import ExpectedContestContent from "../../components/Contest/ContestStore/ExpectedContest/ExpectedContestContent";
import CompletedContestContent from "../../components/Contest/ContestStore/CompletedContest/CompletedContestContent";
import styled from "styled-components";
import { useRecoilValue } from 'recoil';
import { contesttype } from '../../recoil/Contest/ContestList';

const Container = styled.div`
width: 100%;
min-height: 200px;
`;
function ContestList(){
  const type = useRecoilValue(contesttype);
  return(
    <>
      <Container>
        <ContestStoreBtn/>
        {type==='proceed' && (
          <CurrentContestContent/>
        )}
        {type==='expected' && (
          <ExpectedContestContent/>
        )}
        {type==='finish' && (
        <CompletedContestContent/>
        )}
    </Container>
    </>
  )
}

export default ContestList