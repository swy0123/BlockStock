// 충전,교환 api
import { privateApi } from ".";


interface amount{
    money: number
}

export const putMoney = async(data: amount) => {
    try{
        const response = await privateApi.put("/member/money", data);
        console.log('결과', response);
        return response
    }catch(error){
        console.log('err', error)
    }
}