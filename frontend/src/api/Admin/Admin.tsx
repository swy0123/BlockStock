import { privateApi } from "../index";
 
// 대회 생성
export const contestCreate = async (data) => {
  console.log('대회 생성 api 진입')
  try{
    console.log(data)
    const res = await privateApi.post(`/contest`,data,{});
    console.log(res.data);
    return res.data;
  }
  catch(err){
    console.log('대회 생성 api', err)
  }
};
// 대회 삭제
export const contestDelete = async (contestId) => {
  console.log('대회 삭제 api 진입')
  try{
    console.log(contestId)
    const res = await privateApi.delete(`/contest${contestId}`);
    console.log(res.data);
    return res.data;
  }
  catch(err){
    console.log('대회 삭제 api', err)
  }
};