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


function MessageBoxList({name, onButtonClick}){
  const [data, setData] = useState([])
  const [checkAll, setCheckAll] = useState(false);
  const [checkItems, setCheckItems] = useState([]);

  const r_data = 	[{ 
		"content": "rrTTTT...",
		"senderId": 1,
		"senderNickname" : "고다헤바보",
		"keep": false,
		"createdAt": "2021-08-09T05:06:07"
	},
	{ 
		"content": "TTTT...",
		"senderId": 2,
		"senderNickname" : "고다헤바보",
		"keep": false,
		"createdAt": "2021-08-09T05:06:07"
	}]
  const s_data = 	[{ 
		"content": "ssTTTT...",
		"senderId": 1,
		"senderNickname" : "고다헤바보",
		"keep": false,
		"createdAt": "2021-08-09T05:06:07"
	},
	{ 
		"content": "TTTT...",
		"senderId": 2,
		"senderNickname" : "고다헤바보",
		"keep": false,
		"createdAt": "2021-08-09T05:06:07"
	}]
  const k_data = 	[{ 
		"content": "kkTTTT...",
		"senderId": 1,
		"senderNickname" : "고다헤바보",
		"keep": false,
		"createdAt": "2021-08-09T05:06:07"
	},
	{ 
		"content": "TTTT...",
		"senderId": 2,
		"senderNickname" : "고다헤바보",
		"keep": false,
		"createdAt": "2021-08-09T05:06:07"
	}]


  useEffect(() => {
    if (name === 'RECEIVE') {
      setData(r_data);
      setCheckAll(false)
      setCheckItems([])
    } else if (name === 'SEND') {
      setData(s_data);
      setCheckAll(false)
      setCheckItems([])
    } else if (name === 'KEEP') {
      setData(k_data);
      setCheckAll(false)
      setCheckItems([])
    }
  }, [name]); 


  useEffect(()=>{

    // checkItems 업데이트 이후에 checkAll을 업데이트
    if (data.length !== checkItems.length) {
      setCheckAll(false);
    } else {
      setCheckAll(true);
    }
  },[checkItems])

  const handleCheck = () => {
    setCheckAll(!checkAll);
    if (!checkAll) {
      // 모든 아이템 선택
      setCheckItems(data.map(item => item.senderId));
    } else {
      // 모든 아이템 선택 해제
      setCheckItems([]);
    }
    console.log(checkItems)
  };


  const handleItemCheck = (itemId) => {
    // 아이템 개별 선택 또는 해제
    if (checkItems.includes(itemId)) {
      setCheckItems(checkItems.filter(id => id !== itemId));
    } else {
      setCheckItems([...checkItems, itemId]);
    }
  
  };
  

  const toggleBookmark = (itemId) => {
    // 아이템의 keep 상태 토글
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.senderId === itemId) {
          return {
            ...item,
            keep: !item.keep,
          };
        }
        return item;
      });
    });
  };

  const handleButtonClick = (buttonType) => {
    onButtonClick(buttonType);
  };

  return(
    <>
    <Container>
      <Header>
        <div onClick={handleCheck} style={{ cursor: 'pointer' }}>
          {checkAll ? (
            <CheckBox style={{ color: 'black' }} />
          ) : (
            <CheckBoxOutlineBlankIcon style={{ color: '#929292' }} />
          )}
        </div>
        <div style={{margin:'0px 0px 0px 87%'}}>
          <ReplayIcon style={{color:'#929292', margin:'0px 15px 0px 0px'}}/>
          <img src="/icon/휴지통.png" style={{width:'24px'}} />
        </div>
      </Header>
      <Line/>
      
      <Wrapper>
        {data.map((item, index)=>(
          <div key={index}>
            <MessageItem >
              <Box>
                
                <div onClick={() => handleItemCheck(item.senderId)} style={{ cursor: 'pointer' }}>
                  {checkItems.includes(item.senderId) ? (
                    <CheckBox style={{ color: 'black' }} />
                  ) : (
                    <CheckBoxOutlineBlankIcon style={{ color: '#929292' }} />
                  )}
                </div>

                <BookmarkBorderIcon
                  style={{
                    color: item.keep ? '#ffe651' : '#929292',
                    margin: '0px 0px 0px 5px',
                    cursor: 'pointer',
                  }}
                  onClick={() => toggleBookmark(item.senderId)}
                />

                <ItemContentBox onClick={() => handleButtonClick(item.senderId)}>
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