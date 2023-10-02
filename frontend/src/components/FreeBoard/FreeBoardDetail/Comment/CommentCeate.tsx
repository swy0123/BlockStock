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

// tacticBoard api
import {tacticcommentList, tacticcommentCreate, tacticlikeCreate, tacticlikeDelete} from '../../../../api/TacticBoard/Comment'

// 리코일 댓글 리스트
import { useRecoilState } from "recoil";
import {commentlist} from '../../../../recoil/FreeBoard/Comment'

function CommentCreate(props){

  const [commentlists, setCommentlists] = useRecoilState(commentlist)
  const navigate = useNavigate();
  const [content, setContent] = useState('')
  const { id, isLike, type } = props.state


  // 댓글 작성 ==========================================

  const handleCreate = () => {
    console.log(id, isLike, type)
    if (type === 'free') {
      const data = {
        "freeboardId": id,
        'content':content
      }
      commentCreate(data);
    } else if (type === 'tactic') {
      tacticcreateapi()
    }
  }
  // ====================================================

  // 전략 댓글 작성 =========================================
  const tacticcreateapi = async()=>{
    const data = {
      "tacticBoardId": '10',
      'content':content
    }
    const res = await tacticcommentCreate(data)
    console.log(res)
    if(res.status===200){
      listapi()
    }
  }

  // 댓글 목록 호출 =========================================
  const listapi = async ()=>{
    const res = await tacticcommentList(10)
    console.log('작성 성공', res)
    setCommentlists(res)
  }

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
  const handleLike = () => {
    let like = {};
    if (type==='free'){      
      like = {
        "freeboardId": id,
      }
    } else {
      like = {
        "tacticPostId": 10,
      }
    }
    if (type==='free'){
      if (isLike) {
        likeDelete(like);
      } else {
        likeCreate(like);
      }
    } else if (type==='tactic'){
      if (!isLike) {
        tacticlikeDelete(10);
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