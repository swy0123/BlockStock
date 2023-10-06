import React from "react";
import FreeBoardUpdateBox from "../../components/FreeBoard/FreeBoardUpdate/FreeBoardUpdateBox";
import styled from "styled-components";
function FreeBoardUpdate(){

  const Container = styled.div`
  margin: 50px 0px 0px 50px;
`;
  return(
    <Container>
      <FreeBoardUpdateBox/>
    </Container>
  )
}

export default FreeBoardUpdate