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
  Notexist,
  Box
} from './ExpectedContest.styled'

 // 날짜 변환
 import dayjs from "dayjs";
// api 통신
// import { expectedContest } from '../../../api/Contest/Main';


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
            <>
            {expectedContestItem.map((item, index) => (
               <div key={index}>
               <Box>
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
                     {dayjs(item.startTime).format('MM/DD HH:mm')} 부터 ~ {dayjs(item.endTime).format('MM/DD HH:mm')} 까지
                   </ContestPeriod>
                 </ContestBox>
   
               </Box>
               <hr style={{ color: '#ebebeb', margin: '0px' , border:'1px solid #ebebeb'}} />
 
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