import React, {useEffect} from "react";
import { useLocation } from 'react-router-dom';
  // 더미데이터 =======================================================================
import { useRecoilValue } from "recoil";
import { postidState } from "../../../recoil/FreeBoard/Post";
import { freeBoardList } from '../../../recoil/FreeBoard/FreeBoardList'
import { post } from '../../../recoil/FreeBoard/FreeBoardList'
  // 더미데이터 =======================================================================

import { useNavigate } from "react-router-dom";
import {
  Container,
  PostTitle,
  Header,
  UserImg,
  NickName,
  Date,
  Box,
  Hit,
  Like,
  Comment,
  Wrapper,
  Content,
  DeleteBtn,
  UpdateBtn,
  Line,
  ContentBox,
  BtnBox,
} from './FreeBoardItemDetail.style'

import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsIcon from '@mui/icons-material/Sms';

import CommentCreate from "./Comment/CommentCeate";
import CommentList from "./Comment/CommentList";

// import {freeBoardDetail, freeBoardDelete} from '../../../api/FreeBoard/FreeBoard'

function FreeBoardItemDetail({}){

  const navigate = useNavigate();
  

  // api 통신 ==================================
  // 게시글 번호
  const location = useLocation();
  const state = location.state;

  useEffect(()=>{
    // freeBoardDetail(state.postId)
  },[])
  // api 통신 =================================


  // 게시글 삭제
  const handleDelete =()=> {
    // freeBoardDelete(state.postId)
    // navigate('/freeboard')
  }

  // 더미데이터 =======================================================================
  const postId = useRecoilValue(postidState);
  const boardList = useRecoilValue(freeBoardList);
  const postList = useRecoilValue(post);
  const selectedItem = boardList.find(item => item.freeboard.id === postId);
  const postListItem = postList.find(item => item.memberId === postId);
  const { title, nickname, modifiedAt, hit, id } = selectedItem.freeboard;
  const { likes, content, isLike } = postListItem;
  // 더미데이터 =======================================================================
  


  return(
    <>
      <Container>
        <PostTitle>{title}</PostTitle>

        <Header>
          <div style={{display:'flex', minWidth:'500px'}}>
            <UserImg src="/icon/user_purple.png"/>
            <NickName>{nickname}</NickName>
            <Date>{modifiedAt}</Date>
          </div>

          <Box>
            <Hit>
              <div style={{margin:'2px 5px 0px 0px'}}>
                <VisibilityIcon style={{fontSize:'16px'}}/>
              </div>
              <div>
                {hit}
              </div>
            </Hit>
            <Like>
              <div style={{margin:'2px 5px 0px 10px'}}>
                <FavoriteBorderIcon style={{fontSize:'16px'}}/>
              </div>
              <div>
                {likes}
              </div>
            </Like>
            <Comment>
              <div style={{margin:'2px 5px 0px 10px'}}>
                <SmsIcon style={{fontSize:'16px'}}/>
              </div>
              <div>
                10
              </div>
            </Comment>
          </Box>
        </Header>
        <Line />

        <Wrapper>
          <ContentBox>
            <Content>{content}</Content>
          </ContentBox>
          <BtnBox>
            <UpdateBtn onClick={() => navigate('/freeboardupdate', { state: { 'id':id, 'title':title, 'content':content } })}>수정</UpdateBtn>
            <DeleteBtn onClick={handleDelete}>삭제</DeleteBtn>
          </BtnBox>
        </Wrapper>
        <Line />
        <CommentCreate state={{ id, isLike }} />
        <Line />
        <CommentList state={{ id }}/>

      </Container>
    </>
  )
}

export default FreeBoardItemDetail