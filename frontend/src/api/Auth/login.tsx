// 로그인 관련 API
import {  publicApi } from "..";


interface LoginProps {
  email: string;
  password: string;
}
interface emailProps {
    email: string
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

// 비밀번호 찾기 api
export const findPw =async (email : emailProps) => {
  try {
  const response = await publicApi.put("/member/request-email", email);
  console.log('try 결과', response.request)
  return response;
  } catch (error) {
    console.log('err', error);
  }
}

