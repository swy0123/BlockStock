import React from "react";
import CloseIcon from '@mui/icons-material/Close';

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
  Term,
  Btn
} from './ContestCancelModal.style'
import Swal from 'sweetalert2';
 // 날짜 변환
 import dayjs from "dayjs";
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
    onClose()
    Swal.fire({
      title: '취소되었습니다.',
      icon:'success',
      timer: 1000, // 2초 후에 자동으로 사라집니다 (밀리초 단위)
      showConfirmButton: false, // 확인 버튼을 표시하지 않음
      showCancelButton: false, // 취소 버튼을 표시하지 않음
    })
  }

  return(
    <Container>
      <Modal>
        <div style={{display:'flex', margin:'0px 0px 0px 38%'}}>
        <Title>참가 예정 대회</Title> 
        <Btn onClick={() => {onClose()}}>
          <CloseIcon style={{fontSize:'20px'}}/>
        </Btn>
        </div>
        <Wrapper>
          <ContestTitle>[경진대회] {selectedContest.title} 경진대회</ContestTitle>
          <Schedule>{dayjs(selectedContest.startTime).format('YYYY/MM/DD HH:mm')} 부터 ~ {dayjs(selectedContest.endTime).format('YYYY/MM/DD HH:mm')} 까지</Schedule>
          <hr style={{color:'#EBEBEB'}}/>
          <Personnel>현재 참가 인원 수 {selectedContest.joinPeople} / {selectedContest.maxCapacity}</Personnel>
          <Term>티켓 수 : {selectedContest.ticket}개</Term>
          <Term>종목 : {selectedContest.optionName} ({selectedContest.optionCode})</Term>
          <Term>주기 : {selectedContest.term}초</Term>

          {/* 줄바꿈 적용 넘어갈 경우 다음 줄로 */}
          <Content style={{ whiteSpace: 'pre-line',wordWrap: 'break-word' }}>
            {selectedContest.content}
          </Content>

        </Wrapper>
        <Box>
            <Button1 onClick={handleCancel}>참가취소</Button1>
          </Box>
      </Modal>
    </Container>
  )
}

export default ContestCancelModal