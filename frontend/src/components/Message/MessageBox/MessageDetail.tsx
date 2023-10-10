import React, {useState, useEffect} from 'react'
import {
  Container,
  Header,
  HeaderTitle,
  Line,
  HeaderBox,
  Wrapper,
  Box,
  TitleBox,
  UseBox,
  UseImg,
  UseNickName,
  Schedule,
  BoxLine,
  ContentBox,
  Content,
  KeepBox,
} from './MessageDetail.style'

// 보관함 아이콘
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

// back icon
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// 쪽지 api
import {messageKeep, messageDelete} from '../../../api/Message/Message'

function MessageDetail({onButtonClick, name, data}){

  const [check, setCheck] = useState(false)
  
  useEffect(()=>{
    console.log('쪽지 디테일')
    console.log(data)
    console.log(name)
    console.log('쪽지 디테일')
    setCheck(data.marked)
  },[data])
    // 쪽지 보관 api
    const messageKeepApi = async()=>{
      const message = await messageKeep(data.id)
      console.log(message)
      if(message===200){
        setCheck(!check)
      }
    }
    
  // 쪽지 삭제 api
  const handleDetail = async()=>{
    console.log(data.id)
    const res = await messageDelete([{id:data.id}])
    console.log(res)
    if (res===200){
      console.log('목록으로 가기')
      onButtonClick('')
    }
  }

  return(
    <>
      <Container>
        <Header>
          <HeaderBox onClick={() => onButtonClick('')}>
            <ArrowBackIosNewIcon style={{color:'#ABABAB'}}/>
            <HeaderTitle> 목록으로</HeaderTitle>
          </HeaderBox>
        </Header>
        <Line/>

        <Wrapper>
          <Box>
            <TitleBox>
              <UseBox>
                {name === 'send' ? (
                  <>
                  <div style={{margin:'10px 0px 0px 10px'}}>
                    받는 사람 :
                  </div>
                    <UseImg src={`https://j9b210.p.ssafy.io:8443/api/member/profile/${data.receiverId}`}/>
                    <UseNickName>{data.receiverNickname}</UseNickName>
                  </>
                  ) : (
                    <>
                    <div style={{margin:'10px 0px 0px 10px'}}>
                      보낸 사람 :
                    </div>
                      <UseImg src={`https://j9b210.p.ssafy.io:8443/api/member/profile/${data.senderId}`}/>
                      <UseNickName>{data.senderNickname}</UseNickName>
                    </>
                  )}
              </UseBox>
              <Schedule>
                {(() => {
                  // data.createdAt를 Date 객체로 변환
                  const date = new Date(data.createdAt);
                  // 날짜와 시간을 원하는 형식으로 포맷
                  const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
                  return formattedDate;
                })()}
              </Schedule>
              <div onClick={messageKeepApi}>
                {check ? (
                  <BookmarkIcon 
                    style={{ margin: '8px 0px 0px 10px', fontSize: '30px', color: '#FFC700' }}
                  />
                ) : (
                  <BookmarkBorderIcon style={{ margin: '8px 0px 0px 10px', fontSize: '30px', color: '#929292' }} />
                )}
              </div>
              
              <img src="/icon/휴지통.png" style={{ width: '28px', height: '30px', margin: '8px 0px 0px 10px' }} onClick={handleDetail}/>
            </TitleBox>
            <BoxLine/>
            <ContentBox>
              <Content style={{ whiteSpace: 'pre-line',wordWrap: 'break-word' }}>
                {data.content}
              </Content>
              {name==='keep' && (
                <>
                <KeepBox>
                  <div style={{margin:'10px 0px 0px 10px', maxWidth:'80px'}}>
                    받는 사람 :
                  </div>
                    <UseImg src={`https://j9b210.p.ssafy.io:8443/api/member/profile/${data.receiverId}`}/>
                    <UseNickName>{data.receiverNickname}</UseNickName>
                </KeepBox>
                </>
              )}
            </ContentBox>
          </Box>
        </Wrapper>
      </Container>
    </>
  )
}

export default MessageDetail