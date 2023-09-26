import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;
  margin-top: 15px;
  margin-left: 25px;
`;
const Title = styled.div`
  width: 200px;
  font-size: 25px;
  color: #000000;
  font-weight: bold;
  margin-top: -27px;
  background-color: #f4f5fa;
  z-index: 1000;
  margin-left: 20px;
`;
const Hr = styled.hr`
  width: 88%;
  opacity: 50%;
  z-index: 50;
`;

function FreeBoardTitle() {
  return (
    <Container>
      <Hr />
      <Title>자유게시판</Title>
    </Container>
  );
}

export default FreeBoardTitle;
