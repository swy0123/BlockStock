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
    console.log(res);
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
    console.log(res.status);
    console.log('보내기 성공', res.status);
    return res.status
  }
  catch(err){
    console.log('쪽지 보내기 api', err)
  }
};

// 쪽지 보관
export const messageKeep = async (messageId:messageId) => {
  console.log('쪽지 보관 api 진입')
  try{
    console.log(messageId)
    const res = await privateApi.put(`/message/${messageId}`);
    console.log(res.status);
    console.log('보관 성공', res.status);
    return res.status
  }
  catch(err){
    console.log('쪽지 보내기 api', err)
  }
};

// 쪽지 삭제
export const messageDelete = async (messageId:messageId) => {
  console.log('쪽지 삭제 api 진입')
  try{
    console.log(messageId)
    // 배열 내 각각의 id를 별도의 쿼리 매개변수로 만들어서 요청 보내기
    const queryParams = messageId.map((id) => `id=${id.id}`).join('&');
    console.log(queryParams)
    const res = await privateApi.delete(`/message?${queryParams}`);
    console.log(res);
    console.log('삭제 성공', res.status);
    return res.status
  }
  catch(err){
    console.log('쪽지 삭제 api', err)
  }
};