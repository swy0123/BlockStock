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
  KeepTitle
} from './MessageBoxBtn.style'

// 받은 쪽지 아이콘
import MailOutlineIcon from '@mui/icons-material/MailOutline';// 보낸 쪽지 아이콘
import SendIcon from '@mui/icons-material/Send';
// 보관함 아이콘
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
function MessageBoxBtn({onButtonClick}){
  const [btn, setBtn] = useState('Receive');

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
           onClick={() => handleButtonClick('Receive')}
           style={{ 
            color: btn === 'Receive' ? '#9155FD' : 'initial'
           }}
          >
            <ReceiveBox
              style={{ 
              backgroundColor: btn === 'Receive' ? '#9155FD' : 'initial'
              }}
            />
            <MailOutlineIcon style={{fontSize:'30px'}}/>
            <ReceiveTitle>받은 쪽지</ReceiveTitle>
          </ReceiveStyleBox>
          {/* 보낸 쪽지 */}
          <SendStyleBox
          onClick={() => handleButtonClick('Send')}
          style={{ 
            color: btn === 'Send' ? '#9155FD' : 'initial'
           }}
          >
            <SendBox
              style={{ 
                backgroundColor: btn === 'Send' ? '#9155FD' : 'initial'
                }}
            />
            <SendIcon style={{fontSize:'26px', margin:'2px 0px 0px 0px'}}/>
            <SendTitle>보낸 쪽지</SendTitle>
          </SendStyleBox>
          {/* 쪽지 보관함 */}
          <KeepStyleBox
          onClick={() => handleButtonClick('Keep')}
          style={{ 
            color: btn === 'Keep' ? '#9155FD' : 'initial'
           }}
          >
            <KeepBox
              style={{ 
                backgroundColor: btn === 'Keep' ? '#9155FD' : 'initial'
                }}
            />
            <BookmarkBorderIcon style={{fontSize:'32px'}}/>
            <KeepTitle>쪽지 보관함</KeepTitle>
          </KeepStyleBox>
        </Wrapper>
      </Container>
    </>
  )
}

export default MessageBoxBtn