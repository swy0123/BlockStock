import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
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
} from './RecentContestResults.style'

function RecentContestResults(){
  // const [userRank, setUserRank] = useState([])
  const navigate = useNavigate();

  const rank = [
    {
      nickName: "JohnDoe",
      profileImage: "john.jpg",
      return: "+15%"
    },
    {
      nickName: "AliceSmith",
      profileImage: "alice.jpg",
      return: "-8%"
    },
    {
      nickName: "BobJohnson",
      profileImage: "bob.jpg",
      return: "+20%"
    }
  ]

  return(
    <Container>
      <ContestTitleWrapper>
        <ContestTitle>
          최근 대회 결과
        </ContestTitle>
        <ContestLink onClick={()=>navigate('/completedcontest')}>
          자세히 보기
        </ContestLink>
      </ContestTitleWrapper>

      <Wrappe>
        {rank.map((item, index)=>(
          <div key={index}>
            <RankBox>

              <Rank>
                {index+1} 등
              </Rank>

              <RankImage src='./icon/user_purple.png'/>

              <RankContent>
                <RankNickName>
                {item.nickName}
                </RankNickName>

                <RankReturn>
                  수익률 : 
                  <div style={{ color: item.return[0] === '-' ? 'blue' : 'red'}}>
                    {item.return}
                  </div>
                </RankReturn>
              </RankContent>

            </RankBox>
            <hr style={{width:'370px', color:'#D3D3D3', margin:'20px 0px 28px 0px'}}/>

          </div>
        ))}
      </Wrappe>
    </Container>
  )
}

export default RecentContestResults