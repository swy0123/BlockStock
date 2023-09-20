import React, {useState} from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom";

import {
  Container,
  Wrapper,
  Title,
  CommentInput,
  CommentBtn,
  BackBtn
} from './CommentCeate.style'

import {
  LikeBtnBox,
  LikeBtn, 
} from '../FreeBoardItemDetail.style'
import {commentCreate, likeCreate, likeDelete} from '../../../../api/FreeBoard/Comment'

function CommentCreate(props){

  const navigate = useNavigate();
  const [content, setContent] = useState('')
  const isLike = props.state.isLike


  // 댓글 작성 ==========================================
  const data = {
    "freeboardId": props.state.id,
    'content':content
  }
  const handleCreate =()=>{
    console.log(data)
    commentCreate(data)
  }
  // ====================================================


  // 댓글 작성 ==========================================
  const like = {
    "freeboardId": props.state.id,
  }
  const handleLike = () => {
    console.log(like)
    if (isLike) {
      likeDelete(like);
    } else {
      likeCreate(like);
    }
  };
  // ====================================================


  return(
    <>
      <Container>
        <LikeBtnBox>
            <LikeBtn onClick={handleLike}>
              <FavoriteIcon 
              style={{color:'red', margin:'0px 6px 0px 0px', width:'22px'}}
              />
              좋아요
            </LikeBtn>
            <BackBtn onClick={()=>navigate('/freeboard')}>
              목록으로
            </BackBtn>
          </LikeBtnBox>
        <Wrapper>
          <Title>댓글</Title>
          <CommentInput onChange={(e) => setContent(e.target.value)} placeholder="댓글을 작성해주세요"/>
          <CommentBtn onClick={handleCreate}>작성하기</CommentBtn>

        </Wrapper>

      </Container>
    </>
  )
}

export default CommentCreate