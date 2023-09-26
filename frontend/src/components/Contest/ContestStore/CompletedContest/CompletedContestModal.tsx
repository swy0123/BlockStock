import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useRecoilValue } from "recoil";
import { useRank } from "../../../../recoil/Contest/CompletedContest";
import style from './Carousel.module.css'
import {
    Container,
    Modal,
    Header,
    CloseBtn,
    Title,
    Schedule,
    Personnel,
    Wrapper,
    RankUser,
    RankImage,
    RankUserNickName,
    ContestReturn,
    Line,
    Participant,
    NoRankImage,
} from './CompletedContestModal.style'

function CompletedContestModal({onClose, selectedContest}){
    const rankList = useRecoilValue(useRank);

    return(
        <Container>
            <Modal>
                <Header>
                    <Title>[경진대회] {selectedContest.title}</Title>
                    <CloseBtn onClick={onClose}><CloseIcon/></CloseBtn>
                </Header>
                <Schedule>대회 기간: {selectedContest.startAt} ~ {selectedContest.endAt}</Schedule>
                <Personnel>참가 인원 수 {selectedContest.joinPeople} / {selectedContest.maxCapacity} </Personnel>

                <Wrapper>
                    <RankUser>
                    <div className={style.carousel}>
                        <div className={style.carousel_content}>
                        <div className="carousel-item" style={{width: '170px', height: '220px'}}>
                            <RankImage src={
                                // contest.ranking[0].profileImage ||
                                '/icon/user_purple.png'} />
                                <h2 style={{textAlign: 'center', margin: '5px 0px 0px 0px' , fontSize:'22px'}}>1등</h2>
                                <RankUserNickName>
                                    {rankList[0].nickName}
                                </RankUserNickName>
                                <div style={{textAlign: 'center', display:'flex'}}>
                                  <div style={{color:'#8A8A8A', margin:'8px 5px 0px 50px', fontSize:'12px'}}>
                                      수익률 :
                                  </div>
                                <ContestReturn style={{ color: rankList[0].return[0] === '-' ? 'blue' : 'red' }}>
                                    {rankList[0].return}
                                </ContestReturn>
                                </div>
                            </div>
                        <div className="carousel-item" style={{width: '170px', height: '220px'}}>
                            <RankImage src={
                                // contest.ranking[1].profileImage ||
                                '/icon/user_purple.png'} />
                                <h2 style={{textAlign: 'center', margin: '5px 0px 0px 0px', fontSize:'22px'}}>2등</h2>
                                <RankUserNickName>
                                    {rankList[1].nickName}
                                </RankUserNickName>

                                <div style={{textAlign: 'center', display:'flex'}}>
                                  <div style={{color:'#8A8A8A', margin:'8px 5px 0px 50px', fontSize:'12px'}}>
                                      수익률 :
                                  </div>
                                  <ContestReturn style={{ color: rankList[1].return[0] === '-' ? 'blue' : 'red' }}>
                                      {rankList[1].return}
                                  </ContestReturn>
                                </div>
                                
                        </div>
                        <div className="carousel-item" style={{width: '170px', height: '220px'}}>
                            <RankImage src={
                                // contest.ranking[2].profileImage ||
                                '/icon/user_purple.png'} />
                                <h2 style={{textAlign: 'center', margin: '5px 0px 0px 0px', fontSize:'22px' }}>3등</h2>
                                <RankUserNickName>
                                    {rankList[2].nickName}
                                </RankUserNickName>
                                <div style={{textAlign: 'center', display:'flex'}}>
                                <div style={{color:'#8A8A8A', margin:'8px 5px 0px 50px', fontSize:'12px'}}>
                                    수익률 :
                                </div>
                                <ContestReturn style={{ color: rankList[2].return[0] === '-' ? 'blue' : 'red' }}>
                                    {rankList[2].return}
                                </ContestReturn>
                                </div>
                        </div>
                        </div>
                    </div>
                    </RankUser>

                    <Line/>

                  <Participant>
                    {rankList.slice(3).map((participant, participantIndex) => (
                      <div key={participantIndex}>
                        <div style={{margin:'0px 0px 0px 10px', display:'flex'}}>
                          <div style={{width:'40px', margin:'10px 0px 5px 15px', color:'#8A8A8A', fontSize:'15px'}}>
                            {participantIndex+4}등
                          </div>
                          <NoRankImage src={
                            // participant.profileImage ||
                            '/icon/user_purple.png'} />
                          <div style={{margin:'10px 15px 0px 0px', fontSize:'12px', fontWeight:'bold', width:'50px'}}>
                            {participant.nickName}
                          </div>
                          <div style={{display:'flex', marginTop:'12px', fontSize:'10px'}}>
                            <div style={{color:'#8A8A8A', marginRight:'10px'}}>
                              수익률 : 
                            </div>
                            <div style={{ color: participant.return[0] === '-' ? 'blue' : 'red', fontWeight:'bold', fontSize: '12px' }}>
                              {participant.return}
                            </div>
                          </div>
                        </div>
                        <hr style={{width:'270px'}}/>
                      </div>
                    ))}
                  </Participant>

                </Wrapper>
            </Modal>
        </Container>
    )
}

export default CompletedContestModal