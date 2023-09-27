import React from "react";
import {
  Modal,
  Container,
  Box,
  Button1,
  Button2,
  Title,
  Wrapper,
  ContestTitle,
  Schedule,
  Content,
  Personnel,
} from './ContestCancelModal.style'

import {contestCancel} from '../../../../api/Contest/Participant'

import { useRecoilState  } from "recoil";
// // contestid 리코일
import { ContestId } from '../../../../recoil/Contest/ExpectedContest'

function ContestCancelModal( {selectedContest, onClose}){


  // 리코일 대회 id 전략 id
  const [contestId, setContestId] = useRecoilState(ContestId);
  
  const handleCancel = () =>{
    console.log('대회 번호', selectedContest.id)
    cancel()
  }

  const cancel = async () => {
        const contest = await contestCancel(contestId.contestId)
        console.log(contest)
      }

  return(
    <Container>
      <Modal>
        <Title>참가 예정 대회</Title>
        <Wrapper>
          <ContestTitle>[경진대회] {selectedContest.title} 경진대회</ContestTitle>
          <Schedule>대회기간 {selectedContest.startAt} ~ {selectedContest.endAt}</Schedule>
          <hr style={{color:'#EBEBEB'}}/>
          <Personnel>현재 참가 인원 수 {selectedContest.joinPeople} / {selectedContest.maxCapacity}</Personnel>
          <Content>
            {selectedContest.content}
          </Content>

        </Wrapper>
        <Box>
            <Button1 onClick={handleCancel}>참가취소</Button1>
            <Button2 onClick={() => {onClose()}}>목록으로</Button2>
          </Box>
      </Modal>
    </Container>
  )
}

export default ContestCancelModal