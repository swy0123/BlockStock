// import React, { useCallback, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
// import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Common/Header";
import SideBar from "../components/Common/SideBar";

const Container = styled.div`
  background-color: #F4F5FA;
  margin: 0px;
`;

function Home() {
  return (
    <Container>
      <Header/>
      <SideBar/>
    </Container>
  );
}

export default Home;

