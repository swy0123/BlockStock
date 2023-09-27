import { privateApi } from "../index";
 
// 대회 참가
export const contestParticipant = async (info:info) => {
  console.log('대회 참가 api')
  try{
    console.log('contestId',info.contestId)
    console.log('tacticId',info.tacticId)
    const res = await privateApi.post(`/contest/participate`,{
        contestId:info.contestId,
        tacticId:info.tacticId
    });
    console.log(res);
    return res.data;
  }
  catch(err){
    console.log('대회 참가 api', err)
  }
};

// 대회 취소
export const contestCancel = async ( contestId ) => {
  console.log('대회 취소 api 진입')
  try{
    console.log(contestId)
    const res = await privateApi.delete(`/contest/participate/${contestId}`);
    console.log(res);
    return res.data;
  }
  catch(err){
    console.log('대회 취소 api',err)
  }
};