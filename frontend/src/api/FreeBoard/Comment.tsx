import { privateApi } from "../index";

// 자유게시판 댓글 생성
export const commentCreate = async (data:data) => {
  console.log(data)
  const res = await privateApi.post(`/free-board/comment`, data);
  console.log(res);
  return res;
};

// 자유게시판 게시글 좋아요
export const likeCreate = async (data:data) => {
  console.log(data)
  const res = await privateApi.post(`/free-board/like`, data);
  console.log(res);
  return res;
};

// 자유게시판 게시글 좋아요 취소
export const likeDelete = async (freeboardId:freeboardId) => {
  console.log(freeboardId)
  const res = await privateApi.delete(`/free-board/like/${freeboardId}`);
  console.log(res);
  return res;
};

// 자유게시판 게시글 댓글 리스트
export const freecommentList = async (freeboardId:freeboardId) => {
  console.log(freeboardId)
  const res = await privateApi.get(`/free-board/comment/${freeboardId}`);
  console.log(res);
  return res;
};

// 자유게시판 게시글 댓글 삭제
export const commentDelete = async (commentId:commentId) => {
  console.log(commentId)
  const res = await privateApi.delete(`/free-board/comment/${commentId}`);
  console.log(res);
  return res;
};