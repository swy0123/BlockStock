import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './Swiper.css'

import { 
  Container,
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

 // api 통신 
 import {currentContest} from '../../../api/Contest/Main'

function CurrentContest(){

  const navigate = useNavigate();
  // const [title, setTitle] = useState<string>('title')
  // const [period, setPeriod] = useState<string>('2023-09-11 ~ 2023-09-12')
  const [currentContestList, setCurrentContestList] = useState([]);


  // api 통신 ====================================================
  useEffect(()=>{
    currentcontestApi()
  },[])
    const currentcontestApi = async () => {
    const contest = await currentContest()
    console.log('현재 대회 결과 - 컴포넌트',contest)
    if (contest === undefined){
      setCurrentContestList([])
    } else {
      setCurrentContestList(contest)

    }

  }
  // api 통신 ====================================================

  

  return(
    <Container>
      <CurrentContestTitle>
        현재 대회 결과
      </CurrentContestTitle>

      
      <CurrentContestBox>
        {currentContestList.length === 0 ? (
          <NotCurrentContest>
            <div style={{marginTop:'30px'}}>
              현재 진행중인 대회가 없습니다.
            </div>
            <NotCurrentContestImage src='/현재_대회-결과_없음_트로피.png'
            style={{margin:'25px 0px 0px 10px'}}
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
              {currentContestList.map((contest) => (
                <SwiperSlide style={{margin:'0px 0px 0px 40px'}}>
                  <div key={contest.id}>

                  <ContestHeader>
                    {/* <ContestTitle>{contest.title}</ContestTitle> */}
                    <Contestperiod>대회 기간 : {contest.startAt} ~ {contest.endAt}</Contestperiod> 
                  </ContestHeader>

                  <CurrentContestLink>
                    <div>현재 대회 정보</div>
                    <div style={{ marginLeft: '20px' }} onClick={()=>navigate('/')}>현재 현황 조회</div>
                  </CurrentContestLink>

                  <CurrentContestRankBox>

                  <RankUser>
                  <div className="carousel" style={{margin:'20px 0px 0px 0px'}}>
                    <div className="carousel-content">
                      <div className="carousel-item" style={{width:'140px', height:'170px'}}>
                        {contest.ranking[0] ? (
                          <>
                          <RankImage src={
                              // contest.ranking[0].profileImage ||
                              '/icon/user_purple.png'} />
                              <h2 style={{textAlign: 'center', margin: '5px 0px 0px 0px', fontSize:'18px'}}>1등</h2>
                              <RankUserNickName>
                                  {contest.ranking[0].nickName}
                              </RankUserNickName>
                              <div style={{textAlign: 'center', display:'flex',  fontSize:'12px'}}>
                                <div style={{color:'#8A8A8A', margin:'8px 5px 0px 30px'}}>
                                  수익률 :
                                </div>
                                <ContestReturn style={{ color: contest.ranking[0].returns[0] === '-' ? 'blue' : 'red' }}>
                                  {contest.ranking[0].returns}
                                </ContestReturn>
                              </div>
                          </>
                        ) : (
                          <div>유저가 없습니다.</div>
                        )}
                        </div>
                      <div className="carousel-item" style={{width:'140px', height:'170px'}}>
                        {contest.ranking[1] ? (
                          <>
                          <RankImage src={
                              // contest.ranking[1].profileImage ||
                              '/icon/user_purple.png'} />
                              <h2 style={{textAlign: 'center', margin: '5px 0px 0px 0px', fontSize:'18px'}}>2등</h2>
                              <RankUserNickName>
                                  {contest.ranking[1].nickName}
                              </RankUserNickName>

                              <div style={{textAlign: 'center', display:'flex',  fontSize:'12px'}}>
                                <div style={{color:'#8A8A8A', margin:'8px 5px 0px 30px'}}>
                                  수익률 :
                                </div>
                                <ContestReturn style={{ color: contest.ranking[1].returns[0] === '-' ? 'blue' : 'red' }}>
                                  {contest.ranking[1].returns}
                                </ContestReturn>
                              </div>
                          </>
                        ) : (
                          <div>유저가 없습니다.</div>
                        )}
                            
                      </div>
                        {/*  유저가 없을 시 없다는 표시를 해줘야 오류가 나지 않음 1위 2위 3위 동일하게 작성 */}
                      <div className="carousel-item" style={{width:'140px', height:'170px'}}>
                      {contest.ranking[2] ? (
                        <>
                          <RankImage src={
                            // contest.ranking[2].profileImage || 
                            '/icon/user_purple.png'} />
                          <h2 style={{ textAlign: 'center', margin: '5px 0px 0px 0px', fontSize: '18px' }}>3등</h2>
                          <RankUserNickName>
                            {contest.ranking[2].nickName}
                          </RankUserNickName>
                          <div style={{ textAlign: 'center', display: 'flex', fontSize: '12px' }}>
                            <div style={{ color: '#8A8A8A', margin: '8px 5px 0px 30px' }}>
                              수익률 :
                            </div>
                            <ContestReturn style={{ color: contest.ranking[2].returns[0] === '-' ? 'blue' : 'red' }}>
                              {contest.ranking[2].returns}
                            </ContestReturn>
                          </div>
                        </>
                      ) : (
                        <div>유저가 없습니다</div>
                      )}

                        </div>
                    </div>
                  </div>
                  </RankUser>

                  <Line/>

                  <Participant>
                    {contest.ranking.slice(3).map((participant, participantIndex) => (
                      <div key={participantIndex}>
                        <div style={{margin:'10px 0px 10px 10px', display:'flex'}}>
                          <div style={{width:'30px', margin:'10px 0px 5px 10px', color:'#8A8A8A', fontSize:'14px'}}>
                            {participantIndex+4}등
                          </div>
                          <NoRankImage src={
                            // participant.profileImage ||
                            '/icon/user_purple.png'} />
                          <div style={{margin:'10px 15px 0px 0px', fontSize:'14px', fontWeight:'bold'}}>
                            {participant.nickName}
                          </div>
                          <div style={{display:'flex', marginTop:'9px'}}>
                            <div style={{color:'#8A8A8A', marginRight:'5px'}}>
                              수익률
                            </div>
                            <div style={{ color: participant.returns[0] === '-' ? 'blue' : 'red', fontWeight:'bold', fontSize: '16px' }}>
                              {participant.returns}
                            </div>
                          </div>
                        </div>
                        <hr style={{width:'280px', margin:'0px'}}/>
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
          
    </Container>
  )
}


export default CurrentContest