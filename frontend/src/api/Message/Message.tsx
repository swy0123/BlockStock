import { privateApi } from "../index";

// 쪽지 목록
export const messageList = async (type:type) => {
  console.log('쪽지 목록 api 진입')
  try{
    console.log(type)
    const res = await privateApi.get(`/message`,{
      params:{
        type
      }
    });
    console.log(res.data);
    return res.data
  }
  catch(err){
    console.log('쪽지 목록 api', err)
  }
};

// 쪽지 내용 보기
export const messageDetail = async (messageId:messageId) => {
  console.log('쪽지 내용 보기 api 진입')
  try{
    console.log(messageId)
    const res = await privateApi.get(`/message/${messageId}`);
    return res.data
  }
  catch(err){
    console.log('쪽지 내용 보기 api', err)
  }
};

// 쪽지 보내기
export const messageSend = async (data:data) => {
  console.log('쪽지 보내기 api 진입')
  try{
    console.log(data)
    const res = await privateApi.post(`/message`,data);
    console.log(res.data);
    console.log('보내기 성공', res.data);
    return res.data
  }
  catch(err){
    console.log('쪽지 보내기 api', err)
  }
};