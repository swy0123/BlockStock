import React from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsIcon from '@mui/icons-material/Sms';

import CommentCreate from "../../FreeBoard/FreeBoardDetail/Comment/CommentCeate";
import CommentList from "../../FreeBoard/FreeBoardDetail/Comment/CommentList";

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
    ContentImg,
    ImgBox,
    Img,
    DeleteBtn,
    Line,
    ContentBox,
    BtnBox,
  } from './TacticBoardItemDetail.style'

function TacticBoardItemDetail(){

    const navigate = useNavigate();


    //더미데이터
    const data = {
        'id': 1,
        "title": "제목입니다",
        "profileImageUrl": "",
        "imgPath": "",
        "content": "내용입니다",
        "hit": 2,
        "likeCnt": 3,
        "commentCnt": 2,
        "createdAt": "2023-09-07 15:18:00",
        "nickname": "하진",
        "isLike": true
    }

    // 삭제
    const handleDelete = ()=>{

    }

    return(
        <>
            <Container>
                <PostTitle>{data.title}</PostTitle>

                <Header>
                <div style={{display:'flex', minWidth:'500px'}}>
                    <UserImg src="/icon/user_purple.png"/>
                    <NickName>{data.nickname}</NickName>
                    <Date>{data.createdAt}</Date>
                </div>

                <Box>
                    <Hit>
                    <div style={{margin:'2px 5px 0px 0px'}}>
                        <VisibilityIcon style={{fontSize:'16px'}}/>
                    </div>
                    <div>
                        {data.hit}
                    </div>
                    </Hit>
                    <Like>
                    <div style={{margin:'2px 5px 0px 10px'}}>
                        <FavoriteBorderIcon style={{fontSize:'16px'}}/>
                    </div>
                    <div>
                        {data.likeCnt}
                    </div>
                    </Like>
                    <Comment>
                    <div style={{margin:'2px 5px 0px 10px'}}>
                        <SmsIcon style={{fontSize:'16px'}}/>
                    </div>
                    <div>
                        {data.commentCnt}
                    </div>
                    </Comment>
                </Box>
                </Header>
                <Line />

                <Wrapper>

                <ContentBox>
                    <ContentImg>
                        <ImgBox>
                            <Img src="/icon/전략블록.png"/>
                        </ImgBox>
                    </ContentImg>
                    <Content>{data.content}</Content>
                </ContentBox>
                <Line style={{margin:'0px 0px 0px 0px'}}/>


                <BtnBox>
                    <DeleteBtn onClick={handleDelete}>삭제</DeleteBtn>
                </BtnBox>
                </Wrapper>
                <Line />
                    <CommentCreate state={{ id :data.id, isLike:data.isLike , type:'tactic' }}/>
                <Line />
                <CommentList state={{ id :data.id, type:'tactic' }}/>
            </Container>
        </>
    )
}

export default TacticBoardItemDetail