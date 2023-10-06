import { privateApi } from "../index";

// 전략게시판 게시글 생성
export const tacticcommentCreate = async (data:data) => {
  console.log(data)
  const res = await privateApi.post(`/tactic-board/comment`, data);
  console.log(res);
  return res;
};

// 전략게시판 게시글 좋아요
export const tacticlikeCreate = async (data:data) => {
  console.log(data)
  const res = await privateApi.post(`/tactic-board/like`, data);
  console.log(res);
  return res;
};

// 전략게시판 게시글 좋아요 취소
export const tacticlikeDelete = async (boardId:boardId) => {
  console.log(boardId)
  const res = await privateApi.delete(`/tactic-board/like/${boardId}`);
  console.log(res);
  return res;
};

// 전략게시판 게시글 댓글 리스트
export const tacticcommentList = async (tacticPostId:tacticPostId) => {
  console.log(tacticPostId)
  const res = await privateApi.get(`/tactic-board/comment/${tacticPostId}`);
  console.log('댓글 리스트', res);
  return res.data;
};

// 자유게시판 게시글 댓글 삭제
export const tacticcommentDelete = async (commentId:commentId) => {
  console.log(commentId)
  const res = await privateApi.delete(`/tactic-board/comment/${commentId}`);
  console.log(res);
  return res;
};






