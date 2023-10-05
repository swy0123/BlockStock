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
import { freeBoardCreate } from "../../../api/FreeBoard/FreeBoard";
import swal from "sweetalert";

// import {freeBoardCreate} from '../../../api/FreeBoard/FreeBoard'

// const preventDefault = (event) => event.preventDefault();

function FreeBoardCreateBox(){

  const navigate = useNavigate();
  //파일 저장
  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState(''); 
  const [file, setFile] = useState(null)
  const [fileList, setFileList] = useState([]);
  
  const contentInfo = {
    title: title,
    content: content
  }

  // 파일 선택 5개 제한
  const handleFileSelect = (e) => {
    const files = e.target.files;
  const newFileList = [...fileList]; 

  if (newFileList.length + files.length > 5) {
    swal("파일 첨부는 최대 5개까지 가능합니다.");
    return;
  }

  for (let i = 0; i < files.length; i++) {
    newFileList.push(files[i]);
  }
  setFileList(newFileList); 
};

  const removeFile = (name) => {
    const newFileList = fileList.filter((file) => file.name !== name);
    setFileList(newFileList); 
  };
  console.log('현재 파일 목록은?', fileList)

  const handleSubmit = async () => {
    if(contentInfo.title===''){
      swal("", "제목을 입력해주세요!", "warning");
    } else if(contentInfo.content===''){
      swal("", "내용을 입력해주세요!", "warning");
    }else if (fileList.length===0){
      swal("", "파일을 넣어주세요!", "warning");
    }else{
      const formData = new FormData();
      if (fileList.length > 0) {
        console.log('파일 있음')
        for (let i = 0; i < fileList.length; i++) {
          formData.append("files", fileList[i]); // "files"는 서버 측에서 받는 키 이름
        }
        const jsonBlob = new Blob([JSON.stringify(contentInfo)], {
          type: "application/json",
        });
        formData.append("postRequest", jsonBlob);
      }else{
        console.log('파일 빔')
        // formData.append("files", fileList);
        const jsonBlob = new Blob([JSON.stringify(contentInfo)], {
          type: "application/json",
        });
        formData.append("postRequest", jsonBlob);
      }
    
      // fileList의 길이에 따라 서버로 요청을 보냄
      if (formData) {
        console.log('폼데이터 유유유')
        const response = await freeBoardCreate(formData);
        if (response?.status == 200) {
          swal("", "게시글 작성 완료", "success");
          navigate("/freeboard");
        }
      }
    }
  };
// Blob 활용
  // const handleSubmit = async() => {
  //   const formData = new FormData();
  //   for (let i = 0; i < fileList.length; i++) {
  //     formData.append("files", fileList[i]);
  //   }
  //   // 파일 이름 배열JSON 형태의 문자열로 직렬화하여 FormData에 추가
  //   const fileNamesJSON = JSON.stringify(fileList);
  //   const fileNamesBlob = new Blob([fileNamesJSON], { type: "application/json" });
  //   formData.append("fileList", fileNamesBlob);
  
  //   // JSON 데이터를 Blob으로 변환하여 FormData에 추가
  //   const jsonBlob = new Blob([JSON.stringify(contentInfo)], { type: "application/json" });
  //   formData.append("postRequest", jsonBlob);
  //   console.log("Form Data:", formData);
  
  //   if (formData) {
  //       const response = await freeBoardCreate(formData);
  //       if (response?.status == 200){
  //         swal("", "게시글 작성 완료", "success")
  //         navigate("/freeboard")
  //       }
  //     }
  //   }
    // const handleSubmit = async() => {
    //   const formData = new FormData();
    
    //   for (let i = 0; i < fileList.length; i++) {
    //     formData.append("files", fileList[i]); // "files"는 서버 측에서 받는 키 이름
    //   }
    //   const jsonBlob = new Blob([JSON.stringify(contentInfo)], { type: "application/json" });
    //   formData.append("postRequest", jsonBlob);
    
    //   if (formData) {
    //     const response = await freeBoardCreate(formData);
    //     if (response?.status === 200) {
    //       swal("", "게시글 작성 완료", "success");
    //       navigate("/freeboard");
    //     }
    //   }
    // }
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
          <FileInput type="file" onChange={handleFileSelect} multiple />
        </FileBtn>
        <FileList>
            {fileList.map((file, index) => (
              <div key={index}>
                {file.name}
                <HighlightOffIcon
                  style={{ 
                    margin: "0px 17px 0px 4px", 
                    cursor: "pointer",
                    opacity: "40%", }}
                  onClick={() => removeFile(file.name)} // 파일 이름으로 삭제
                />
              </div>
            ))}
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
