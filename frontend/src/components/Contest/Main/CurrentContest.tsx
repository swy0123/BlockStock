import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './Contest.css'
import { 
  Container,
  CurrentContestTitle,
  CurrentContestBox,
  ContestHeader,
  ContestTitle,
  Contestperiod,
  CurrentContestList,
  CurrentContestLinkBox,
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
  Prev,
  Next
 } from './CurrentContest.style'

 // 날짜 변환
 import dayjs from "dayjs";

function CurrentContest({contest}){

  const navigate = useNavigate();
  const [currentContestList, setCurrentContestList] = useState([]);


  // 현재 대회 ====================================================
  useEffect(()=>{
    console.log(contest,'메인페이지 현재대회')
    setCurrentContestList(contest)
  },[contest])

  // style 잡기 위한 더미 데이터 ====================================

  // const [selectedContest, setSelectedContest] = useState(null);
  // const [showContent, setShowContent] = useState(Array(currentContestList.length).fill(false));
  // const toggleContent = (index) => {
  //   const updatedShowContent = [...showContent];
  //   console.log(updatedShowContent)
  //   updatedShowContent[index] = !updatedShowContent[index];
  //   setShowContent(updatedShowContent);

  //   if (updatedShowContent[index]) {
  //     console.log(currentContestList[index],'-----------------')
  //     setSelectedContest(currentContestList[index]);
  //   } else {
  //     setSelectedContest(null);
  //   }
  //   console.log(selectedContest)
  //   navigate('/contestprogress',{ state: { selectedContest.id } })
  // };

  return(
    <Container>
      <CurrentContestTitle>
        현재 대회 결과
      </CurrentContestTitle>

      
      <CurrentContestBox
      style={{width: currentContestList.length === 0 ? '100%' : '100%'}}
      >
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
              // navigation={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              style={
                {
                  position:'relative',
                  margin:'0px 0px 0px 0px',
                height:'350px',
              }}
            >
              <Prev className="swiper-button-prev"></Prev>
              <Next className="swiper-button-next"></Next>
              {currentContestList.map((contest, index) => (
                <SwiperSlide style={{ margin: '0px', position:'relative',left:'10px' }}>
                  <div key={index}>

                  <ContestHeader>
                    <ContestTitle>
                    {contest.title.length > 15 ? `${contest.title.slice(0, 15)}...` : contest.title}
                    </ContestTitle>
                    <Contestperiod>
                      {dayjs(contest.startAt).format('YYYY/MM/DD HH:mm')} 부터 ~ {dayjs(contest.endAt).format('MM/DD HH:mm')} 까지
                    </Contestperiod>
                  </ContestHeader>

                  <CurrentContestLinkBox>
                    <div onClick={()=>navigate('/currentcontest')}>현재 대회 정보</div>
                    <CurrentContestLink onClick={()=>toggleContent(index)}>현재 현황 조회</CurrentContestLink>
                  </CurrentContestLinkBox>

                  <CurrentContestRankBox>

                  <RankUser>
                  <div className="carousel" style={{margin:'20px 0px 0px 0px'}}>
                    <div className="carousel-content">
                      <div className="carousel-item" style={{width:'150px', height:'190px'}}>
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
                                  {Math.round(contest.ranking[0].returns * 10) / 10}%
                                </ContestReturn>
                              </div>
                          </>
                        ) : (
                          <div>유저가 없습니다.</div>
                        )}
                        </div>
                      <div className="carousel-item" style={{width:'150px', height:'190px'}}>
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
                                  {Math.round(contest.ranking[1].returns * 10) / 10}%
                                </ContestReturn>
                              </div>
                          </>
                        ) : (
                          <div>유저가 없습니다.</div>
                        )}
                            
                      </div>
                        {/*  유저가 없을 시 없다는 표시를 해줘야 오류가 나지 않음 1위 2위 3위 동일하게 작성 */}
                      <div className="carousel-item" style={{width:'150px', height:'190px'}}>
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
                              {Math.round(contest.ranking[2].returns * 10) / 10}%
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
                        <div style={{margin:'5px 0px 5px 10px', display:'flex'}}>
                          <div style={{width:'30px', margin:'10px 0px 5px 10px', color:'#8A8A8A', fontSize:'12px'}}>
                            {participantIndex+4}등
                          </div>
                          <NoRankImage src={
                            // participant.profileImage ||
                            '/icon/user_purple.png'} />
                          <div style={{margin:'10px 15px 0px 0px', fontSize:'12px', fontWeight:'bold'}}>
                            {participant.nickName}
                          </div>
                          <div style={{display:'flex', marginTop:'9px', fontSize: '12px'}}>
                            <div style={{color:'#8A8A8A', marginRight:'5px'}}>
                              수익률
                            </div>
                            <div style={{ color: participant.returns[0] === '-' ? 'blue' : 'red', fontWeight:'bold' }}>
                              {Math.round(participant.returns * 10) / 10}%
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