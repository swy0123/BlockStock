import React, {useEffect} from "react";
import { useRecoilValue } from "recoil";
import { commentlist } from '../../../../recoil/FreeBoard/Comment'
import {
  Container,
  Header,
  UserImg,
  NickName,
  Day,
  DeleteBtn,
  Comment,
  Title
} from './CommentList.style'

// import {commentList, commentDelete} from '../../../../api/FreeBoard/Comment'


function CommentList(props) {
  // 더미데이터
  const comment = useRecoilValue(commentlist);

  const freeboardId  = props.state.id


  // 댓글 리스트 api 호출
  // useEffect(()=>{
  //   comments()
  // },[])
  
  // const comments =()=>{
  //   commentList(freeboardId)
  // }
  // ============================================


  // 댓글 삭제
  // const handleDelete = (id) => {
  //   console.log(id);
  //   commentDelete(id);
  // };

  return (
    <>
      <Container>
        {comment.length === 0 ? (
          <Title>댓글이 없습니다.</Title>
        ) : (
          comment.map((item, index) => (
            <div key={index}>
              <Header>
                <div style={{ display: 'flex', width: '790px' }}>
                  <UserImg src="/icon/user_purple.png" />
                  <NickName>{item.nickName}</NickName>|
                  <Day>{item.createdAt}</Day>
                </div>
                <DeleteBtn onClick={() => handleDelete(item.commentId)}>삭제</DeleteBtn>
              </Header>
              <Comment>{item.content}</Comment>
              <hr style={{ border: '1px solid #F4F1F1' }} />
            </div>
          ))
        )}
      </Container>
    </>
  )
}

export default CommentList
