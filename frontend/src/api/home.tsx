// 메인 화면 api

import { publicApi } from ".";

// 추천 주식 조회 
export const getStock = async() => {
    try{
        console.log("메인 주식 조회 try")
        const response = await publicApi.get("/option/stock");
        // console.log('res', response.data);
        return response.data
    }catch(error){
        console.log('주식조회 실패', error)
    }
}