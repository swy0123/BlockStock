import React, {useState} from "react";
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

import SendIcon from '@mui/icons-material/Send';

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from "@mui/material/Alert";


function Message({state,onClose }){

  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = snackbarState;

  const handleClick = (newState) => () => {
    setSnackbarState({ ...newState, open: true });
  };

  const handleClose = () => {
    setSnackbarState({ ...snackbarState, open: false });
  };
  
  // const handleClose = () => {
  //   onClose(); // 부모 컴포넌트에 메시지 창 닫기 요청
  // }

  return(
    <div className={`slide-in`}>
      <Container>
        <Header>
          <Title>쪽지보내기</Title>
          <div onClick={onClose}>
          {/* <div onClick={handleClose}> */}
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
        <Button
          onClick={handleClick({ vertical: "bottom", horizontal: "left" })}
          style={{width:'100%', margin:'0px 0px 0px 0px'}}
        >
          <Send>
            <div>
            보내기
            </div>
            <SendIcon style={{width:'13px', margin:'0px 0px 0px 3px'}}/>
            </Send>
        </Button>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            severity="success"
            onClose={handleClose}
            style={{backgroundColor:'#9155FD'}}
          >
            쪽지를 보냈습니다.
          </MuiAlert>
        </Snackbar>
      </Container>
    </div>
  )
}

export default Message