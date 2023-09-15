import React from "react";
import FreeBoardCreateBox from "../../components/FreeBoard/FreeBoardCreate/FreeBoardCreateBox";
import styled from "styled-components";

const Container = styled.div`
  margin: 50px 0px 0px 80px;
`;
function FreeBoardCreate(){
  return(
    <Container>
      <FreeBoardCreateBox/>
    </Container>
  )
}

export default FreeBoardCreate