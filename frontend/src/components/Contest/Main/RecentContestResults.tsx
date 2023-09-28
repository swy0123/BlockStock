import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  ContestTitleWrapper,
  ContestTitle,
  Wrappe,
  ContestLink,
  RankNickName,
  RankBox,
  RankContent,
  Rank,
  RankImage,
  RankReturn,
  Notexist
} from './RecentContestResults.style';

// import {recentContestResults} from '../../../api/Contest/Main'

function RecentContestResults() {
  const navigate = useNavigate();
  const [rank,setRank] = useState([])
  
  // api 통신 ==================================================
    useEffect(()=>{
    recentcontestresults()
  },[])
    const recentcontestresults = async () => {
    const contest = await recentContestResults()
    console.log('직전 대회 결과 - 컴포넌트',contest)
    if(contest===undefined){
      setRank([])
    } else {
      setRank(contest)
    }
  }
  // api 통신 ==================================================
  
  return (
    <Container>
      <ContestTitleWrapper>
        <ContestTitle>최근 대회 결과</ContestTitle>
        <ContestLink onClick={() => navigate('/completedcontest')}>
          자세히 보기
        </ContestLink>
      </ContestTitleWrapper>

      <Wrappe style={{
          display: rank.length === 0 ? 'flex' : undefined,
          alignItems: rank.length === 0 ? 'center' : undefined,
          justifyContent: rank.length === 0 ? 'center' : undefined,
      }}>
        {rank.length === 0 ? (
         <Notexist>비어있습니다.</Notexist> 
        ) : (
          <>
          {rank.map((item, index) => (
            <div key={index}>
              <RankBox>
                <Rank>{index + 1} 등</Rank>
                {item.profileImage ? (
                  <RankImage src={item.profileImage} />
                  ) : (
                    <RankImage src={"./icon/user_purple.png"} />
                )}
                <RankContent>
                  {item.nickName === '' ? (
                    <RankNickName>admin</RankNickName>
                  ) : (
                  <RankNickName>{item.nickName}</RankNickName>
                  )}
                  <RankReturn>
                    수익률 :{' '}
                    <div style={{ color: item.returns[0] === '-' ? 'blue' : 'red' }}>
                      {item.returns}
                    </div>
                  </RankReturn>
                </RankContent>
              </RankBox>
              {index < rank.length - 1 && <hr style={{ color: '#D3D3D3', margin: '0px 0px 10px 0px' }} />}
            </div>
          ))}
          </>
        )}
      </Wrappe>
    </Container>
  );
}

export default RecentContestResults;
