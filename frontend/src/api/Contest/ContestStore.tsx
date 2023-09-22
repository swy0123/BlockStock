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
  // const { status, page, size, keyWord } = props;
  // const url = `/contest?status=${status}&page=${page}&size=${size}&key_word=${keyWord}`;
  // const res = await privateApi.get(url);
  // console.log(res);
  try {
    console.log(props)
    const res = await privateApi.get(`/contest`, {params:{
      status: props.status,
      page: props.page,
      size: props.size,
      keyWord: props.keyWord
    }});
    console.log(res);
    return res.data; 
  } catch(error) {
    console.log(error)
  }
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