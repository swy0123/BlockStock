import React, { useState } from "react";
import AdminInfo from "../../components/Admin/AdminInfo";
import ContestBtn from "../../components/Admin/ContestBtn";
import ContestList from "../../components/Admin/ContestList";
import ContestCreate from "../../components/Contest/ContestCreate/ContestCreate";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
margin: 30px 0px 0px 30px;
`;

function ContestManagement(){

  const [type, setType] = useState('List')
  const handleButtonClick = (info) => {
    console.log('Received info from button click:', info);
    setType(info)
  };

  return(
    <>
    <Container>
      <div style={{margin:'50px 0px 0px 0px'}}>
      <AdminInfo/>
      </div>
      <div style={{margin:'0px 0px 0px 50px'}}>
        <ContestBtn onButtonClick={handleButtonClick}/>
        {type === 'List' && <ContestList />}
        {type === 'create' && <ContestCreate />}   
      </div>
    </Container>
    </>
  )
}

export default ContestManagement