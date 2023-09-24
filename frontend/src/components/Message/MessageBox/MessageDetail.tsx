import React from 'react'
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
} from './MessageDetail.style'

import { useNavigate } from "react-router-dom";


// 보관함 아이콘
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// back icon
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function MessageDetail({onButtonClick}){

  const navigate = useNavigate();

  const data = 	{ 
		"content": "rrTTTT...",
		"senderId": 1,
		"senderNickname" : "고다헤바보",
		"keep": false,
		"createdAt": "2021-08-09T05:06:07"
	}

  // const handleButtonClick = (buttonType) => {
  //   onButtonClick(buttonType);
  // };
  
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
                <UseImg src='/icon/user_purple.png'/>
                <UseNickName>{data.senderNickname}</UseNickName>
              </UseBox>
              <Schedule>{data.createdAt}</Schedule>
              <BookmarkBorderIcon style={{margin:'8px 0px 0px 10px', fontSize:'30px', color:'#A3A3A3'}}/>
              <img src="/icon/휴지통.png" style={{width:'28px', height:'30px', margin:'8px 0px 0px 10px'}} />
            </TitleBox>
            <BoxLine/>
            <ContentBox>
              <Content>
                {data.content}
              </Content>

            </ContentBox>
          </Box>
        </Wrapper>
      </Container>
    </>
  )
}

export default MessageDetail