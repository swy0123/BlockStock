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
} from './ExpectedContest.styled'

// api 통신
// import { expectedContest } from '../../../api/Contest/Main';

function ExpectedContest(){
  const navigate = useNavigate();
  const [expectedContestItem, setExpectedContestItem] = useState([])

  const expectedContestList = [
    {
      id: "1",
      title: "Coding Challenge",
      startAt: "2023-09-15 10:00:00",
      endAt: "2023-09-20 18:00:00",
      content: "A programming competition for developers.",
      ticket: "3",
      term: "7",
      maxCapacity: "100",
      joinPeople: "42",
      isRegisted: true
    },
    {
      id: "2",
      title: "Design Contest",
      startAt: "2023-10-01 09:30:00",
      endAt: "2023-10-10 17:30:00",
      content: "Showcase your design skills and win prizes.",
      ticket: "2",
      term: "14",
      maxCapacity: "50",
      joinPeople: "28",
      isRegisted: false
    },
    {
      id: "2",
      title: "Design Contest",
      startAt: "2023-10-01 09:30:00",
      endAt: "2023-10-10 17:30:00",
      content: "Showcase your design skills and win prizes.",
      ticket: "2",
      term: "14",
      maxCapacity: "50",
      joinPeople: "28",
      isRegisted: false
    },
    {
      id: "2",
      title: "Design Contest",
      startAt: "2023-10-01 09:30:00",
      endAt: "2023-10-10 17:30:00",
      content: "Showcase your design skills and win prizes.",
      ticket: "2",
      term: "14",
      maxCapacity: "50",
      joinPeople: "28",
      isRegisted: false
    },
    {
      id: "3",
      title: "Math Olympiad",
      startAt: "2023-11-05 13:45:00",
      endAt: "2023-11-10 21:15:00",
      content: "Test your math knowledge and compete with others.",
      ticket: "5",
      term: "10",
      maxCapacity: "80",
      joinPeople: "56",
      isRegisted: true
    }
  ]


  // api 통신 ==================================================
  const params = {
    status: 'expected',
    page: 0,
    size: 100,
    keyWord: 'str'
  };
  
  useEffect(()=>{
    expectedcontest()
  },[])

  const expectedcontest = async () => {
    const contest = await expectedContest(params)
    console.log('예정 대회 결과 - 컴포넌트',contest)
    setExpectedContestItem(contest.contestlist)
  }
  // api 통신 ==================================================


  const [showContent, setShowContent] = useState(Array(expectedContestList.length).fill(false));
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

        <Wrappe>
          {expectedContestList.map((item, index)=>(
            <div key={index}>

              <ContestBox onClick={() => toggleContent(index)}>
                <ContestHeader>
                  <Title>
                    [경진대회] {item.title}
                  </Title>

                  {item.isRegisted ? (
                      <>
                        <ConfirmationBtn1>신청완료</ConfirmationBtn1>
                      </>
                    ) : (
                      <>
                        <ConfirmationBtn2>미신청</ConfirmationBtn2>
                      </>
                    )}

                  <ExpandMoreIcon style={{ marginLeft: 'auto', fontSize: '50px', marginRight:'20px'}}/>
                </ContestHeader>
                <ContestPeriod>
                  대회 기간 : {item.startAt} ~ {item.endAt}
                </ContestPeriod>
              </ContestBox>
              
              <hr style={{color:'#D3D3D3', marginBottom:'0px'}}/>

              <ContentBox style={{ display: showContent[index] ? 'block' : 'none' }}>
                <div style={{padding:'10px 0px 0px 37px'}}>
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
                    <div>내용</div>
                    {item.content}
                  </ContestContent>
                </div>
                <hr />

              </ContentBox>
            </div>
          ))}
        </Wrappe>

    </Container>
  )
}

export default ExpectedContest