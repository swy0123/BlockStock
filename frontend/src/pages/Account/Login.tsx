import React, {
  ChangeEvent,
  FormEvent,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import axios from "axios";
import { postLogin } from "../../api/Auth/login";
import swal from "sweetalert";
import { useRecoilState } from "recoil";
import { CurrentUserAtom, LoginState } from "../../recoil/Auth";
import {
  Container,
  Wrapper,
  LoginBox,
  LogoImg,
  Input,
  Title,
  Box,
  Text,
  LoginBtn,
  Hr,
  P,
  Box1,
  BackGround,
} from "./Login.style";

interface LoginProps {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useRecoilState(LoginState);
  const [currentUser, setCurrentUser] = useRecoilState(CurrentUserAtom);

  const handleEmailField = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 40) {
      e.target.value = e.target.value.slice(0, 40);
    }
    setEmail(e.target.value.split(" ").join(""));
  };

  const handlePasswordField = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 40) {
      e.target.value = e.target.value.slice(0, 40);
    }
    setPassword(e.target.value.split(" ").join(""));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "" || password === "") {
      await swal("", "이메일과 비밀번호를 입력해주세요.", "info");
      return;
    }

    const LoginProps: LoginProps = {
      email: email,
      password: password,
    };

    const userinfo = await postLogin(LoginProps);

    // 로그인 통신
    if (userinfo) {
      setIsLogin(true); // 로그인 여부 아톰에 저장
      setCurrentUser(userinfo); // 유저 정보 아톰에 저장
      swal("", "로그인에 성공했습니다", "success");
      navigate('/')
    } else {
      console.log("fail");
      await swal("로그인에 실패하였습니다");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Box1>
          <form onSubmit={handleSubmit}>
            <LoginBox>
              <LogoImg src="./icon/logo.png" onClick={()=> navigate("/")}/>
              <Title>Welcome to Block Stock!</Title>
              <Input
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={handleEmailField}
              ></Input>
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={handlePasswordField}
              ></Input>
              <Box>
                <Text onClick={() => navigate("/findpw")}>find Password</Text>
              </Box>
              <LoginBtn type="submit">Log in</LoginBtn>
              <Hr />
              <P>or</P>
              <Text onClick={() => navigate("/signup")}>Sign up</Text>
            </LoginBox>
          </form>
        </Box1>
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

export default Login;
