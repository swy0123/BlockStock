import React, {useState} from 'react'

import {
  Container,
  ContestTitle,
  ContestTitleWrapper,
  ContestLink,
  Wrappe,
  Title,
  ContestHeader,
  ConfirmationBtn,
  ContestPeriod,
  ContestBox,
  ContentBox,
  Participants,
  Ticket,
  Term,
  ContestContent,
} from './ExpectedContest.styled'

function ExpectedContest(){
  // const [expectedContestList, setExpectedContestList] = useState([])

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
      isRegisted: "true"
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
      isRegisted: "false"
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
      isRegisted: "true"
    }
  ]

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
        <ContestLink>
          전체 대회 일정 조회
        </ContestLink>
      </ContestTitleWrapper>

        <Wrappe>
          {expectedContestList.map((item, index)=>(
            <div key={index}>

              <ContestBox onClick={() => toggleContent(index)}>
                <ContestHeader>
                  <Title>
                    {item.title}
                  </Title>
                  <ConfirmationBtn>
                    미신청
                  </ConfirmationBtn>
                  <ConfirmationBtn>
                    신청완료
                  </ConfirmationBtn>
                </ContestHeader>
                <ContestPeriod>
                  {item.startAt} ~ {item.endAt}
                </ContestPeriod>
              </ContestBox>

              <ContentBox style={{ display: showContent[index] ? 'block' : 'none' }}>

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

              </ContentBox>
              <hr />
            </div>
          ))}
        </Wrappe>

    </Container>
  )
}

export default ExpectedContest