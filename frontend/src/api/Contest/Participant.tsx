import { privateApi } from "../index";
 
// 대회 참가
export const contestParticipant = async (info:info) => {
  console.log('대회 참가 api')
  try{
    console.log(info)
    const res = await privateApi.post(`/contest/participate`,{
      info
    });
    console.log(res.data);
    return res.data;
  }
  catch(err){
    console.log('대회 참가 api', err)
  }
};