import { privateApi, publicApi } from ".";

// 마이페이지 조회 api
export const getmypage = async () => {
    try{
        console.log('마이페이지 try진입')
        const response = await privateApi.get("/member");
        console.log('데이터야?', response.data);
        return response.data;    
    }catch (error) {
        console.error("error??", error);
    }
};