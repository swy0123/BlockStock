import { privateApi, publicApi } from "../index";

// 현재 대회 결과 api
export const currentContest = async () => {
  console.log('현재 대회 결과 - api 진입')
  try {
  const res = await privateApi.get("/contest/result");
  console.log('현재 대회 결과 - api', res.data);
  return res.data;
  }
   catch(error) {
  console.log('현재 대회 결과 - api', error)
  }
};

// 예정 대회 결과 api
export const expectedContest = async ( props:paramProps ) => {
  console.log('예정 대회 결과 - api 진입')
  try{
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(props)
    const res = await privateApi.get(`/contest`, {
      params:
      {
        status: props.status,
        page: props.page,
        size: props.size,
        key_word: props.key_word
      }
    });
    console.log(res.data);
    return res.data;
  }
  catch(err){
    console.log('예정 대회 결과 - api', err)
  }
};

// 직전 대회 결과 api
export const recentContestResults = async () => {
  console.log('직전 대회 결과 - api 진입')
  try{
    await new Promise(resolve => setTimeout(resolve, 2000));
    const res = await privateApi.get(`/contest/result/prev/rank`);
    console.log(res);
    return res.data;
  }
  catch(err){
    console.log('직전 대회 결과 - api', err)
  }
};

