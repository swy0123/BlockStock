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
 } from './CurrentContest.style'

 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46156385-1', 'cssscript.com');
  ga('send', 'pageview');
  
function CurrentContest(){

  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('title')
  const [period, setPeriod] = useState<string>('2023-09-11 ~ 2023-09-12')
  // const [currentContestList, setCurrentContestList] = useState([]);


  // 더미데이터
  const  contestResultList = [
      {
        id: "1",
        content: "Contest 1 details",
        code: "XYZ123",
        title: "Contest 1 Title",
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
                <Contestperiod>대회 기간: {contest.startAt} ~ {contest.endAt}</Contestperiod> 
              </ContestHeader>

              <CurrentContestLink>
                <div onClick={()=>navigate('/')}>현재 대회 정보</div>
                <div onClick={()=>navigate('/')}>현재 현황 조회</div>
              </CurrentContestLink>

              <CurrentContestRankBox>

              <RankUser>
              <div className="carousel">
                <div className="carousel-content">
                  <div className="carousel-item">
                    <RankImage src={
                        // contest.ranking[0].profileImage ||
                        'https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/holapet/20210525081724428qquq.jpg'} />
                        <h1>1등</h1>
                      {contest.ranking[0].nickName}
                      <span>수익률: {contest.ranking[0].return}</span>
                    </div>
                  <div className="carousel-item">
                    <RankImage src={
                        // contest.ranking[1].profileImage ||
                        'https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/holapet/20210525081724428qquq.jpg'} />
                        <h1>2등</h1>
                      {contest.ranking[1].nickName}
                      <span>수익률: {contest.ranking[1].return}</span>
                  </div>
                  <div className="carousel-item">
                    <RankImage src={
                        // contest.ranking[2].profileImage ||
                        'https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/holapet/20210525081724428qquq.jpg'} />
                        <h1>3등</h1>
                      {contest.ranking[2].nickName}
                      <span>수익률: {contest.ranking[2].return}</span>
                  </div>
                </div>
              </div>
              </RankUser>

              <Line/>

              <Participant>
                {contest.ranking.slice(3).map((participant, participantIndex) => (
                  <div key={participantIndex}>
                    {participantIndex+4}등
                    <NoRankImage src={
                      // participant.profileImage ||
                       'https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/holapet/20210525081724428qquq.jpg'} />
                    {participant.nickName}
                    <span>수익률: {participant.return}</span>
                  </div>
                ))}
              </Participant>

              </CurrentContestRankBox>
              
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
        </CurrentContestList>

      </CurrentContestBox>
    </div>
  )
};


export default CurrentContest