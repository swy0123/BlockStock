import React, { useState, useEffect } from "react";
import './style.css'
import Swal from 'sweetalert2';

import {
  Container,
  TitleInput,
  ContentInput,
  Wrapper,
  ImgContainer,
  ImgBox,
  FileBtn,
  ButtonBox,
  Button1,
  Button2,
  Line,
  Img,
} from './TacticBoardCreateBox.style'
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { tacticdata } from '../../../recoil/TacticBoard/TacticBoardBox'

import ContestTaticModal from "../../Contest/ContestStore/ExpectedContest/ContestTaticModal";

// 글 작성 api
import {tacticBoardCreate} from '../../../api/TacticBoard/TacticBoard'
// 전략 불러오기 api
import {tacticList} from '../../../api/Contest/ContestStore'

function TacticBoardCreateBox(){

  // 전략 이미지
  const {tacticId, imgPath}  = useRecoilValue(tacticdata);
  const [tacticImg, setTacticImg] = useRecoilState(tacticdata)

  const navigate = useNavigate();
  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState(''); 
  // const [file, setFile] = useState(tacticImg)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tacticBoardTacticList, setTacticBoardTacticList] = useState([])


  useEffect(()=>{
    console.log('id', tacticId)
    console.log('imgPath', imgPath)
    const upData = {...tacticImg,tacticId:-1,imgPath:null}
    setTacticImg(upData)
    tacticApi()
  },[])
  
  // 전략 불러오기
  const tacticApi = async ()=>{
    const data = {
      optionCode : ''
    }
    const res = await tacticList(data)
    setTacticBoardTacticList(res)
  }
  // 글 등록
  const handleSubmit = () => {
    if(tacticId===-1){
      Swal.fire({
        title: '전략을 선택하세요!',
        icon:'error',
        timer: 1000, // 2초 후에 자동으로 사라집니다 (밀리초 단위)
        showConfirmButton: false, // 확인 버튼을 표시하지 않음
        showCancelButton: false, // 취소 버튼을 표시하지 않음
      })
    }else{
      boardcreate()
    }
  };

  // 글 작성 api =====================================================
  const boardcreate = async ()=>{
    const formData = {
      tacticId:tacticId,
      title:title,
      content:content
    };
    // console.log("title:", title);
    // console.log("content:", content);
    // console.log("imgPath:", imgPath);
    console.log('글작성', formData)
    const res = await tacticBoardCreate(formData)
    console.log(res)
    
    if (res.status===200){
      navigate('/tacticboard')
      const updata = {...tacticImg, imgPath:''}
      setTacticImg(updata)
      Swal.fire({
        icon: 'success',
        title: '글 작성 완료!',
        showConfirmButton: false,
        timer: 2000
      })
    }
  }

  // 모달 열고 닫기 ======================================
  const OpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  const CloseModal = () => {
    setIsModalOpen(false);
  };
  // 모달 열고 닫기 ======================================


  return(
    <>
    <Container>
      <TitleInput
            placeholder="제목을 입력하세요."
            onChange={(e) => setTitle(e.target.value )}
          />
      <Line />
      <Wrapper>
        <ImgContainer>
            <ImgBox>
            {imgPath ? 
            (<Img onClick={OpenModal} src={imgPath}/>) :
                (<FileBtn onClick={OpenModal}>
                    전략 선택하기
                </FileBtn>)}
            </ImgBox>
        </ImgContainer>
      <ContentInput
          placeholder="내용을 입력하세요."
          onChange={(e) => setContent(e.target.value)}
        />

      </Wrapper>
      <Line />
    </Container>
    <ButtonBox>
      <Button1 onClick={()=>navigate('/tacticboard')}>목록</Button1>
      <Button2 onClick={handleSubmit}>등록</Button2>
    </ButtonBox>

    {isModalOpen ? <ContestTaticModal type={'tactic'} onClose={CloseModal} contestTacticItem = {tacticBoardTacticList} /> : null}

    </>
  )
}
export default TacticBoardCreateBox;
