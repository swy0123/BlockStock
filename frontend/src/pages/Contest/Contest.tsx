import React, { useState } from 'react';
import styled from 'styled-components';
import CurrentContest from '../../components/Contest/Main/CurrentContest';
import ExpectedContest from '../../components/Contest/Main/ExpectedContest';
import RecentContestResults from '../../components/Contest/Main/RecentContestResults';

  // 스타일드 컴포넌트를 함수 내부에 정의
  const ContestBox = styled.div`
  width: 100%;
  `;

  const ContestContent = styled.div`
    display: flex;
  `;


function Contest() {

  return (
    <>
      <ContestBox>
        <CurrentContest />
        <ContestContent>
          <ExpectedContest/>
            <RecentContestResults />
        </ContestContent>
      </ContestBox>
    </>
  );
}

export default Contest;
