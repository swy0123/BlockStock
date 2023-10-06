import React from "react";
import FreeBoardTitle from "../../components/FreeBoard/FreeBoardTitle";
import FreeBoardListBox from "../../components/FreeBoard/FreeBoardList/FreeBoardListBox";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 900px;
  margin-bottom: 15%;
`;

function FreeBoardList() {
  return (
    <Container>
      <FreeBoardTitle />
      <FreeBoardListBox />
    </Container>
  );
}

export default FreeBoardList;
