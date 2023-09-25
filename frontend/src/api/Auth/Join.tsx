// 회원가입 관련 API
import { publicApi } from "..";

interface userData {
    email: string,
    password: string,
    nickname: string,
}

interface authMail {
    email: string,
    code:  string,
}

interface enterEmail {
    email : string
}


// 이메일 인증(발송) api
export const postmail = async (email: enterEmail) => {
    try{
    console.log('try email', email);
    const response = await publicApi.post("/member/request-email", email);
    console.log(response);
    return response;
    }catch(error){
        console.log('err',error)
    }
};
// 이메일 인증(확인) api
export const checkmail = async (data: authMail) => {
    console.log('data', data);
    const response = await publicApi.post("/member/confirm-email", data);
    console.log(response.data);
    return response.data;
};

// 회원가입 api
export const postJoin = async (user: userData) => {
    try{
        console.log("userData", user);
        const response = await publicApi.post("/member", user);
        console.log(response.data);
        return response.data;    
    }catch(error){
        console.log("err",error)
    }
};