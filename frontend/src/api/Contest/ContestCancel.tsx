import { privateApi } from "../index";
 
// 대회 취소
export const contestCancel = async (contestId) => {
  console.log(contestId)
  const res = await privateApi.delete(`/contest/participate/${contestId}`);
  console.log(res.data);
  return res.data;
};