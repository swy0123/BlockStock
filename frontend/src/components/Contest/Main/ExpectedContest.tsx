import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
  Notexist
} from './ExpectedContest.styled'

// api 통신
import { expectedContest } from '../../../api/Contest/Main';


function ExpectedContest(){
  const navigate = useNavigate();
  const [expectedContestItem, setExpectedContestItem] = useState([])


  // api 통신 ==================================================
  const params = {
    status: 'expected',
    page: 0,
    size: 100,
    key_word: ''
  };
  
  useEffect(()=>{
    expectedcontest()
  },[])

  const expectedcontest = async () => {
    const contest = await expectedContest(params)
    console.log('예정 대회 결과 - 컴포넌트',contest)
    setExpectedContestItem(contest.contestList)
  }
  // api 통신 ==================================================


  const [showContent, setShowContent] = useState(Array(expectedContestItem.length).fill(false));
  const toggleContent = (index) => {
    const updatedShowContent = [...showContent];
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
          expectedContestItem.map((item, index) => {
            // 대회 기간 날짜 포맷팅 함수
            const formatDateTime = (dateTimeString) => {
              const date = new Date(dateTimeString);
              const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}시${date.getMinutes().toString().padStart(2, '0')}분`;
              return formattedDate;
            };
  
            return (
              <div key={index}>
                <ContestBox onClick={() => toggleContent(index)}>
                  <ContestHeader>
                    <Title>
                      [경진대회] {item.title}
                    </Title>
  
                    {item.isRegisted ? (
                      <ConfirmationBtn1>신청완료</ConfirmationBtn1>
                    ) : (
                      <ConfirmationBtn2>미신청</ConfirmationBtn2>
                    )}
  
                    <ExpandMoreIcon style={{ marginLeft: 'auto', fontSize: '50px', marginRight: '20px' }} />
                  </ContestHeader>
                  <ContestPeriod>
                    대회 기간 : {formatDateTime(item.startTime)} ~ {formatDateTime(item.endTime)}
                  </ContestPeriod>
                </ContestBox>
  
                <hr style={{ color: '#D3D3D3', marginBottom: '0px' }} />
  
                <ContentBox style={{ display: showContent[index] ? 'block' : 'none' }}>
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
                    <ContestContent>
                      {item.content}
                    </ContestContent>
                  </div>
                  <hr />
                </ContentBox>
              </div>
            );
          })
        )}
      </Wrappe>


    </Container>
  )
}

export default ExpectedContest