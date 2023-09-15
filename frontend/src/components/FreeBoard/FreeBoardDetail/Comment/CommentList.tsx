import React from "react";
import { useRecoilValue } from "recoil";
import {commentlist} from '../../../../recoil/FreeBoard/Comment'
import {
  Container,
  Header,
  UserImg,
  NickName,
  Day,
  DeleteBtn,
  Comment,
} from './CommentList.style'

function CommentList(){
  const comment = useRecoilValue(commentlist);

  return(
    <>
      <Container>
        {comment.map((item,index)=>(
          <div key={index}>
            <Header>
              <div style={{display:'flex', width:'330px'}}>
                {/* <UserImg src={item.profileImage}/> */}
                <UserImg src="/icon/user_purple.png"/>
                <NickName>{item.nickName}</NickName>|
                <Day>{item.createdAt}</Day>
              </div>
              <DeleteBtn>삭제</DeleteBtn>
            </Header>
            <Comment>{item.content}</Comment>
            <hr style={{border:'1px solid #F4F1F1'}}/>
          </div>
        ))}
        
      </Container>
    </>
  )
}

export default CommentList