import { privateApi, publicApi } from "../index";
 
// 진행 중 대회 api
export const currentContestlist = async ( params:params ) => {
  console.log(params)
  const res = await privateApi.get(`/contest`, {
    params: { params }
  });
  console.log(res.data);
  return res.data;
};

// 예정 대회 api
export const expectedContestContent = async ( params:params ) => {
  console.log(params)
  console.log("sssssssssssssss")
  const res = await privateApi.get(`/contest`, {
    params: { params }
  });
  console.log(res.data);
  console.log("saaaaaaaa")
  return res.data;
};

// 완료 대회 api
export const completedContestContent = async ( params:params ) => {
  console.log(params)
  const res = await privateApi.get(`/contest`, {
    params: { params }
  });
  console.log(res.data);
  console.log("saaaaaaaa")
  return res.data;
};