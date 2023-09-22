// 로그인 관련 API
import {  publicApi } from ".";

// const BASE_URL = 'https://j9b210.p.ssafy.io:8443/api';

interface LoginProps {
  email: string;
  password: string;
}

//로그인
export const postLogin = async (user: LoginProps) => {
  console.log("postLogin", user);
  const res = await publicApi.post("/auth/login", user).catch((err) => {
    console.log("postLogin catch: ", err);
  });
  if (res && res.status === 200) {
    console.log("login info: ", res);
    const accessToken = res.data.accessToken; // 응답헤더에서 토큰 받기
    const refreshToken = res.data.refreshToken; // 응답헤더에서 토큰 받기
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    console.log("access 토큰 :", accessToken);
    console.log("refresh 토큰 :", refreshToken);

    const nickname = res.data.nickname;
    const userid = res.data.memberId;
    const userinfo = { userid, nickname };
    console.log("userinfo: ", userinfo);

    return userinfo;
  } else return false;
};
