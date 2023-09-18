import React from "react";
import FreeBoardTitle from "../../components/FreeBoard/FreeBoardTitle";
import FreeBoardListBox from "../../components/FreeBoard/FreeBoardList/FreeBoardListBox";
import styled from "styled-components";
const Container = styled.div`
margin: 30px 0px 0px 80px;
width: 1000px;
height: 600px;
`;

function FreeBoardList(){
  return(
    <Container>
      <FreeBoardTitle/>
      <FreeBoardListBox/>
    </Container>
  )
}

export default FreeBoardList