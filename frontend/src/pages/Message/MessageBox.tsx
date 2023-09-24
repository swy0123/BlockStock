import React, {useState} from 'react'
import styled from 'styled-components'
import MessageBoxBtn from '../../components/Message/MessageBox/MessageBoxBtn'
import MessageBoxList from '../../components/Message/MessageBox/MessageBoxList'
function MessageBox(){
  const [type, setType] = useState('Receive');

  const handleButtonClick = (info) => {
    console.log('Received info from button click:', info);
    setType(info);
  };

  return(
    <>
      <Container>
        <MessageBoxBtn onButtonClick={handleButtonClick}/>
        <Line/>
        <MessageBoxList name={type} />
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