import { privateApi } from "../index";

// 자유게시판 게시글리스트

export const freeBoardList = async (Params:Params) => {
  console.log(Params)
  const res = await privateApi.get(`/free-board`,{
    params:{
      keyword:Params.keyWord,
      page:Params.page,
      size:Params.size,
      sort:Params.sort
    }
  });
  console.log(res);
  return res
};

// 자유게시판 게시글 생성
export const freeBoardCreate = async (formData: FormData) => {
  const res = await privateApi.post(`/free-board`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }, 
  });
  console.log(res);
  return res;
};


// 자유게시판 게시글 상세페이지
export const freeBoardDetail = async (postId:postId) => {
  console.log(postId)
  const res = await privateApi.get(`/free-board/${postId}`);
  console.log(res);
  return res;
};


// 자유게시판 게시글 삭제
export const freeBoardDelete = async (postId:postId) => {
  console.log(postId)
  const res = await privateApi.delete(`/free-board/${postId}`);
  console.log(res);
  return res;
};


// 자유게시판 게시글 수정
export const freeBoardUpdate = async (formData:formData) => {
  console.log(formData)
  const res = await privateApi.put(`/free-board`,formData,{
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(res);
  return res;
};

