// 충전,교환 api
import { privateApi } from ".";


interface amount{
    money: number
}

// 충전
export const putMoney = async(data: amount) => {
    try{
        const response = await privateApi.put("/member/money", data);
        console.log('결과', response);
        return response
    }catch(error){
        console.log('err', error)
    }
}

// 교환
export const putTicket = async(count: number) => {
    try{
        console.log("티켓수", count)
        const response = await privateApi.put(`/member/ticket?count=${count}`,)
        return response
    }catch(error){
        console.log('err',error)
    }
}