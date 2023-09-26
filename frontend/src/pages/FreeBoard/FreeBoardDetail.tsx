import React from "react";
import styled from "styled-components";
import FreeBoardItemDetail from "../../components/FreeBoard/FreeBoardDetail/FreeBoardItemDetail";

const Container = styled.div`
  width: 100%;
`;


function FreeBoardDetail(){
  return(
    <Container>
      <FreeBoardItemDetail/>
    </Container>
  )
}

export default FreeBoardDetail