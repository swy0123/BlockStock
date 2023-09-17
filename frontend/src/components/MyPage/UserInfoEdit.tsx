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
    height: 707px;
    flex-shrink: 0;  
    border-radius: 13px;
    background: #FFF;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
`;
const Title = styled.p`
    font-size: 23px;
`
const Text = styled.p`
    font-size: 15px;
`
const ProfileBox = styled.div`
    display: flex;
    /* margin-left: 50px; */
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
    width: 125.844px;
    height: 30.204px;
    flex-shrink: 0;
    border-radius: 6px;
    color: #9d6cf9;
    border: 1.5px solid #9a68f7;
    background: linear-gradient(0deg, #FFF 0%, #FFF 100%), #D9D9D9;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);    
`
const Input = styled.input`
    width: 418px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1.5px solid rgba(0, 0, 0, 0.26);
    background: #FFF;
`;
function UserInfoEdit(){
    return(
        <Container>
            <Wrapper>
                <Title>회원 정보 수정</Title>
                <ProfileBox>
                    <Img src="./icon/user4.png"/>
                    <Box>
                        <UploadBtn>Upload</UploadBtn>
                        <Text>png 파일 또는 jpg 파일로 업로드 해주세요.</Text>
                    </Box>
                </ProfileBox>
                <Input></Input>
            </Wrapper>

        </Container>
    );
}

export default UserInfoEdit;