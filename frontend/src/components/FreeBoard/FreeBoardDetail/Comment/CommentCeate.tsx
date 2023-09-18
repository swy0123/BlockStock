import React from "react";

import {
  Container,
  Wrapper,
  Title,
  CommentInput,
  CommentBtn,
} from './CommentCeate.style'
function CommentCreate(){
  return(
    <>
      <Container>
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