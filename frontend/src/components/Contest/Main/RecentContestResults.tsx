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
} from './RecentContestResults.style';

// import {recentContestResults} from '../../../api/Contest/Main'

function RecentContestResults() {
  const navigate = useNavigate();
  // const [rank,setRank] = useState([])
  
  // api 통신 ==================================================
    useEffect(()=>{
    recentcontestresults()
  },[])
    const recentcontestresults = async () => {
    const contest = await recentContestResults()
    console.log('직전 대회 결과 - 컴포넌트',contest)
  }
  // api 통신 ==================================================

  const rank = [
    {
      nickName: 'JohnDoe',
      profileImage: 'john.jpg',
      return: '+15%',
    },
    {
      nickName: 'AliceSmith',
      profileImage: 'alice.jpg',
      return: '-8%',
    },
    {
      nickName: 'BobJohnson',
      profileImage: 'bob.jpg',
      return: '+20%',
    },
  ];

  return (
    <Container>
      <ContestTitleWrapper>
        <ContestTitle>최근 대회 결과</ContestTitle>
        <ContestLink onClick={() => navigate('/completedcontest')}>
          자세히 보기
        </ContestLink>
      </ContestTitleWrapper>

      <Wrappe>
        {rank.map((item, index) => (
          <div key={index}>
            <RankBox>
              <Rank>{index + 1} 등</Rank>
              <RankImage src="/icon/user_purple.png" />
              <RankContent>
                <RankNickName>{item.nickName}</RankNickName>
                <RankReturn>
                  수익률 :{' '}
                  <div style={{ color: item.return[0] === '-' ? 'blue' : 'red' }}>
                    {item.return}
                  </div>
                </RankReturn>
              </RankContent>
            </RankBox>
            {index < rank.length - 1 && <hr style={{ color: '#D3D3D3', margin: '0px 0px 10px 0px' }} />}
          </div>
        ))}
      </Wrappe>
    </Container>
  );
}

export default RecentContestResults;
