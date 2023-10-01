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

// 자유게시판 댓글 api
import {commentList, commentDelete} from '../../../../api/FreeBoard/Comment'

// 전략게시판 댓글 api
// import { tacticcommentList,tacticcommentDelete } from '../../../../api/TacticBoard/Comment'


function CommentList(props) {
  // 더미데이터
  const comment = useRecoilValue(commentlist);

  const { id, type } = props.state


  // 댓글 리스트 api 호출
  // useEffect(()=>{
  //   comments()
  // },[])
  
  // const comments =()=>{
  //   if (type==='free'){
  //     commentList(id)
  //   } else if ( type==='tactic'){
  //     tacticcommentList(id)
  //   }
  // }
  // ============================================


  // 댓글 삭제
  // const handleDelete = (id) => {
  //   if (type==='free'){
  //     console.log(id);
  //     commentDelete(id);
  //   }else if (type==='tactic'){
  //     tacticcommentDelete(id)
  //   }
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
                <div style={{ display: 'flex', width: '500px' }}>
                  <UserImg src="/icon/user_purple.png" />
                  <NickName>{item.nickName}</NickName>|
                  <Day>{item.createdAt}</Day>
                </div>
                <DeleteBtn onClick={() => handleDelete(item.commentId)}>삭제</DeleteBtn>
              </Header>
               {/* 줄바꿈 적용 넘어갈 경우 다음 줄로 */}
              <Comment style={{ whiteSpace: 'pre-line',wordWrap: 'break-word' }}>
                {item.content}
              </Comment>
              <hr style={{ border: '1px solid #F4F1F1' }} />
            </div>
          ))
        )}
      </Container>
    </>
  )
}

export default CommentList
