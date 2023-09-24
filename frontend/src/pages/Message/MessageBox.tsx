import React, {useState} from 'react'
import styled from 'styled-components'
import MessageBoxBtn from '../../components/Message/MessageBox/MessageBoxBtn'
import MessageBoxList from '../../components/Message/MessageBox/MessageBoxList'
import MessageDetail from '../../components/Message/MessageBox/MessageDetail'

function MessageBox(){
  const [type, setType] = useState('Receive');
  const [detail, setDetail] = useState(true);

  const handleButtonClick = (info) => {
    console.log('Received info from button click:', info);
    setType(info);
  };

  const handleDetailButtonClick = (info) => {
    console.log('Detail', info);
    setDetail(!info);
  };

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
width: 1165px;
height: 615px;
background: #FFFFFF;
box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
border-radius: 8px;
display: flex;
margin: 50px 0px 0px 20px;
`;

const Line = styled.div`
height: 100%;
border: 1px solid #DFDFDF;
`;