import React, { useState, useEffect } from "react";
import './style.css'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import {
  Container,
  TitleInput,
  ContentInput,
  Wrapper,
  ImgContainer,
  ImgBox,
  FileBtn,
  FileInput,
  ButtonBox,
  Button1,
  Button2,
  Line,
} from './TacticBoardCreateBox.style'
import { useNavigate } from "react-router-dom";


// const preventDefault = (event) => event.preventDefault();

function TacticBoardCreateBox(){

  const navigate = useNavigate();
  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState(''); 
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState('')
  


  // 이미지 파일만
  const handleFileSelect = (e) => {
    const files = e.target.files[0];
    // const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
    console.log(files)
    setFileName(files.name)
    setFile(files)
  };



  // 글 등록
  const handleSubmit = () => {

    const formData = new FormData();
    formData.append('file', file)

    formData.append('title', new Blob([JSON.stringify(title)], {
      type: "application/json"
    }));
    formData.append('content', new Blob([JSON.stringify(content)], {
      type: "application/json"
    }));

    console.log("title:", title);
    console.log("content:", content);
    console.log("file:", file);
    console.log("Form Data:", formData);
    // freeBoardCreate(formData)
    // navigate("/freeboard");
  };



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
                <FileBtn>
                    전략 선택하기
                    <FileInput type="file" accept="image/*" onChange={handleFileSelect} multiple />
                </FileBtn>
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

    </>
  )
}
export default TacticBoardCreateBox;
