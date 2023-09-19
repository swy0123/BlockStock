import { privateApi, publicApi } from "../index";

// 현재 대회 결과 api
export const currentContest = async () => {
  const res = await privateApi.get("/contest/result");
  console.log(res.data);
  return res.data;
};

// 예정 대회 결과 api
export const expectedContest = async ( params:params ) => {
  console.log(params)
  const res = await privateApi.get(`/contest`, {
    params: { params }
  });
  console.log(res.data);
  return res.data;
};

// 예정 대회 결과 api
export const recentContestResults = async () => {
  const res = await privateApi.get(`/contest/result/prev`);
  console.log(res.data);
  return res.data;
};
