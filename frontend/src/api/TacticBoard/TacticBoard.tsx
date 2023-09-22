import { privateApi } from "../index";

// 전략게시판 게시글 
export const tacticBoardList = async (Params:Params) => {
  console.log(Params)
  const res = await privateApi.get(`/contest?status=finish&page=0&size=10`)
  // const res = await privateApi.get(`/tactic-board`,{
    // params:{Params}
  // });
  console.log(res.data);
  return res.data
};

// 전략게시판 글 작성
export const tacticBoardCreate = async (data:data) => {
  console.log(data)
  const res = await privateApi.post(`/tactic-board`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(res.data);
  return res.data;
};

// 전략게시판 게시글 상세페이지
export const tacticBoardDetail = async (postId:postId) => {
  console.log(postId)
  const res = await privateApi.get(`/tactic-board/${postId}`);
  console.log(res.data);
  return res.data;
};

// 전략게시판 게시글 삭제
export const tacticBoardDelete = async (postId:postId) => {
  console.log(postId)
  const res = await privateApi.get(`/tactic-board/${postId}`);
  console.log(res.data);
  return res.data;
};