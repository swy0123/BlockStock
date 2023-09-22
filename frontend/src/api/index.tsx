import axios, { AxiosInstance } from "axios";
import { useRecoilState } from "recoil";
import { CurrentUserAtom, LoginState } from "./../recoil/Auth";

//수정
const BASE_URL = "https://j9b210.p.ssafy.io:8443/api";

axios.defaults.withCredentials = true;

export const publicApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const privateApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "ngrok-skip-browser-warning": "69420", //파이썬 서버 통신 위한 추가 코드
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

// config에 오리지널 요청 저장
// 모든 request요청이 실행되기 전에 호출 -> 모든 요청 헤더에 인증 토큰 추가
privateApi.interceptors.request.use((config) => {
  console.log("first config", config);
  const token = localStorage.getItem("access_token");
  config.headers.Authorization = "Bearer " + token;
  return config;
});

// 리프레시 토큰을 통해 서버로부터 새로운 액세스 토근 가져오기
export async function postRefreshToken() {
  console.log("리프레시 토큰 재발급");
  const headers = {
    withCredential: true,
    "Authorization-refresh": "Bearer " + localStorage.getItem("refresh_token"),
    // 'Access-Control-Allow-Origin': '*',
    // "Access-Control-Allow-Credentials": true,
  };
  const response = await publicApi.put("/auth/refresh", null, { headers });
  console.log("리프리프리프리프");
  return response;
}

// 모든 응답에 대한 처리
privateApi.interceptors.response.use(  
  // 응답 성공시
  (response) => {
    console.log("response");
    return response;
  },
  // 응답 실패시(토큰 재발급 필요시)
  async (error) => {
    const { config } = error;
    console.log("===================================error");
    console.log("error", error);
    const originRequest = config;
    try {
      const response = await postRefreshToken();
      const newAccessToken = response.data.accessToken
      localStorage.setItem(
        'access_token',
        response.data.accessToken
      );
      localStorage.setItem(
        'refresh_token',
        response.data.refreshToken
      );
      axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
      originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return axios(originRequest);
    } catch {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      // window.location.href = ("/");
    }
    return Promise.reject(error);
  }
);
