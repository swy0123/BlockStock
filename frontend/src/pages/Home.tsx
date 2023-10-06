// import React, { useCallback, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
// import { Link, useNavigate } from "react-router-dom";
import LeftHome from "../components/Home/LeftHome";
import RightHome from "../components/Home/RightHome";

const Container = styled.div`
  align-items: center;
  margin-left: 10px;
`;
const MainWrapper = styled.div`
  /* width: 100vh; */
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  margin-top: 35px;
`

function Home() {
  return (
    <Container>
      <MainWrapper>
        <LeftHome/>
        <RightHome/>
      </MainWrapper>
    </Container>
  );
}

export default Home;

