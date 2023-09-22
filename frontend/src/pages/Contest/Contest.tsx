import React, { useState } from 'react';
import styled from 'styled-components';
import CurrentContest from '../../components/Contest/Main/CurrentContest';
import ExpectedContest from '../../components/Contest/Main/ExpectedContest';
import RecentContestResults from '../../components/Contest/Main/RecentContestResults';
import ContestCreateBtn from '../../components/Contest/ContestCreate/ContestCreateBtn';
import ContestCreate from '../../components/Contest/ContestCreate/ContestCreate';


  // 스타일드 컴포넌트를 함수 내부에 정의
  const ContestBox = styled.div`
    margin: 50px 0px 0px 60px ;
  `;

  const ContestContent = styled.div`
    display: flex;
  `;


function Contest() {
  const [isCreateContestVisible, setCreateContestVisible] = useState(false);

  const toggleCreateContest = () => {
    setCreateContestVisible(!isCreateContestVisible);
  };

  return (
    <>
      <ContestBox>
        <CurrentContest />
        <ContestContent>
          <div>
          <ExpectedContest/>
          </div>
          <div>
            <RecentContestResults />
          </div>
        </ContestContent>
      </ContestBox>
      <div onClick = {toggleCreateContest}>
        <ContestCreateBtn />
      </div>
      {isCreateContestVisible && <ContestCreate />}
    </>
  );
}

export default Contest;
