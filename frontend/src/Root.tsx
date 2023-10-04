// import React, { useEffect, useState } from "react";
import {  BrowserRouter as Switch, Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./components/Common/Header";
import SideBar from "./components/Common/SideBar";
import LoginHeader from "./components/Common/LoginHeader";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { LoginState } from "./recoil/Auth";
import "./components/Font/Font.css"

const Container = styled.div`
  font-family: 'Pretendard-Regular';  
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
  const isLogIn = useRecoilValue(LoginState);
  console.log('로그인 여부=', isLogIn)

  return (
    <Container>
      {isLogIn? <LoginHeader/> : <Header/>}
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
