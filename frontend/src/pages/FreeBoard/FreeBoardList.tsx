import React from "react";
import FreeBoardTitle from "../../components/FreeBoard/FreeBoardTitle";
import FreeBoardListBox from "../../components/FreeBoard/FreeBoardList/FreeBoardListBox";
import styled from "styled-components";

const Container = styled.div`
margin: 50px 0px 0px 100px;
width: 1450px;
height: 700px;
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