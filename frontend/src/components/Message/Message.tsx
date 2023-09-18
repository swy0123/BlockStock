import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import '../Tooltip/Tooltip.module.css'
import {
  Container,
  Header,
  Title,
  Wrapper,
  UserBox,
  UserImg,
  NickName,
  Content,
  Send,
  Line,
} from './Message.style'

function Message({state,onClose }){

  const handleClose = () => {
    onClose(); // 부모 컴포넌트에 메시지 창 닫기 요청
  }

  return(
    <div className={`slide-in`}>
      <Container>
        <Header>
          <Title>쪽지보내기</Title>
          <div onClick={handleClose}>
          <CloseIcon style={{margin:'8px 0px 0px 470px', color:'#929292'}} />
          </div>
        </Header>
        <Wrapper>
          <UserBox>
            <div style={{color:'#9E9E9E'}}>To</div>
            <UserImg src="/icon/user_purple.png"/>
            <NickName>{state.nickname}</NickName>
          </UserBox>
          <Line/>
          <Content placeholder="내용을 입력하세요"/>
        </Wrapper>
        <Send>보내기</Send>
      </Container>
    </div>
  )
}

export default Message