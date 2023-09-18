import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-left: -150px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 562px;
    /* height: 707px; */
    flex-shrink: 0;  
    border-radius: 13px;
    background: #FFF;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
    margin-top: 5px;
    margin-bottom: 50px;
`;
const Title = styled.p`
    font-size: 23px;
`
const Text = styled.p`
    font-size: 12px;
`
const ProfileBox = styled.div`
    display: flex;
    margin-bottom: 10px;

`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`
const Img = styled.img`
  width  : 100px;
  height: 100px;
  margin-right: 30px;
  opacity: 60%;
`;
const UploadBtn = styled.button`
    width: 125px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 6px;
    font-weight: 500;
    color: #9d6cf9;
    border: 2px solid #9a68f7;
    background: linear-gradient(0deg, #FFF 0%, #FFF 100%), #D9D9D9;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);      
    cursor: pointer;
`
const InputTitle = styled.p`
    background-color: white;
    font-size: 13px;
    color: gray;
    z-index: 5;
    padding: 10px;
    margin-left: -250px;
    text-align: start;
    justify-content: start;
`
const Input = styled.input`
    width: 400px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1.5px solid rgba(0, 0, 0, 0.26);
    background: #FFF;
    margin-top: -30px;
    padding-left: 20px;
`;

const SubmitBtn = styled.button`
    width: 188px;
    height: 33px;
    flex-shrink: 0;
    border: 0;
    border-radius: 6px;
    background: #9155FD;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
    margin-right: 10px;
    margin-top: 30px;
    color: white;
`;
const CancleBtn = styled.button`
    width: 188px;
    height: 33px;
    flex-shrink: 0;
    border: 0;
    border-radius: 6px;
    background: #f5f4f7;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
    margin-left: 10px;
    margin-top: 30px;
`;
const Withdraw = styled.p`
    font-size: 13px;
    color: #9155FD;
    margin-left: 350px;
    margin-top: 20px;
    margin-bottom: 50px;
`;

function UserInfoEdit(){
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const handleImageUpload = () => {
      // 파일 선택 대화 상자 열기
      fileInputRef.current.click();
    };

    const handleFileSelected = (event) => {
      const file = event.target.files[0];
      if (file) {
        // 선택한 파일을 서버에 업로드하거나 다른 처리를 수행
        // 여기에서는 선택한 파일의 정보를 출력하는 예제 코드
        console.log("Selected file:", file);
      }
    };

    return(
        <Container>
            <Wrapper>
                <Title>회원 정보 수정</Title>
                <ProfileBox>
                    <Img src="./icon/user4.png"/>
                    <Box>
                    <UploadBtn onClick={handleImageUpload}>Upload</UploadBtn>
                        <input
                          type="file"
                          accept=".jpg, .png"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          onChange={handleFileSelected}
                        />
                        <Text>png 파일 또는 jpg 파일로 업로드 해주세요.</Text>
                    </Box>
                </ProfileBox>
                <InputTitle>Nickname</InputTitle>
                <Input placeholder=""/>
                <InputTitle>E-mail</InputTitle>
                <Input placeholder=""/>
                <InputTitle>Password</InputTitle>
                <Input placeholder=""/>
                <InputTitle>Check Password</InputTitle>
                <Input placeholder=""/>
                <ProfileBox>
                    <SubmitBtn>✔ 완료</SubmitBtn>
                    <CancleBtn onClick={()=>navigate(-1)}>취소</CancleBtn>
                </ProfileBox>
                <Withdraw>회원 탈퇴</Withdraw>
            </Wrapper>

        </Container>
    );
}

export default UserInfoEdit;