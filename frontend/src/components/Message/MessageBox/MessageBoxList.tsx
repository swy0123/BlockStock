import React, {useState, useEffect} from 'react'
import {
  Container,
  Header,
  Line,
  Wrapper,
  Box,
  MessageItem,
  MessageItemTitle,
  MessageItemSchedule,
  MessageItemImg,
  MessageItemNickName,
  ItemContentBox
} from './MessageBoxList.style'
// 체크박스
import CheckBox from './checkBox';
// 빈박스
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// 새로고침
import ReplayIcon from '@mui/icons-material/Replay';
// 보관함 아이콘
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// 보관함 아이콘 체크시
import BookmarkIcon from '@mui/icons-material/Bookmark';

function MessageBoxList({name}){
  const [data, setData] = useState([])
  const [receivedeleteList, setReceiveDeletList] = useState([])
  const [senddeleteList, setSendDeletList] = useState([])
  const [keepdeleteList, setKeepDeletList] = useState([])

  const r_data = 	[{ 
		"content": "rrTTTT...",
		"senderId": 12,
		"senderNickname" : "고다헤바보",
		"keep": false,
		"createdAt": "2021-08-09T05:06:07"
	},
	{ 
		"content": "TTTT...",
		"senderId": 12,
		"senderNickname" : "고다헤바보",
		"keep": true,
		"createdAt": "2021-08-09T05:06:07"
	}]
  const s_data = 	[{ 
		"content": "ssTTTT...",
		"senderId": 12,
		"senderNickname" : "고다헤바보",
		"keep": true,
		"createdAt": "2021-08-09T05:06:07"
	},
	{ 
		"content": "TTTT...",
		"senderId": 12,
		"senderNickname" : "고다헤바보",
		"keep": true,
		"createdAt": "2021-08-09T05:06:07"
	}]
  const k_data = 	[{ 
		"content": "kkTTTT...",
		"senderId": 12,
		"senderNickname" : "고다헤바보",
		"keep": true,
		"createdAt": "2021-08-09T05:06:07"
	},
	{ 
		"content": "TTTT...",
		"senderId": 12,
		"senderNickname" : "고다헤바보",
		"keep": true,
		"createdAt": "2021-08-09T05:06:07"
	}]


  useEffect(() => {
    if (name === 'Receive') {
      setData(r_data);
    } else if (name === 'Send') {
      setData(s_data);
    } else if (name === 'Keep') {
      setData(k_data);
    }
  }, [name]); 

  return(
    <>
    <Container>
      <Header>
        <CheckBoxOutlineBlankIcon style={{color:'#929292'}}/>
        <div style={{margin:'0px 0px 0px 87%'}}>
          <ReplayIcon style={{color:'#929292', margin:'0px 15px 0px 0px'}}/>
          <img src="/icon/휴지통.png" style={{width:'24px'}} />
        </div>
      </Header>
      <Line/>
      <Wrapper>
        {data.map((item, index)=>(
          <div key={index}>
            <MessageItem>
              <Box>
                <CheckBoxOutlineBlankIcon style={{color:'#929292'}}/>
                {item.keep ? (
                <BookmarkBorderIcon style={{color:'black', margin:'0px 0px 0px 5px'}}/>
                ) : (
                <BookmarkBorderIcon style={{color:'#929292', margin:'0px 0px 0px 5px'}}/>
                )}
                <ItemContentBox>
                <MessageItemTitle>{item.content}</MessageItemTitle>
                <MessageItemSchedule>{item.createdAt}</MessageItemSchedule>
                </ItemContentBox>

                <MessageItemImg src='/icon/user_purple.png'/>
                <MessageItemNickName>{item.senderNickname}</MessageItemNickName>
              </Box>
            </MessageItem>
            <Line />
          </div>
        ))}
      </Wrapper>

    </Container>
    
    </>
  )
}

export default MessageBoxList