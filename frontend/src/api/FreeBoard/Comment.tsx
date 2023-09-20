import { privateApi } from "../index";

// 자유게시판 게시글 생성
export const commentCreate = async (data:data) => {
  console.log(data)
  const res = await privateApi.post(`/free-board`, data);
  console.log(res.data);
  return res.data;
};

// 자유게시판 게시글 좋아요
export const likeCreate = async (data:data) => {
  console.log(data)
  const res = await privateApi.post(`/free-board`, data);
  console.log(res.data);
  return res.data;
};

// 자유게시판 게시글 좋아요 취소
export const likeDelete = async (freeboardId:freeboardId) => {
  console.log(freeboardId)
  const res = await privateApi.delete(`/free-board/like/${freeboardId}`);
  console.log(res.data);
  return res.data;
};

// 자유게시판 게시글 댓글 리스트
export const commentList = async (freeboardId:freeboardId) => {
  console.log(freeboardId)
  const res = await privateApi.get(`/free-board/${freeboardId}/comment`);
  console.log(res.data);
  return res.data;
};

// 자유게시판 게시글 댓글 삭제
export const commentDelete = async (commentId:commentId) => {
  console.log(commentId)
  const res = await privateApi.delete(`/free-board/comment/${commentId}`);
  console.log(res.data);
  return res.data;
};