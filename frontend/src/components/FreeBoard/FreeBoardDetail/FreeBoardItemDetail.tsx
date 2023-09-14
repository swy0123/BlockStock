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
} from './FreeBoardItemDetail.style'

import VisibilityIcon from '@mui/icons-material/Visibility';

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
          <UserImg src="/icon/user_purple.png"/>
          <NickName>{nickname}</NickName>
          <Date>{modifiedAt}</Date>

          <Box>
            <Hit><VisibilityIcon/>{hit}</Hit>
            <Like>{likes}</Like>
            <Comment>10</Comment>
          </Box>
        </Header>
        
      </Container>
    </>
  )
}

export default FreeBoardItemDetail