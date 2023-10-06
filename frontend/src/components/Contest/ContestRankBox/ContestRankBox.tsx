import React from 'react'
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

function ContestRankBox(){


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


  return(
    <>
      <Container>
        <Header>
          <HeaderTitle>실시간 랭킹</HeaderTitle>
        </Header>
        <Wrapper>
          {rank.map((item, index)=>(
            <div key={index}>
              <RankBox>
                <RankNumber>{index}위</RankNumber>
                  <UserImg src='/icon/user_purple.png'/>
                <UserNickName>{item.nickName}</UserNickName>
                <UserReturnBox>
                  {/* <UserReturnIcon>0.33%</UserReturnIcon> */}
                  <UserReturn>{item.return}</UserReturn>
                </UserReturnBox>
              </RankBox>
              <hr style={{margin:'0px 0px 5px 0px'}}/>
            </div>
          ))}
        </Wrapper>

      </Container>
    </>
  )
}
export default ContestRankBox