import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import {
  Modal,
  Container,
  Header,
  Title,
  CloseBtn,
  TicketImg,
  Explanation1,
  Explanation2,
  Button1,
  Button2,
  Box,
} from './ContestTicketModal.style'

// 대회 참가 api
import {contestParticipant} from '../../../../api/Contest/Participant'


function ContestTicketModal({tacticid ,selectedContest, onClose}){


  
  // 대회 참가 api ==========================================================
  const info = {
    contestId:selectedContest.id,
    taticId:tacticid
  };
  
  const handleClick = () =>{
    console.log('대회 참가', info)
    participant()
  }
  
  const participant = async () => {
    const contest = await contestParticipant(info)
    console.log('참가 완료 모달', contest)
  }
  // 대회 참가 api ==========================================================



  return(
    <Container>
      <Modal>
        <Header>
            <Title>{selectedContest.title} 대회 참가 (2/2)</Title>
          </Header>
          <TicketImg src="/icon/대회티켓.png"/>
          <Explanation1>해당 대회는 {selectedContest.ticket}개의 티켓이 사용됩니다.</Explanation1>
          <Explanation2>정말로 참여하시겠습니까? </Explanation2>
          <Box>
            <Button1 onClick={() => {
              onClose(); 
            }}>취소</Button1>
            <Button2 onClick={handleClick}>확인</Button2>
          </Box>
      </Modal>
    </Container>
  )
}
export default ContestTicketModal