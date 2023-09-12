// import React, { useCallback, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
// import { Link, useNavigate } from "react-router-dom";
import LeftHome from "../components/Home/LeftHome";
import RightHome from "../components/Home/RightHome";

const Container = styled.div`
/* width: 100%; */
`;
const MainWrapper = styled.div`
  /* width: 100vh; */
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
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

