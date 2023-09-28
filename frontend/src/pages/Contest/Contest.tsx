import React from 'react';
import styled from 'styled-components';
import CurrentContest from '../../components/Contest/Main/CurrentContest';
import ExpectedContest from '../../components/Contest/Main/ExpectedContest';
import RecentContestResults from '../../components/Contest/Main/RecentContestResults';

  // 스타일드 컴포넌트를 함수 내부에 정의
  const ContestBox = styled.div`
    max-width: 100%;
    overflow: hidden;
  `;

  const ContestContent = styled.div`
    display: flex;
    margin: 0px 0px 0px 0px;
  `;


function Contest() {

  return (
    <>
      <ContestBox>
        <CurrentContest />
        <ContestContent>
          <div style={{width:'50%', margin:'0px 15% 0px 0px' }}>
          <ExpectedContest/>
          </div>
          <div style={{width:'34%'}}>
            <RecentContestResults />
          </div>
        </ContestContent>
      </ContestBox>
    </>
  );
}

export default Contest;
