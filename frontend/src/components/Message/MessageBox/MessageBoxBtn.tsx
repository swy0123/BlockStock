import React, {useState} from 'react'
import {
  Container,
  Wrapper,
  ReceiveStyleBox,
  ReceiveBox,
  ReceiveTitle,
  SendStyleBox,
  SendBox,
  SendTitle,
  KeepStyleBox,
  KeepBox,
  KeepTitle,
  BackBtn
} from './MessageBoxBtn.style'
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// 받은 쪽지 아이콘
import MailOutlineIcon from '@mui/icons-material/MailOutline';// 보낸 쪽지 아이콘
import SendIcon from '@mui/icons-material/Send';
// 보관함 아이콘
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
function MessageBoxBtn({onButtonClick}){
  const navigate = useNavigate();
  const [btn, setBtn] = useState('receive');

  const handleButtonClick = (buttonType) => {
    setBtn(buttonType); 
    onButtonClick(buttonType);
  };
  return(
    <>
      <Container>
        <Wrapper>

          {/* 받은 쪽지 */}
          <ReceiveStyleBox
           onClick={() => handleButtonClick('receive')}
           style={{ 
            color: btn === 'receive' ? '#9155FD' : 'initial'
           }}
          >
            <ReceiveBox
              style={{ 
              backgroundColor: btn === 'receive' ? '#9155FD' : 'initial'
              }}
            />
            <MailOutlineIcon style={{fontSize:'26px'}}/>
            <ReceiveTitle>받은 쪽지</ReceiveTitle>
          </ReceiveStyleBox>

          {/* 보낸 쪽지 */}
          <SendStyleBox
          onClick={() => handleButtonClick('send')}
          style={{ 
            color: btn === 'send' ? '#9155FD' : 'initial'
           }}
          >
            <SendBox
              style={{ 
                backgroundColor: btn === 'send' ? '#9155FD' : 'initial'
                }}
            />
            <SendIcon style={{fontSize:'22px', margin:'2px 0px 0px 0px'}}/>
            <SendTitle>보낸 쪽지</SendTitle>
          </SendStyleBox>
          
          {/* 쪽지 보관함 */}
          <KeepStyleBox
          onClick={() => handleButtonClick('keep')}
          style={{ 
            color: btn === 'keep' ? '#9155FD' : 'initial'
           }}
          >
            <KeepBox
              style={{ 
                backgroundColor: btn === 'keep' ? '#9155FD' : 'initial'
                }}
            />
            <BookmarkBorderIcon style={{fontSize:'28px'}}/>
            <KeepTitle>쪽지 보관함</KeepTitle>
          </KeepStyleBox>
        </Wrapper>
        <BackBtn onClick={()=>navigate(-1)}>
          <ArrowBackIcon/>
        </BackBtn>
      </Container>
    </>
  )
}

export default MessageBoxBtn