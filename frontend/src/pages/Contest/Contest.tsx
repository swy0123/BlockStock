import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import CurrentContest from '../../components/Contest/Main/CurrentContest';
import ExpectedContest from '../../components/Contest/Main/ExpectedContest';
import RecentContestResults from '../../components/Contest/Main/RecentContestResults';

// 대회 메인api
import { contestMain } from '../../api/Contest/Main';
  // 스타일드 컴포넌트를 함수 내부에 정의
  const ContestBox = styled.div`
    max-width: 95%;
    /* min-width: 1200px; */
    overflow: hidden;
  `;

  const ContestContent = styled.div`
    display: flex;
    margin: 0px 0px 0px 0px;
  `;


function Contest() {

  const [currentContest, setCurrentContest] = useState([])
  const [expectedContest, setExpectedContest] = useState([])
  const [recentContestResults, setRecentContestResults] = useState([])

  // 대회 메인 api ==========================================
  useEffect(()=>{
    contestApi()
  },[])

  const contestApi = async()=>{
    const res = await contestMain()
    console.log('대회 메인', res)
    setCurrentContest(res.currentContestResultList)
    setExpectedContest(res.nextContestList)
    setRecentContestResults(res.prevContestResult)
  }

  // 대회 메인 api ==========================================
  return (
    <>
      <ContestBox>
        <CurrentContest contestItem={currentContest}/>
        <ContestContent>
          <div style={{width:'50%', margin:'0px 15% 0px 0px' }}>
          <ExpectedContest contest={expectedContest}/>
          </div>
          <div style={{width:'34%'}}>
            <RecentContestResults contest={recentContestResults}/>
          </div>
        </ContestContent>
      </ContestBox>
    </>
  );
}

export default Contest;
