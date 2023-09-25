import React , {useEffect}from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
function ContestProgress(){
  const location = useLocation();
  const selectedContest = location.state.selectedContest;
  useEffect(()=>{
    console.log(selectedContest)
  },[])
  return(
    <>
    <Container>
      <h1>대회 진행 현황</h1>
      <div>{selectedContest.code}</div>
      <div>{selectedContest.content}</div>
      <div>{selectedContest.id}</div>
      <div>{selectedContest.startAsset}</div>
      <div>{selectedContest.term}</div>
      <div>{selectedContest.title}</div>
    </Container>
    
    </>
  )
}

export default ContestProgress

const Container = styled.div`
width: 1000px;
height: 500px;
border: 1px solid black;
`;