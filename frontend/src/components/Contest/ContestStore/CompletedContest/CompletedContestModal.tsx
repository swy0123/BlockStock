import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useRecoilValue } from "recoil";
import { useRank } from "../../../../recoil/Contest/CompletedContest";
import './Carousel.css'
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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-46156385-1', 'cssscript.com');
ga('send', 'pageview');

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
                    <div className="carousel">
                        <div className="carousel-content">
                        <div className="carousel-item">
                            <RankImage src={
                                // contest.ranking[0].profileImage ||
                                './icon/user_purple.png'} />
                                <h2 style={{ margin: '5px 0px 0px 70px' , fontSize:'30px'}}>1등</h2>
                                <RankUserNickName>
                                    {rankList[0].nickName}
                                </RankUserNickName>
                                <div style={{textAlign: 'center', display:'flex'}}>
                                <div style={{color:'#8A8A8A', margin:'8px 5px 0px 50px'}}>
                                    수익률 :
                                </div>
                                <ContestReturn style={{ color: rankList[0].return[0] === '-' ? 'blue' : 'red' }}>
                                    {rankList[0].return}
                                </ContestReturn>
                                </div>
                            </div>
                        <div className="carousel-item">
                            <RankImage src={
                                // contest.ranking[1].profileImage ||
                                './icon/user_purple.png'} />
                                <h2 style={{textAlign: 'center', margin: '5px 0px 0px 0px', fontSize:'30px'}}>2등</h2>
                                <RankUserNickName>
                                    {rankList[1].nickName}
                                </RankUserNickName>

                                <div style={{textAlign: 'center', display:'flex'}}>
                                <div style={{color:'#8A8A8A', margin:'8px 5px 0px 50px'}}>
                                    수익률 :
                                </div>
                                <ContestReturn style={{ color: rankList[1].return[0] === '-' ? 'blue' : 'red' }}>
                                    {rankList[1].return}
                                </ContestReturn>
                                </div>
                                
                        </div>
                        <div className="carousel-item">
                            <RankImage src={
                                // contest.ranking[2].profileImage ||
                                './icon/user_purple.png'} />
                                <h2 style={{ margin: '5px 0px 0px 70px', fontSize:'30px' }}>3등</h2>
                                <RankUserNickName>
                                    {rankList[2].nickName}
                                </RankUserNickName>
                                <div style={{textAlign: 'center', display:'flex'}}>
                                <div style={{color:'#8A8A8A', margin:'8px 5px 0px 50px'}}>
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
                        <div style={{margin:'10px 0px 10px 30px', display:'flex'}}>
                          <div style={{width:'50px', margin:'10px 0px 5px 15px', color:'#8A8A8A', fontSize:'20px'}}>
                            {participantIndex+4}등
                          </div>
                          <NoRankImage src={
                            // participant.profileImage ||
                            './icon/user_purple.png'} />
                          <div style={{margin:'10px 15px 0px 0px', fontSize:'18px', fontWeight:'bold', width:'80px'}}>
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
                        <hr style={{width:'350px'}}/>
                      </div>
                    ))}
                  </Participant>

                </Wrapper>
            </Modal>
        </Container>
    )
}

export default CompletedContestModal