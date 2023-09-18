import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';

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
function CommentCreate(){
  return(
    <>
      <Container>
        <LikeBtnBox>
            <LikeBtn>
              <FavoriteIcon style={{color:'red', margin:'0px 6px 0px 0px', width:'22px'}}/>
              좋아요
            </LikeBtn>
            <BackBtn>
              목록으로
            </BackBtn>
          </LikeBtnBox>
        <Wrapper>
          <Title>댓글</Title>
          <CommentInput placeholder="댓글을 작성해주세요"/>
          <CommentBtn>작성하기</CommentBtn>

        </Wrapper>

      </Container>
    </>
  )
}

export default CommentCreate