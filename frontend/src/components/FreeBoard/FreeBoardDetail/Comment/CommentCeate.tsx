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
  const { id, isLike, type } = props.state


  // 댓글 작성 ==========================================
  const data = {
    "freeboardId": id,
    'content':content
  }

  const handleCreate = () => {
    console.log(data);
    if (type === 'free') {
      commentCreate(data);
    } else if (type === 'tactic') {
      console.log(data);
    }
  }
  // ====================================================

  // 목록으로 ===========================================
  const handleNavigate = ()=>{
    console.log(id,type)
    if (type==='free'){
      navigate('/freeboard')
    } else if (type==='tactic'){
      navigate('/tacticboard')
    }
  }
  // 목록으로 ===========================================


  // 좋아요 ==========================================
  const like = {
    "freeboardId": id,
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
            <BackBtn onClick={handleNavigate}>
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