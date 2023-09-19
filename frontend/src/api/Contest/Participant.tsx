import { privateApi } from "../index";
 
// 대회 참가
export const contestParticipant = async (info:info) => {
  console.log(info)
  const res = await privateApi.delete(`/contest/participate`,{
    params:{info}
  });
  console.log(res.data);
  return res.data;
};