import { privateApi } from "../index";
 


// 진행 중 대회 api
export const currentContestList = async ( params:params ) => {
  console.log('진행 중 대회 api 진입')
  try{
    console.log(params)
    const res = await privateApi.get(`/contest`, {
      params 
    });
    console.log(res.data);
    return res.data;
  }
  catch(err){
    console.log('진행 중 대회 api',err)
  }
};



// 예정 대회 api
interface paramProps {
  status: string,
  page: number,
  size: number,
  keyWord: string
}
export const expectedContestList = async ( props:paramProps ) => {
  console.log('예정 대회 api 진입')
  try {
    console.log(props)
    const res = await privateApi.get(`/contest`, {params:{
      status: props.status,
      page: props.page,
      size: props.size,
      key_word: props.key_word
    }});
    console.log(res);
    return res.data; 
  } catch(error) {
    console.log('예정 대회 api', error)
  }
};


// 완료 대회 api
export const completedContestList = async ( params:params ) => {
  console.log('완료 대회 api 진입')
  try{
    console.log(params)
    const res = await privateApi.get(`/contest`, {
      params 
    });
    console.log(res.data);
    return res.data;
  }
  catch(err){
    console.log('완료 대회 api',err)
  }
};

// 완료 대회 결과 상세조회 api
export const contestResult = async ( contestId: contestId ) => {
  console.log('완료 대회 결과 상세조회 api 진입')
  try{
    console.log(contestId)
    const res = await privateApi.get(`/contest/result/${contestId}`);
    console.log(res.data);
    return res.data;
  }
  catch(err){
    console.log('완료 대회 결과 상세조회 api api',err)
  }
};

// 전략 조회
export const tacticList = async ( data: data ) => {
  console.log('전략 조회 api 진입')
  try{
    console.log(data)
    const res = await privateApi.get(`/tactic`, {
      params:{
        optionCode:data.optionCode
      }
    });
    console.log(res.data);
    return res.data;
  }
  catch(err){
    console.log('완료 대회 결과 상세조회 api api',err)
  }
};

