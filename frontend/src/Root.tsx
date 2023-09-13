import React, { useEffect, useState } from "react";
import {  BrowserRouter as Router, Route, Switch, Outlet, useNavigate, useLocation } from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import Header from "./components/Common/Header";
import SideBar from "./components/Common/SideBar";
import Home from "./pages/Home";
import styled from "styled-components";
import Login from "./pages/Account/Login";
import SignUp from "./pages/Account/SignUp";

const Container = styled.div`
  
`
const Wrapper = styled.div`
  width: 80%;
  position: absolute;
  margin-top: 75px;
  margin-left: 250px;
`
function App() {

  return (
    <Container>
      <Header />
      <SideBar />
      <Wrapper>
        {/* 여기에서 페이지 끼워짐 */}
        <Outlet />
      </Wrapper>
    </Container>

  );
}

function Root() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}

export default Root;
