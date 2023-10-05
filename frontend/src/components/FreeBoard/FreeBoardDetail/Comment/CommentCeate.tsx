import React, {useState, useEffect} from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
import {commentCreate, likeCreate, likeDelete, freecommentList} from '../../../../api/FreeBoard/Comment'

// tacticBoard api
import {tacticcommentList, tacticcommentCreate, tacticlikeCreate, tacticlikeDelete} from '../../../../api/TacticBoard/Comment'
// 리코일 댓글 리스트
import { useRecoilState } from "recoil";
import {commentlist} from '../../../../recoil/FreeBoard/Comment'
import {tacticBoardList} from '../../../../recoil/TacticBoard/TacticBoardBox'
import {freeBoardList} from '../../../../recoil/FreeBoard/FreeBoardList'

function CommentCreate(props){

  const [commentlists, setCommentlists] = useRecoilState(commentlist)
  const [boardList, setBoardList] = useRecoilState(tacticBoardList)
  const [freeboardList, setFreeBoardList] = useRecoilState(freeBoardList)

  const navigate = useNavigate();
  const [content, setContent] = useState('')
  const { id, isLike, type } = props.state

  // 좋아요
  const [like, setLike] = useState(null)

  useEffect(()=>{
    if(type==='free'){
      setLike(freeboardList.like)
    } else if (type==='tactic'){
      console.log(boardList.isLike, 'boardList.isLike')
      setLike(boardList.isLike)
    }
  },[])

  // 댓글 작성 ==========================================
  const handleCreate = () => {
    console.log(id, isLike, type,'id, isLike, type')
    if (type === 'free') {
      freecomment()
    } else if (type === 'tactic') {
      tacticcreateapi()
    }
    setContent('')
  }
  // ====================================================

  // 자유 댓글 작성=======================================
  const freecomment = async ()=>{
    const data = {
      "freeBoardId": id,
      'content':content
    }
    const res = await commentCreate(data)
    console.log(res)
    if(res.status===200){
      freecommentlistapi()
    }
  }

  // 자유 댓글 리스트 호출 ===============================
  const freecommentlistapi = async ()=>{
    const res = await freecommentList(id)
    console.log(res)
    setCommentlists(res.data)
  }

  useEffect(()=>{
    console.log('좋아요 boardList.isLike', boardList.isLike)
    setLike(boardList.isLike)
  },[boardList.isLike])

  useEffect(()=>{
    console.log('좋아요 freeboardList.isLike', freeboardList.like)
    setLike(freeboardList.like)
  },[freeboardList.like])


  // 전략 댓글 작성 ======================================
  const tacticcreateapi = async()=>{
    const data = {
      "tacticBoardId": id,
      'content':content
    }
    const res = await tacticcommentCreate(data)
    console.log(res)
    if(res.status===200){
      tacticcommentlistapi()
    }
  }


  // 댓글 목록 호출 =========================================
  const tacticcommentlistapi = async ()=>{
    const res = await tacticcommentList(id)
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
    let likeId = {};
    if (type==='free'){      
      likeId = {
        "freePostId": id,
      }
    } else {
      likeId = {
        "tacticPostId": id,
      }
    }
    if (type==='free'){
      if (like) {
        freelikecancel();
      } else {
        freelike(likeId);
      }
    } else if (type==='tactic'){
      if (like) {
        likecancel();
      } else {
        likecheck(likeId);
      }
    }
  };
  // ====================================================

  // 자유 좋아요
  const freelike = async(likeId)=>{
    console.log(like,'좋아요')
    const res = await likeCreate(likeId)
    console.log(res)
    if(res.status===200){
      const updatedBoardList = {
        ...freeboardList, // 기존 상태 복사
        like: !freeboardList.like, // isLike 업데이트
        likeCnt: freeboardList.likeCnt + 1, // likeCnt 업데이트
      };
      setFreeBoardList(updatedBoardList)
    }
  }
  // 자유 좋아요 취소
  const freelikecancel = async ()=>{
    const res = await likeDelete(id)
    console.log(res)
    if(res.status===200){
      const updatedBoardList = {
        ...freeboardList, // 기존 상태 복사
        like: !freeboardList.like, // isLike 업데이트
        likeCnt: freeboardList.likeCnt - 1, // likeCnt 업데이트
      };
      setFreeBoardList(updatedBoardList)
    }
  }

  //  전략 좋아요 취소
  const likecancel = async ()=>{
    console.log(like,'좋아요 취소')
    const res = await tacticlikeDelete(id);
    console.log(res,'좋아요 취소')
    console.log(boardList,'좋아요 취소')
    const updatedBoardList = {
      ...boardList, // 기존 상태 복사
      isLike: !boardList.isLike, // isLike 업데이트
      likeCnt: boardList.likeCnt - 1, // likeCnt 업데이트
    };
    setBoardList(updatedBoardList)
    console.log(boardList,'좋아요 취소')
  }
  // 전략 좋아요 
  const likecheck = async (likeId)=>{
    console.log(like,'좋아요 확인')
    const res = await tacticlikeCreate(likeId);
    console.log(res,'좋아요 확인')
    console.log(boardList,'좋아요 확인')
    const updatedBoardList = {
      ...boardList, // 기존 상태 복사
      isLike: !boardList.isLike, // isLike 업데이트
      likeCnt: boardList.likeCnt + 1, // likeCnt 업데이트
    };
    setBoardList(updatedBoardList)
    console.log(boardList,'좋아요 확인')
  }


  return(
    <>
      <Container>
        <LikeBtnBox>
            <LikeBtn onClick={handleLike}>
              {like ? (
                <img src="/icon/하트.png" style={{position:'relative', left:'-3px', margin:'0px 5px 0px 3px'}}/>
                ) : (
                <FavoriteBorderIcon style={{margin:'0px 6px 0px 0px', width:'22px'}}/>
              )}
              <span>좋아요</span>
            </LikeBtn>
            <BackBtn onClick={handleNavigate}>
              목록으로
            </BackBtn>
          </LikeBtnBox>
        <Wrapper>
          <Title>댓글</Title>
          <CommentInput onChange={(e) => setContent(e.target.value)} value={content} placeholder="댓글을 작성해주세요"/>
          <CommentBtn onClick={handleCreate}>작성하기</CommentBtn>

        </Wrapper>

      </Container>
    </>
  )
}

export default CommentCreate