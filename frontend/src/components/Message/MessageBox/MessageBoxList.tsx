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
  ItemContentBox,
  IconBox
} from './MessageBoxList.style'
// 체크박스
import CheckBox from './CheckBox';
// 빈박스
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// 새로고침
import ReplayIcon from '@mui/icons-material/Replay';
// 보관함 아이콘
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

// api 통신
import {messageKeep, messageList, messageDelete} from '../../../api/Message/Message'

function MessageBoxList({name, onButtonClick, message}){
  const [data, setData] = useState(message)
  const [checkAll, setCheckAll] = useState(false);
  const [checkItems, setCheckItems] = useState([]);


  useEffect(() => {
    console.log('MessageBoxList',name)
    setData(message)
    setCheckItems([])

    // if (name === 'receive') {
    // } else if (name === 'send') {
    //   setCheckAll(false)
    //   setCheckItems([])
    // } else if (name === 'keep') {
    //   setCheckAll(false)
    //   setCheckItems([])
    // }
  }, [message,name]); 


  useEffect(()=>{
    // checkItems 업데이트 이후에 checkAll을 업데이트
    if (data.length !== checkItems.length) {
      setCheckAll(false);
    } else if(data.length === 0){
      setCheckAll(false);
    }else{
      setCheckAll(true);
    }
  },[checkItems])


  const handleCheck = () => {
    setCheckAll(!checkAll);
    if (!checkAll) {
      // 모든 아이템 선택
      setCheckItems(data.map(item => item.id));
    } else {
      // 모든 아이템 선택 해제
      setCheckItems([]);
    }
  };


  const handleItemCheck = (itemId) => {
    console.log('itemId',itemId)
    // 아이템 개별 선택 또는 해제
    if (checkItems.includes(itemId)) {
      setCheckItems(checkItems.filter(id => id !== itemId));
    } else {
      setCheckItems([...checkItems, itemId]);
    }
  };
  
  // 클릭시 성공하면 쪽지 리스트를 다시 한번 재요청 
  const toggleBookmark = (itemId) => {
    messageKeepApi(itemId)
    // 아이템의 keep 상태 토글
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            marked: !item.marked,
          };
        }
        return item;
      });
    });
  };


  // 쪽지 보관 api
  const messageKeepApi = async(itemId)=>{
    const message = await messageKeep(itemId)
    console.log(message)
    if(message===200){
      console.log('목록 다시 불러오기')
      messageListApi(name)
    }
  }

  // 쪽지 목록 api
  const messageListApi = async(name)=>{
    const res = await messageList(name)
    console.log(res)
    setData(res)
  }

  const handleButtonClick = (buttonType) => {
    onButtonClick(buttonType);
  };

  // 쪽지 삭제 api
  const handleDetail = async()=>{
    console.log(checkItems)
    const idArray = checkItems.map((checkItems) => ({ id: checkItems }));
    const res = await messageDelete(idArray)
    console.log(res)
    if (res===200){
      console.log('목록 다시 불러오기')
      messageListApi(name)
    }
  }

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
        <IconBox>
          <Tooltip title="Reload" style={{margin:'0px 25px 0px 0px'}}>
            <IconButton onClick={()=>messageListApi(name)}>
              <ReplayIcon style={{color:'#929292', cursor:'pointer',position:'absolute',top:'-5px'}}/>
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton onClick={handleDetail}>
              <img src="/icon/휴지통.png" style={{width:'24px', cursor:'pointer',position:'absolute',top:'-5px'}} />
            </IconButton>
          </Tooltip>
        </IconBox>
      </Header>
      <Line/>
      
      <Wrapper>
        {data.map((item, index)=>(
          <div key={index}>
            <MessageItem >
              <Box>
              
                  {/* 쪽지 삭제 체크박스 */}
                  <div onClick={() => handleItemCheck(item.id)} style={{ cursor: 'pointer' }}>
                    {checkItems.includes(item.id) ? (
                      <CheckBox style={{ color: 'black' }} />
                    ) : (
                      <CheckBoxOutlineBlankIcon style={{ color: '#929292' }} />
                    )}
                  </div>
                  {/* 쪽지 보관 */}
                  <div  onClick={() => toggleBookmark(item.id)}>
                    {item.marked ? (
                    <BookmarkIcon 
                    style={{margin: '0px 0px 0px 5px',cursor: 'pointer', color: '#FFC700'}}
                    />
                  ):(
                    <BookmarkBorderIcon style={{margin: '0px 0px 0px 5px',cursor: 'pointer', color:'#929292'}}/>
                  )}
                  </div>

                <ItemContentBox onClick={() => handleButtonClick(item.id)}>
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