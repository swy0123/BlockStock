// import React, { useCallback, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
// import { Link, useNavigate } from "react-router-dom";
import LeftHome from "../components/Home/LeftHome";

const Container = styled.div`
  /* background-color: #F4F5FA;
  height: 100%; */
`;
const MainWrapper = styled.div`
  display: flex;
`

function Home() {
  return (
    <Container>
      <MainWrapper>
        <LeftHome/>
      </MainWrapper>
    </Container>
  );
}

export default Home;

