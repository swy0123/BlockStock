import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './Swiper.css'

import { 
  CurrentContestTitle,
  CurrentContestBox,
  ContestHeader,
  ContestTitle,
  Contestperiod,
  CurrentContestList,
  CurrentContestLink,
  CurrentContestRankBox,
  RankUser,
  Participant,
  RankImage,
  NoRankImage,
  Line,
  RankUserNickName,
  NotCurrentContest,
  NotCurrentContestImage,
  ContestReturn,
 } from './CurrentContest.style'

 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-46156385-1', 'cssscript.com');
  ga('send', 'pageview');
  
function CurrentContest(){

  const navigate = useNavigate();
  // const [title, setTitle] = useState<string>('title')
  // const [period, setPeriod] = useState<string>('2023-09-11 ~ 2023-09-12')
  // const [currentContestList, setCurrentContestList] = useState([]);


  // 더미데이터
  const  contestResultList = [
      {
        id: "1",
        content: "Contest 1 details",
        code: "XYZ123",
        title: "카카오 주식 매매",
        startAsset: "10000",
        term: "Monthly",
        startAt: "2023-01-01 09:00:00",
        endAt: "2023-01-31 18:00:00",
        ranking: [
          {
            nickName: "User1",
            profileImage: "profile1.jpg",
            return: "+5%"
          },
          {
            nickName: "User2",
            profileImage: "profile2.jpg",
            return: "-2%"
          },
          {
            nickName: "User3",
            profileImage: "profile3.jpg",
            return: "+7%"
          },
          {
            nickName: "User4",
            profileImage: "profile1.jpg",
            return: "+5%"
          },
          {
            nickName: "User5",
            profileImage: "profile2.jpg",
            return: "-2%"
          },
          {
            nickName: "User6",
            profileImage: "profile3.jpg",
            return: "+7%"
          },
          {
            nickName: "User4",
            profileImage: "profile1.jpg",
            return: "+5%"
          },
          {
            nickName: "User5",
            profileImage: "profile2.jpg",
            return: "-2%"
          },
          {
            nickName: "User6",
            profileImage: "profile3.jpg",
            return: "+7%"
          },
          {
            nickName: "User4",
            profileImage: "profile1.jpg",
            return: "+5%"
          },
          {
            nickName: "User5",
            profileImage: "profile2.jpg",
            return: "-2%"
          },
          {
            nickName: "User6",
            profileImage: "profile3.jpg",
            return: "+7%"
          },
          {
            nickName: "User4",
            profileImage: "profile1.jpg",
            return: "+5%"
          },
          {
            nickName: "User5",
            profileImage: "profile2.jpg",
            return: "-2%"
          },
          {
            nickName: "User6",
            profileImage: "profile3.jpg",
            return: "+7%"
          },
        ]
      },
      {
        id: "2",
        content: "Contest 2 details",
        code: "ABC456",
        title: "Contest 2 Title",
        startAsset: "15000",
        term: "Weekly",
        startAt: "2023-02-15 10:30:00",
        endAt: "2023-02-22 16:45:00",
        ranking: [
          {
            nickName: "User4",
            profileImage: "profile4.jpg",
            return: "+9%"
          },
          {
            nickName: "User5",
            profileImage: "profile5.jpg",
            return: "-1%"
          },
          {
            nickName: "User6",
            profileImage: "profile6.jpg",
            return: "+3%"
          }
        ]
      }
    ]
  

  return(
    <div>
      <CurrentContestTitle>
        현재 대회 결과
      </CurrentContestTitle>

      
      <CurrentContestBox>
        {contestResultList.length === 0 ? (
          <NotCurrentContest>
            <div style={{marginTop:'30px'}}>
              현재 진행중인 대회가 없습니다.
            </div>
            <NotCurrentContestImage src='/현재_대회-결과_없음_트로피.png'
            style={{margin:'0px 0px 0px 10px'}}
            />
          </NotCurrentContest>
        ) : (
          <CurrentContestList>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {contestResultList.map((contest) => (
                <SwiperSlide>
                  <div key={contest.id}>

                  <ContestHeader>
                    <ContestTitle>{contest.title}</ContestTitle>
                    <Contestperiod>대회 기간 : {contest.startAt} ~ {contest.endAt}</Contestperiod> 
                  </ContestHeader>

                  <CurrentContestLink>
                    <div>현재 대회 정보</div>
                    <div style={{ marginLeft: '20px' }} onClick={()=>navigate('/')}>현재 현황 조회</div>
                  </CurrentContestLink>

                  <CurrentContestRankBox>

                  <RankUser>
                  <div className="carousel">
                    <div className="carousel-content">
                      <div className="carousel-item">
                        <RankImage src={
                            // contest.ranking[0].profileImage ||
                            './icon/user_purple.png'} />
                            <h2 style={{ margin: '5px 0px 0px 70px' , fontSize:'30px'}}>1등</h2>
                            <RankUserNickName>
                                {contest.ranking[0].nickName}
                            </RankUserNickName>
                            <div style={{textAlign: 'center', display:'flex'}}>
                              <div style={{color:'#8A8A8A', margin:'8px 5px 0px 50px'}}>
                                수익률 :
                              </div>
                              <ContestReturn style={{ color: contest.ranking[0].return[0] === '-' ? 'blue' : 'red' }}>
                                {contest.ranking[0].return}
                              </ContestReturn>
                            </div>
                        </div>
                      <div className="carousel-item">
                        <RankImage src={
                            // contest.ranking[1].profileImage ||
                            './icon/user_purple.png'} />
                            <h2 style={{textAlign: 'center', margin: '5px 0px 0px 0px', fontSize:'30px'}}>2등</h2>
                            <RankUserNickName>
                                {contest.ranking[1].nickName}
                            </RankUserNickName>

                            <div style={{textAlign: 'center', display:'flex'}}>
                              <div style={{color:'#8A8A8A', margin:'8px 5px 0px 50px'}}>
                                수익률 :
                              </div>
                              <ContestReturn style={{ color: contest.ranking[1].return[0] === '-' ? 'blue' : 'red' }}>
                                {contest.ranking[1].return}
                              </ContestReturn>
                            </div>
                            
                      </div>
                      <div className="carousel-item">
                        <RankImage src={
                            // contest.ranking[2].profileImage ||
                            './icon/user_purple.png'} />
                            <h2 style={{ margin: '5px 0px 0px 70px', fontSize:'30px' }}>3등</h2>
                            <RankUserNickName>
                                {contest.ranking[2].nickName}
                            </RankUserNickName>
                            <div style={{textAlign: 'center', display:'flex'}}>
                              <div style={{color:'#8A8A8A', margin:'8px 5px 0px 50px'}}>
                                수익률 :
                              </div>
                              <ContestReturn style={{ color: contest.ranking[2].return[0] === '-' ? 'blue' : 'red' }}>
                                {contest.ranking[2].return}
                              </ContestReturn>
                            </div>
                      </div>
                    </div>
                  </div>
                  </RankUser>

                  <Line/>

                  <Participant>
                    {contest.ranking.slice(3).map((participant, participantIndex) => (
                      <div key={participantIndex}>
                        <div style={{margin:'10px 0px 10px 30px', display:'flex'}}>
                          <div style={{width:'60px', margin:'10px 0px 5px 15px', color:'#8A8A8A', fontSize:'20px'}}>
                            {participantIndex+4}등
                          </div>
                          <NoRankImage src={
                            // participant.profileImage ||
                            './icon/user_purple.png'} />
                          <div style={{margin:'10px 15px 0px 0px', fontSize:'18px', fontWeight:'bold'}}>
                            {participant.nickName}
                          </div>
                          <div style={{display:'flex', marginTop:'12px'}}>
                            <div style={{color:'#8A8A8A', marginRight:'10px'}}>
                              수익률 : 
                            </div>
                            <div style={{ color: participant.return[0] === '-' ? 'blue' : 'red', fontWeight:'bold', fontSize: '16px' }}>
                              {participant.return}
                            </div>
                          </div>
                        </div>
                        <hr style={{width:'330px'}}/>
                      </div>
                    ))}
                  </Participant>

                  </CurrentContestRankBox>
                  
                </div>
              </SwiperSlide>
              ))}
            </Swiper>
            </CurrentContestList>)}
      </CurrentContestBox>
          
    </div>
  )
}


export default CurrentContest