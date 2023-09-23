import React, { useState, useEffect } from "react";
import './style.css'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
  Container,
  TitleInput,
  ContentInput,
  FileInput,
  FileBtn,
  Wrapper,
  FileList,
  ButtonBox,
  Button1,
  Button2
} from './FreeBoardCreateBox.style'
import { useNavigate } from "react-router-dom";

// import {freeBoardCreate} from '../../../api/FreeBoard/FreeBoard'

// const preventDefault = (event) => event.preventDefault();

function FreeBoardCreateBox(){

  const navigate = useNavigate();
  // 이미지 파일 저장
  // const [selectedFiles, setSelectedFiles] = useState([]); 
  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState(''); 
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState('')
  


  // 이미지 파일만
  const handleFileSelect = (e) => {
    const files = e.target.files[0];
    // const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
    // setSelectedFiles([...selectedFiles, ...imageFiles]);
    console.log(files)
    setFileName(files.name)
    setFile(files)
  };

  // const handleFileSelect = (e) => {
    // console.log(e.target.files[0])
    // setFile(()=>{return e.target.files[0]})
  //   const files = e.target.files;
  //   const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
  
  //   // 이미지 파일을 미리보기로 표시하는 함수
  //   const displayImagePreview = (imageFile) => {
  //     const reader = new FormData();
  //     reader.onload = (event) => {
  //       const imageDataUrl = event.target.result;
        
  //       // 이미지 데이터 URL을 selectedFiles 상태에 추가
  //       setSelectedFiles(prevSelectedFiles => [...prevSelectedFiles, imageDataUrl]);
  //     };
  
  //     reader.readAsDataURL(imageFile);
  //   };
  
  //   // 이미지 파일을 미리보기로 표시
  //   imageFiles.forEach(displayImagePreview);
  
  //   // 선택한 이미지 파일을 selectedFiles 상태에 추가
  //   setSelectedFiles(prevSelectedFiles => [...prevSelectedFiles, ...imageFiles]);
  // };
  
  



  // 모든 파일
  // const handleFileSelect = (e) => {
  //   const files = e.target.files;
  //   setSelectedFiles([...selectedFiles, ...files]);
  //   setFormData({ ...formData, files: [...formData.files, ...files] });
  // };



  // 해당 파일만 취소
  const removeFile = () => {
    setFile(null)
    setFileName('')
    // const updatedFiles = [...selectedFiles];
    // updatedFiles.splice(index, 1);
    // setSelectedFiles(updatedFiles);

    // const updatedFormData = { ...formData };
    // updatedFormData.files.splice(index, 1);
    // setFormData(updatedFormData);
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
      <hr />
      <ContentInput
          placeholder="내용을 입력하세요."
          onChange={(e) => setContent(e.target.value)}
        />
      <hr />

      <Wrapper>
        <FileBtn>
          업로드
          <FileInput type="file" accept="image/*" onChange={handleFileSelect} multiple />
        </FileBtn>
        <FileList>
          {/* {selectedFiles.map((file, index) => (
            <div key={index} style={{ display: 'flex', margin: '0px 0px 0px 10px' }}>
              <Box
                sx={{
                  typography: 'body1',
                  '& > :not(style) ~ :not(style)': {
                    ml: 2,
                  },
                  maxWidth: '300px', // Set maximum width for the container
                  wordWrap: 'break-word', // Allow text to wrap within the container
                }}
                onClick={preventDefault}
              >
                <Link href="#" color="inherit" >
                  {file.name}
                </Link>
              </Box>
              <HighlightOffIcon
                style={{ margin: '0px 0px 0px 4px', cursor: 'pointer' }}
                onClick={() => removeFile(index)} // Call removeFile function on icon click
              />
            </div>
          ))} */}
          {fileName && (
              <>
                {fileName}
                <HighlightOffIcon
                  style={{ margin: '0px 0px 0px 4px', cursor: 'pointer' }}
                  onClick={() => removeFile()} // Call removeFile function on icon click
                />
              </>
            )}
        </FileList>
      </Wrapper>
    </Container>
    <ButtonBox>
      <Button1 onClick={()=>navigate('/freeboard')}>목록</Button1>
      <Button2 onClick={handleSubmit}>등록</Button2>
    </ButtonBox>

    </>
  )
}
export default FreeBoardCreateBox;
