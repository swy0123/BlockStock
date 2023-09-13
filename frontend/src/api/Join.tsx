// 회원가입 관련 API
import axios from "axios";
import { privateApi, publicApi } from ".";

const BASE_URL = 'https://j9b210.p.ssafy.io:8443/api';

interface userData {
    email: string,
    password: string,
    nickname: string,
}

// 이메일 인증(발송) api
export const postmail = async (email: enterEmail) => {
    console.log('email', email);
    const data = {
        "email" : email
    }
    const response = await publicApi.post("/auth/request-email", data);
    // const response = await axios.post("https://localhost/api/v1/auth/request-email", data);
    console.log(response.data);
    return response.data;
};

// 회원가입 api
export const postJoin = async (user: userData) => {
    console.log("userData", user);
    const response = await publicApi.post("/member", user);
    // const response = await axios.post("https://j9b210.p.ssafy.io:8443/api/member", user);
    console.log(response.data);
    return response.data;
};