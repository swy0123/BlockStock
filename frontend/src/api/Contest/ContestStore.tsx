import { privateApi } from "../index";
 


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
interface paramProps {
  status: string,
  page: number,
  size: number,
  keyWord: string
}
export const expectedContestContent = async ( props:paramProps ) => {
  const { status, page, size, keyWord } = props;
  const url = `/contest?status=${status}&page=${page}&size=${size}&key_word=${keyWord}`;
  const res = await privateApi.get(url);
  console.log(res);
  // try {
  //   console.log(props)
  //   console.log("sssssssssssssss")
  //   // https://j9b210.p.ssafy.io:8443/api/contest?status=finish&page=0&size=10&key_word=st
  //   const res = await privateApi.get(`/contest?status=finish&page=0&size=10&key_word=st`);
  //   // const res = await privateApi.get(`/contest`, {params:{
  //   //   status: props.status,
  //   //   page: props.page,
  //   //   size: props.size,
  //   //   keyWord: props.keyWord
  //   // }});
  //   console.log("성공")
  
  //   console.log(res);
  //   // return res; 
  // } catch(error) {
  //   console.log('에러')
  //   console.log(error)
  // }
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