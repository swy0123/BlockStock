import { privateApi } from "../index";

// 전략게시판 게시글 
export const tacticBoardList = async (Params:Params) => {
  console.log('게시글 리스트', Params)
  const res = await privateApi.get(`/tactic-board`,{
    params:{
      sort: Params.sort,
      page: Params.page,
      size: Params.size,
      keyword: Params.keyword,
    }
  });
  console.log(res);
  return res
};
// 마이페이지 전략게시판 게시글 
export const myTacticBoardList = async (data:data) => {
  console.log('마이페이지 전략게시판 게시글 ', data)
  const res = await privateApi.get(`/tactic-board/${data.userid}/my`,{
    params:{
      page: data.params.page,
      size: data.params.size,
    }
  });
  console.log(res);
  return res
};
// 내 자유게시글
export const likeTacticBoard = async () => {
  const res = await privateApi.get(`/tactic-board`,{
    params:{
      sort: "createdAt",
      page: 0,
      size: 100,
      keyword: "",
      my: false,
      like: true,
    }
  });
  return res.data
};

// 전략게시판 글 작성
export const tacticBoardCreate = async (data:data) => {
  console.log(data)
  const res = await privateApi.post(`/tactic-board`, data, {
  });
  console.log('글 작성', res);
  return res;
};

// 전략게시판 게시글 상세페이지
export const tacticBoardDetail = async (postId:postId) => {
  console.log(postId)
  const res = await privateApi.get(`/tactic-board/${postId}`);
  console.log(res);
  return res;
};

// 전략게시판 게시글 삭제
export const tacticBoardDelete = async (postId:postId) => {
  console.log('게시글 삭제', postId)
  const res = await privateApi.delete(`/tactic-board/${postId}`);
  console.log(res);
  return res;
};