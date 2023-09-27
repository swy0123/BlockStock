import React, { useEffect, useState } from 'react'
import { format } from "d3-format";
import {
  Container,
  Header,
  HeaderTitle,
  Wrapper,
  RankBox,
  RankNumber,
  UserImg,
  UserNickName,
  UserReturnBox,
  UserReturn,
  UserReturnIcon
} from './ContestRankBox.style'
import { contestRanking, rankingBoxItem } from '../../../api/Contest/ContestProgress';
import dayjs from 'dayjs';

function ContestRankBox(props:{contestId:number}) {
  const [curRank, setCurRank] = useState<rankingBoxItem[]>([]);
  const [count, setCount] = useState(15); // 남은 시간 (단위: 초)
  const [updateTime, setUpdateTime] = useState(dayjs().format("YYYY.MM.DD HH:mm:ss"));
  const pricesDisplayFormat = format(",");


  useEffect(() => {
    const cnt = setInterval(() => {
      // 타이머 숫자가 하나씩 줄어들도록
      setCount((count) => count - 1);
    }, 1000);

    if (count === 1) {
      setCount(15);
      getCurRank();
      setUpdateTime(dayjs().format("YYYY.MM.DD HH:mm:ss"));
    }
    return () => clearInterval(cnt);
  }, [count]);

  useEffect(()=>{

  },)

  const getCurRank = async () => {
    const res = await contestRanking(props.contestId);
    setCurRank(res);
  }

  const rank = [
    {
      nickName: 'JohnDoe',
      profileImage: 'john.jpg',
      returns: '+15%',
    },
    {
      nickName: 'AliceSmith',
      profileImage: 'alice.jpg',
      returns: '-8%',
    },
    {
      nickName: 'BobJohnson',
      profileImage: 'bob.jpg',
      returns: '+20%',
    },
    {
      nickName: 'JohnDoe',
      profileImage: 'john.jpg',
      returns: '+15%',
    },
    {
      nickName: 'AliceSmith',
      profileImage: 'alice.jpg',
      returns: '-8%',
    },
    {
      nickName: 'BobJohnson',
      profileImage: 'bob.jpg',
      returns: '+20%',
    },
    {
      nickName: 'JohnDoe',
      profileImage: 'john.jpg',
      returns: '+15%',
    },
    {
      nickName: 'AliceSmith',
      profileImage: 'alice.jpg',
      returns: '-8%',
    },
    {
      nickName: 'BobJohnson',
      profileImage: 'bob.jpg',
      returns: '+20%',
    },
    {
      nickName: 'JohnDoe',
      profileImage: 'john.jpg',
      returns: '+15%',
    },
    {
      nickName: 'AliceSmith',
      profileImage: 'alice.jpg',
      returns: '-8%',
    },
    {
      nickName: 'BobJohnson',
      profileImage: 'bob.jpg',
      returns: '+20%',
    },
  ];

  return (
    <>
      <Container>
        <Header>
          <HeaderTitle>실시간 랭킹</HeaderTitle>
        </Header>
        <Wrapper>
          {/* {rank.map((item, index) => ( */}
          {curRank.map((item, index) => (
            <RankBox key={index}>
              <RankNumber>{index+1}위</RankNumber>
              <UserImg src='/icon/user_purple.png' />
              <UserNickName>{item.nickName}</UserNickName>
              <UserReturnBox>
                <UserReturnIcon>0.33%</UserReturnIcon>
                <UserReturn $isPositive={item.returns[0]=="+"?true:false}>{item.returns}</UserReturn>
              </UserReturnBox>
            </RankBox>
          ))}
        </Wrapper>
        <span style={{fontSize:"10px"}}>마지막 업데이트 시간 : {updateTime}</span>
      </Container>
    </>
  )
}
export default ContestRankBox