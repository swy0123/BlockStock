import React, {useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsIcon from '@mui/icons-material/Sms';
import DownloadIcon from '@mui/icons-material/Download';

import Swal from 'sweetalert2';

import CommentCreate from "../../FreeBoard/FreeBoardDetail/Comment/CommentCeate";
import CommentList from "../../FreeBoard/FreeBoardDetail/Comment/CommentList";
import Tooltip from "../../Tooltip/Tooltip";
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
    UserInfo,
    DownloadBtn
  } from './TacticBoardItemDetail.style'

// 상세페이지 api 호출
import {tacticBoardDetail, tacticBoardDelete} from '../../../api/TacticBoard/TacticBoard'
// 댓글 recoil 
import { useRecoilState } from "recoil";
import {commentlist} from '../../../recoil/FreeBoard/Comment'
import {tacticBoardList} from '../../../recoil/TacticBoard/TacticBoardBox'
// userId
import { useRecoilValue } from 'recoil';
import { CurrentUserAtom } from '../../../recoil/Auth';
// 날짜 변환
import dayjs from "dayjs";


function TacticBoardItemDetail(){

    // userId
    const currentUser = useRecoilValue(CurrentUserAtom);
    const userId = currentUser.userid;

    const [commentlists, setCommentlists] = useRecoilState(commentlist)
    const [boardItem, setBoardItem] = useRecoilState(tacticBoardList)

    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;
    const {
        // contestReturnStatus,
        // contestReturns,
        createdAt,
        hit,
        isLike,
        likeCnt,
        tacticPostId,
        // testReturns,
        title
    } = state.post

    const [data, setData] = useState({})

    useEffect(()=>{
        console.log(boardItem,'boardItem')
        detailApi()
    },[])

    useEffect(()=>{
        setData(boardItem)
    },[boardItem])

    const detailApi = async()=>{
        const res = await tacticBoardDetail(tacticPostId)
        console.log(res)
        setBoardItem(res.data)
        setData(res.data)
    }

    // 삭제
    const handleDelete = ()=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            // title: '삭제?',
            // text: "You won't be able to revert this!",
            text: '정말 삭제하시겠습니까?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: `<span>삭제</span>`,
            cancelButtonText: '<span>취소</span>',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                // tacticBoardDelete(state.postId)
                tacticBoardDelete(29)
                navigate('/tacticboard')
              swalWithBootstrapButtons.fire({
                title: '삭제되었습니다',
                icon:'success',
                timer: 1000, // 2초 후에 자동으로 사라집니다 (밀리초 단위)
                showConfirmButton: false, // 확인 버튼을 표시하지 않음
                showCancelButton: false, // 취소 버튼을 표시하지 않음
              })
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: '취소되었습니다',
                icon:'error',
                timer: 1000, // 2초 후에 자동으로 사라집니다 (밀리초 단위)
                showConfirmButton: false, // 확인 버튼을 표시하지 않음
                showCancelButton: false, // 취소 버튼을 표시하지 않음
              })
              }
            })
    }

    // 파일 다운 ==================================================
    const jsonData = { // JSON 데이터 예시
        name: 'John',
        age: 30,
        city: 'New York'
      };
    
      // JSON 데이터를 문자열로 변환
      const jsonString = JSON.stringify(jsonData, null, 2);
    
      // Blob 객체 생성
      const blob = new Blob([jsonString], { type: 'application/json' });
    
      // 파일 다운로드 함수
      const downloadFile = () => {
        // Blob 객체를 URL로 변환
        const url = window.URL.createObjectURL(blob);
    
        // 다운로드 링크 생성
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.json'; // 파일명 설정
        a.click();
    
        // URL 객체 해제
        window.URL.revokeObjectURL(url);
      };
      
    return(
        <>
            <Container>
                <PostTitle>{title}</PostTitle>

                <Header>
                    <UserInfo>
                        <Tooltip type={'detail'}>
                            <div style={{display:'flex'}}>
                            <UserImg src="/icon/user_purple.png"/>
                            <NickName>{data.nickname}</NickName>
                            </div>
                        </Tooltip>
                        <Date>
                            {dayjs(createdAt).format('YYYY.MM.DD HH:mm')}
                        </Date>
                    </UserInfo>

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
                        {data.likeCnt}
                    </div>
                    </Like>
                    <Comment>
                    <div style={{margin:'2px 5px 0px 10px'}}>
                        <SmsIcon style={{fontSize:'16px'}}/>
                    </div>
                    <div>
                        {commentlists.length}
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
                            <DownloadBtn onClick={downloadFile}>
                                <DownloadIcon/>
                            </DownloadBtn>
                        </ImgBox>
                    </ContentImg>
                    {/* 줄바꿈 적용 넘어갈 경우 다음 줄로 */}
                    <Content style={{ whiteSpace: 'pre-line',wordWrap: 'break-word' }}>
                        {/* {data.content} */}
                    </Content>
                </ContentBox>
                <Line style={{margin:'0px 0px 0px 0px'}}/>

                {data.memberId === userId ? (
                    <BtnBox>
                        <DeleteBtn onClick={handleDelete}>삭제</DeleteBtn>
                    </BtnBox>
                ) : (
                    <></>
                )}
                </Wrapper>
                <Line />
                    <CommentCreate state={{ id :tacticPostId, isLike:isLike , type:'tactic' }}/>
                <Line />
                <CommentList state={{ id :tacticPostId, type:'tactic' }}/>
            </Container>
        </>
    )
}

export default TacticBoardItemDetail