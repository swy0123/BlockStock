import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';

import {
  Container,
  ContestTitle,
  ContestTitleWrapper,
  ContestLink,
  Wrappe,
  Title,
  ContestHeader,
  ConfirmationBtn1,
  ConfirmationBtn2,
  ContestPeriod,
  ContestBox,
  ContentBox,
  Participants,
  Ticket,
  Term,
  ContestContent,
  Notexist,
  Box
} from './ExpectedContest.styled'

 // 날짜 변환
 import dayjs from "dayjs";

function ExpectedContest({contest}){
  const navigate = useNavigate();
  const [expectedContestItem, setExpectedContestItem] = useState([])


  // 예정 대회 ==================================================
  useEffect(()=>{
    console.log(contest,'메인페이지 예정대회')
    setExpectedContestItem(contest)
  },[contest])
  // 예정 대회 ==================================================

    
    const [showContent, setShowContent] = useState(Array(expectedContestItem.length).fill(false));

    const toggleContent = (index) => {
      const updatedShowContent = [...showContent];
      console.log(updatedShowContent)
      updatedShowContent[index] = !updatedShowContent[index];
      setShowContent(updatedShowContent);
    };

  return(
    <Container>

      <ContestTitleWrapper>
        <ContestTitle>
          다음 대회 일정
        </ContestTitle>
        <ContestLink onClick={()=>navigate('/expectedcontest')}>
          전체 대회 일정 조회
        </ContestLink>
      </ContestTitleWrapper>
      <Wrappe style={{
        display: expectedContestItem.length === 0 ? 'flex' : undefined,
        alignItems: expectedContestItem.length === 0 ? 'center' : undefined,
        justifyContent: expectedContestItem.length === 0 ? 'center' : undefined,
      }}>
        {expectedContestItem.length === 0 ? (
            <Notexist>대회가 아직 없습니다</Notexist>
          ) : (
            <>
            {expectedContestItem.map((item, index) => (
               <div key={index}>
                <Box>
                  <ContestBox onClick={() => toggleContent(index)}>
                    <ContestHeader>
                      <Title>
                        [경진대회] 
                        {item.title.length > 10 ? `${item.title.slice(0, 10)}...` : item.title}
                      </Title>
    
                      {item.isRegisted ? (
                        <ConfirmationBtn1>신청완료</ConfirmationBtn1>
                      ) : (
                        <ConfirmationBtn2>미신청</ConfirmationBtn2>
                      )}
    
                      {/* <ExpandMoreIcon style={{ marginLeft: 'auto', fontSize: '50px', marginRight: '20px' }} /> */}
                      {showContent[index] ? (
                          <KeyboardControlKeyIcon style={{ 
                            fontSize: '50px',
                            margin: '10px 0px 0px 35%', 
                          }} />
                        ) : (
                          <ExpandMoreIcon style={{ 
                          fontSize: '50px',
                          margin: '0px 0px 0px 35%',
                         }} />
                        )}
                    </ContestHeader>
                    <ContestPeriod>
                      {dayjs(item.startTime).format('YYYY/MM/DD HH:mm')} 부터 ~ {dayjs(item.endTime).format('YYYY/MM/DD HH:mm')} 까지
                    </ContestPeriod>
                  </ContestBox>
    
                </Box>
                <hr style={{ color: '#ebebeb', margin: '0px' , border:'1px solid #ebebeb'}} />
 
                <ContentBox 
                  style={{
                    transition: 'max-height 1s ease, transform 1s ease', // 트랜지션 적용
                    overflow: 'hidden', // 내용이 보이지 않도록 숨김
                    maxHeight: showContent[index] ? '1200px' : '0', // 최대 높이 설정
                  }}
                >
                  <div style={{ padding: '10px 0px 0px 37px' }}>
                    <Participants>
                      현재 참가 인원 수 : {item.joinPeople} / {item.maxCapacity}
                    </Participants>
                    <Ticket>
                      필요 티켓 개수 : {item.ticket} 개
                    </Ticket>
                    <Term>
                      전략 실행 주기 : {item.term}
                    </Term>
                    {/* 줄바꿈 적용 넘어갈 경우 다음 줄로 */}
                    <ContestContent style={{ whiteSpace: 'pre-line',wordWrap: 'break-word' }}>
                      {item.content}
                    </ContestContent>
                  </div>
                  <hr />
                </ContentBox>
             </div>
            ))}
            </>
        )}
      </Wrappe>


    </Container>
  )
}

export default ExpectedContest