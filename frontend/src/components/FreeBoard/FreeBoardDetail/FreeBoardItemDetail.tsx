import React, {useState, useEffect} from "react";
import { useNavigate, useLocation } from 'react-router-dom';
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
  ImgBox,
  Img,
  DownloadBox,
  Down,
  DownImg,
  DownBox

} from './FreeBoardItemDetail.style'

import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsIcon from '@mui/icons-material/Sms';

import CommentCreate from "./Comment/CommentCeate";
import CommentList from "./Comment/CommentList";
// 게시글 상세, 삭제
import {freeBoardDetail, freeBoardDelete} from '../../../api/FreeBoard/FreeBoard'
// 리코일 댓글 리스트
import { useRecoilState } from "recoil";
import {commentlist} from '../../../recoil/FreeBoard/Comment'
import { freeBoardList } from "../../../recoil/FreeBoard/FreeBoardList";
import Swal from 'sweetalert2';
// userId
import { useRecoilValue } from 'recoil';
import { CurrentUserAtom } from '../../../recoil/Auth';
// 날짜 변환
import dayjs from "dayjs";
function FreeBoardItemDetail(){

  // userId
  const currentUser = useRecoilValue(CurrentUserAtom);
  const userId = currentUser.userid;

  const navigate = useNavigate();
  const [commentlists, setCommentlists] = useRecoilState(commentlist)
  const [boardItem, setBoardItem] = useRecoilState(freeBoardList)

  const [file, setFile] = useState([])

  // api 통신 ==================================
  // 게시글 번호
  const location = useLocation();
  const state = location.state;

  useEffect(()=>{
    detailApi()
  },[])
  // api 통신 =================================

  const detailApi = async()=>{
    const res = await freeBoardDetail(state.postId)
    console.log(res)
    if (res.status===200){
      setBoardItem(res.data)
      setFile(res.data.fileList)
      // 이미지 파일
      // for (let i = 0;i<=res.data.fileList.length;i++){
      //   if (res.data.fileList[i].type === 'image/png'){
      //     const img = res.data.fileList[i]
      //     console.log(img)
      //     console.log(file,'file')
      //   }
      // }
    }
  }

  // 게시글 삭제
  const handleDelete =()=> {
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
          itemDelete()
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
  
  // 삭제 api
  const itemDelete = async ()=>{
    const res = await freeBoardDelete(state.postId)
    console.log(res)
    if(res.status===200){
      navigate('/freeboard')
      Swal.fire({
        title: '삭제되었습니다',
        icon:'success',
        timer: 1000, // 2초 후에 자동으로 사라집니다 (밀리초 단위)
        showConfirmButton: false, // 확인 버튼을 표시하지 않음
        showCancelButton: false, // 취소 버튼을 표시하지 않음
      })
    }
  }

  // file 다운로드
  // const downloadImage = (file: PostFilesType) => {
  //   console.log(file.path)
  //   fetch(`${file.path}`, {method: 'GET', mode: 'no-cors'})
  //   .then(res => {
  //     return res.blob();
  //   })
  //   .then(blob => {
  //     console.log(blob, 'blob')
  //     const url = window.URL.createObjectURL(blob);
  //     const a = document.createElement('a');
  //     a.href = url;
  //     console.log(url, 'url')
  //     a.download = `${file.filename}`;
  //     document.body.appendChild(a); 
  //     a.click();  
  //     setTimeout(
  //       (_: any) => { window.URL.revokeObjectURL(url); }, 
  //       60000); 
  //     a.remove(); 
  //   })
  //   .catch(err => {
  //     console.error('err: ', err);
  //   })
  // };

  // const downloadImage = (file: PostFilesType) => {
  //   fetch(`${file.path}`, { method: 'GET', mode: 'no-cors' })
  //     .then((response) => response.arrayBuffer())
  //     .then((arrayBuffer) => {
  //       const blob = new Blob([arrayBuffer]);
  //       const url = window.URL.createObjectURL(blob);
  //       const a = document.createElement('a');
  //       a.href = url;
  //       a.download = `${file.fileName}`;
  //       document.body.appendChild(a);
  //       a.click();
  //       window.URL.revokeObjectURL(url);
  //     })
  //     .catch((error) => {
  //       console.error('이미지 다운로드 오류:', error);
  //     });
  // };


  const downloadImage = (file) => {
    fetch(file.path, { method: "GET", mode: "cors" })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = file.fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch((error) => {
        console.error("이미지 다운로드 오류:", error);
      });
  };


  return(
    <>
      <Container>
        <PostTitle>{boardItem.title}</PostTitle>

        <Header>
          <div style={{display:'flex', minWidth:'500px'}}>
            <UserImg src={`https://j9b210.p.ssafy.io:8443/api/member/profile/${boardItem.memberId}`}
              />
            <NickName>{boardItem.nickName}</NickName>
            <Date> {dayjs(boardItem.createdAt).format('YYYY.MM.DD HH:mm')}</Date>
          </div>
          <Box>
            <Hit>
              <div style={{margin:'2px 5px 0px 0px'}}>
                <VisibilityIcon style={{fontSize:'16px'}}/>
              </div>
              <div>
                {boardItem.hit + 1}
              </div>
            </Hit>
            <Like>
              <div style={{margin:'2px 5px 0px 10px'}}>
                <FavoriteBorderIcon style={{fontSize:'16px'}}/>
              </div>
              <div>
                {boardItem.likeCnt}
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
        <DownloadBox>
            {file.map((item,index)=>(
              <DownBox key={index}>
                <DownImg src="/icon/download.png"/>
                <Down href={item.path}
                // onClick={handleDownload}
                onClick={()=>downloadImage(item)}
                download
                target="_blank"
                rel="noopener noreferrer"
                >{item.fileName}</Down>
                {/* <a
                  href={item.path}
                  download // 이걸 적어야 파일을 다운받을 수 있다.
                  target='_blank' //링크된 문서를 새로운 윈도우나 탭(tab)에서 오픈함.
                  rel='noreferrer'
                >{item.fileName}</a> */}
              </DownBox>
            ))}
          </DownloadBox>
        <Wrapper>
          <ContentBox>
            <Content>{boardItem.content}</Content>
          </ContentBox>
          <ImgBox>
            {file.map((item,index)=>(
              <div key={index}>
                <Img 
                src={item.path} 
                />
              </div>
            ))}
          </ImgBox>
          {boardItem.memberId === userId ? (
            <>
            <BtnBox>
              <UpdateBtn onClick={() => navigate('/freeboardupdate')}>수정</UpdateBtn>
              <DeleteBtn onClick={handleDelete}>삭제</DeleteBtn>
            </BtnBox>
            </>
          ) : (
            <></>
          )}
        </Wrapper>
        <Line />
        <CommentCreate state={{ id:state.postId, type:'free' }} />
        <Line />
        <CommentList state={{  id:state.postId, type:'free' }}/>

      </Container>
    </>
  )
}

export default FreeBoardItemDetail