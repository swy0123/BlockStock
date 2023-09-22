import React, {useState, ChangeEvent } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { findPw } from "../../api/Auth/login";
import {
  Container,
  Wrapper,
  LoginBox,
  Title,
  SubTitle,
  Input,
  LoginBtn,
  Box,
  Text,
  BackGround,
} from "./FindPw.style";

interface emailProps {
  email: string;
}

function FindPw() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
	setEmail(e.target.value); // setEmail을 사용하여 email 변수를 업데이트
  };

  const handleSubmitMail = async () => {
    const emailProps: emailProps = {
      email: email,
    };
    console.log("정보보내기", emailProps);

    try {
      const response =  await findPw(emailProps);
      if (response?.status === 200) {
        swal("", "임시비밀번호가 발급되었습니다. \n 이메일을 확인해주세요🙂", "success");
      } else {
        console.error("임시 비밀번호 발급 실패.");
      }
    } catch (error) {
      // API 호출 중 오류 발생 시 처리
      console.error("API 호출 중 오류 발생:", error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <LoginBox>
          <Title>Forgot Password?</Title>
          <SubTitle>
            이메일을 통해 임시비밀번호를 발급 받을 수 있습니다.
          </SubTitle>
          <Input placeholder="E-mail" type="email" value={email} onChange={handleEmailChange}></Input>
          <LoginBtn onClick={handleSubmitMail}>확인</LoginBtn>
          <Box>
            <Text onClick={() => navigate("/login")}>↪ Back to Login</Text>
          </Box>
        </LoginBox>
      </Wrapper>
      <BackGround>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          z-index="1"
          width="100%"
          height="180"
          viewBox="0 0 1440 150"
          fill="none"
        >
          <path
            d="M733.638 5.50287C757.15 1.51166 781.011 -0.0380349 804.842 0.878527L1120 13L1345.5 37.5L1440 49.5V81V107.573V150H0L71.7834 79.9258C106.238 46.2918 153.532 29.1655 201.533 32.9408L429.054 50.8357C434.667 51.2772 440.312 51.0935 445.885 50.288L607 27L733.638 5.50287Z"
            fill="#9155FD"
            fill-opacity="0.1"
          />
        </svg>
      </BackGround>
    </Container>
  );
}

export default FindPw;
