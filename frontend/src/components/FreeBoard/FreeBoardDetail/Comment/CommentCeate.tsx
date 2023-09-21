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

// FreeBoard api
import {commentCreate, likeCreate, likeDelete} from '../../../../api/FreeBoard/Comment'

// FreeBoard api
import {tacticcommentCreate, tacticlikeCreate, tacticlikeDelete} from '../../../../api/TacticBoard/Comment'


function CommentCreate(props){

  const navigate = useNavigate();
  const [content, setContent] = useState('')
  const { id, isLike, type } = props.state


  // 댓글 작성 ==========================================

  const handleCreate = () => {
    if (type === 'free') {
      const data = {
        "freeboardId": id,
        'content':content
      }
      commentCreate(data);
    } else if (type === 'tactic') {
      const data = {
        "freeboardId": id,
        'content':content
      }
      tacticcommentCreate(data)
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
    if (type==='free'){
      if (isLike) {
        likeDelete(like);
      } else {
        likeCreate(like);
      }
    } else if (type==='tactic'){
      if (isLike) {
        tacticlikeDelete(like);
      } else {
        tacticlikeCreate(like);
      }
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