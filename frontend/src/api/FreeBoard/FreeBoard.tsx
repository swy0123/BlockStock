import { privateApi } from "../index";

// 자유게시판 게시글 
export const freeBoardListt = async (Params:Params) => {
  console.log(Params)
  const res = await privateApi.get(`/free-board`,{
    params:{Params}
  });
  console.log(res.data);
  return res.data;
};