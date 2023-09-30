import { privateApi } from "../index";

// contest main api
export const contestMain = async () => {
  console.log('대회 메인 결과 - api 진입')
  try {
  const res = await privateApi.get("/contest/outline");
  console.log('대회 메인 결과 - api', res);
  return res.data;
  }
   catch(error) {
  console.log('대회 메인 결과 - api', error)
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



