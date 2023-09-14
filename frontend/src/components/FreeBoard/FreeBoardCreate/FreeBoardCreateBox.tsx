import React, { useState } from "react";
import './style.css'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';import {
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

const preventDefault = (event) => event.preventDefault();

function FreeBoardCreateBox(){
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]); // State to store selected files
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    files: [],
  });
  const handleFileSelect = (e) => {
    const files = e.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
    setFormData({ ...formData, files: [...formData.files, ...files] });
  };

  const removeFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);

    const updatedFormData = { ...formData };
    updatedFormData.files.splice(index, 1);
    setFormData(updatedFormData);
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    navigate("/freeboard");
  };

  return(
    <>
    <Container>
      <TitleInput
            placeholder="제목을 입력하세요."
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
      <hr />
      <ContentInput
          placeholder="내용을 입력하세요."
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        />
      <hr />

      <Wrapper>
        <FileBtn>
          업로드
          <FileInput type="file" onChange={handleFileSelect} multiple />
        </FileBtn>
        <FileList>
          {selectedFiles.map((file, index) => (
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
