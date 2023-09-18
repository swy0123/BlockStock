import React from "react";
import { useRecoilValue } from "recoil";
import { postidState } from "../../../recoil/FreeBoard/Post";
import { freeBoardList } from '../../../recoil/FreeBoard/FreeBoardList'
import { post } from '../../../recoil/FreeBoard/FreeBoardList'
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
  LikeBtn,
  DeleteBtn,
  UpdateBtn,
  Line,
  ContentBox,
  LikeBtnBox,
  BtnBox,
} from './FreeBoardItemDetail.style'

import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsIcon from '@mui/icons-material/Sms';
import FavoriteIcon from '@mui/icons-material/Favorite';

import CommentCreate from "./Comment/CommentCeate";
import CommentList from "./Comment/CommentList";

function FreeBoardItemDetail(){
  const postId = useRecoilValue(postidState);
  const boardList = useRecoilValue(freeBoardList);
  const postList = useRecoilValue(post);

  const selectedItem = boardList.find(item => item.freeboard.id === postId);

  const postListItem = postList.find(item => item.memberId === postId);


  const { title, nickname, modifiedAt, hit } = selectedItem.freeboard;
  const { likes, content, isLike } = postListItem;

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
                <VisibilityIcon/>
              </div>
              <div>
                {hit}
              </div>
            </Hit>
            <Like>
              <div style={{margin:'2px 5px 0px 10px'}}>
                <FavoriteBorderIcon/>
              </div>
              <div>
                {likes}
              </div>
            </Like>
            <Comment>
              <div style={{margin:'2px 5px 0px 10px'}}>
                <SmsIcon/>
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
          <LikeBtnBox>
            <LikeBtn>
              <FavoriteIcon style={{color:'red', margin:'0px 6px 0px 0px', width:'22px'}}/>
              좋아요
            </LikeBtn>
          </LikeBtnBox>
          <BtnBox>
            <DeleteBtn>삭제</DeleteBtn>
            <UpdateBtn>수정</UpdateBtn>
          </BtnBox>
        </Wrapper>
        <Line />
        <CommentCreate/>
        <Line />
        <CommentList/>

      </Container>
    </>
  )
}

export default FreeBoardItemDetail