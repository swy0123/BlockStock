import React, { useEffect, useState } from "react";
import {  BrowserRouter as Router, Route, Switch, Outlet, useNavigate, useLocation } from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import Header from "./components/Common/Header";
import SideBar from "./components/Common/SideBar";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Wrapper = styled.div`
  display: flex;
  margin-top: 80px;
`
const OutletBox =styled.div`
  width: 100%;
  margin-right: 50px;
  margin-left: 250px;
  margin-top: 10px;
`;

function App() {

  return (
    <Container>
      <Header />
      {/* <SideBar /> */}
      <Wrapper>
        <SideBar />
        <OutletBox>
        {/* 여기에서 페이지 끼워짐 */}
          <Outlet />
        </OutletBox>
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
