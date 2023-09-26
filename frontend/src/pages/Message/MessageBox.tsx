import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import MessageBoxBtn from '../../components/Message/MessageBox/MessageBoxBtn'
import MessageBoxList from '../../components/Message/MessageBox/MessageBoxList'
import MessageDetail from '../../components/Message/MessageBox/MessageDetail'

import {messageList, messageDetail} from '../../api/Message/Message'

function MessageBox(){
  const [type, setType] = useState('RECEIVE');
  const [detail, setDetail] = useState(true);
  const [messageId, setMessageId] = useState('');

  const handleButtonClick = (info) => {
    console.log('Received info from button click:', info);
    setType(info);
  };

  const handleDetailButtonClick = (info) => {
    console.log('Detail', info);
    setMessageId(info)
    setDetail(!detail);
  };


  // 쪽지 목록 api ===============================
  useEffect(()=>{
    messageListApi()
  },[type])
  
  const messageListApi = async ()=>{
    console.log(type)
    const message = await messageList(type) 
    console.log(message)
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
    console.log(messageId)
    const messageD = await messageDetail(messageId)
    console.log(messageD)
  }
  // 요청 성공시 받은 쪽지의 데이터를 useState로 저장 후 MessageDetail에 값을 보내 준다
  // 쪽지 내용 api =============================== 



  return(
    <>
      <Container>
        <MessageBoxBtn onButtonClick={handleButtonClick}/>
        <Line/>
        {detail ? (
          <MessageBoxList name={type} onButtonClick={handleDetailButtonClick}/>
        ) : (
          <MessageDetail onButtonClick={handleDetailButtonClick}/>
        )}
      </Container>
    </>
  )
}

export default MessageBox

const Container = styled.div`
width: 100%;
height: 100%;
background: #FFFFFF;
box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
border-radius: 8px;
display: flex;
`;

const Line = styled.div`
height: 100%;
border: 1px solid #DFDFDF;
`;