import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import MessageBoxBtn from '../../components/Message/MessageBox/MessageBoxBtn'
import MessageBoxList from '../../components/Message/MessageBox/MessageBoxList'
import MessageDetail from '../../components/Message/MessageBox/MessageDetail'

import {messageList, messageDetail} from '../../api/Message/Message'

function MessageBox(){
  const [type, setType] = useState('receive');
  const [detail, setDetail] = useState(true);
  const [messageId, setMessageId] = useState('');

  const [ messageListItem, setMessageListItem] = useState([])
  const [ messageItem, setMessageItem ] = useState('')
  const handleButtonClick = (info) => {
    console.log('Received info from button click:', info);
    setType(info);
  };

  const handleDetailButtonClick = (info) => {
    console.log('Detail', info);
    setMessageId(info)
    setDetail(!detail);
    messageListApi()
  };


  // 쪽지 목록 api ===============================
  useEffect(()=>{
    console.log('쪽지 목록 api MessageBox')
    messageListApi()
    setDetail(true)
  },[type])
  
  const messageListApi = async ()=>{
    console.log(type)
    const message = await messageList(type) 
    console.log(message)
    setMessageListItem(message)
  }
  // 쪽지 목록 api =============================== 


  // 쪽지 내용 api ===============================
  useEffect(()=>{
    console.log(messageId)
    if (messageId){
      messageSendApi()
    }
  },[messageId])
  
  const messageSendApi = async()=>{
    console.log('쪽지 상세 api',messageId)
    const messageD = await messageDetail(messageId)
    console.log(messageD)
    setMessageItem(messageD)
  }
  // 요청 성공시 받은 쪽지의 데이터를 useState로 저장 후 type이랑 같이 MessageDetail에 값을 보내 준다
  // 목록으로 다시 갈시에는 type을 다시 반환받아 온다
  // 쪽지 내용 api =============================== 


  return(
    <>
        <Container>
          <MessageBoxBtn onButtonClick={handleButtonClick}/>
          <Line/>
          {detail ? (
            <MessageBoxList name={type} onButtonClick={handleDetailButtonClick} message={messageListItem}/>
          ) : (
            <MessageDetail onButtonClick={handleDetailButtonClick} name={type} data={messageItem} />
          )}
        </Container>
    </>
  )
}

export default MessageBox

const Container = styled.div`
width: 90%;
height: 100%;
background: #FFFFFF;
box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
border-radius: 8px;
display: flex;
margin: 50px auto 0px auto;
@media (max-width: 1300px) {
    width: 1000px;
  }
`;

const Line = styled.div`
height: 100%;
border: 1px solid #DFDFDF;
`;