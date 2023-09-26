// import React, { ChangeEvent, FormEvent, useCallback, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import Swal from 'sweetalert2';
import swal from "sweetalert";
import { useNavigate } from "react-router";
import { postJoin, postmail, checkmail } from "../../api/Auth/Join";
import {
  Container,
  BackGround,
  Wrapper,
  LoginBox,
  LogoImg,
  Title,
  Input,
  MailBox,
  MailBtn,
  MailInput,
  Text,
  Box,
  SignupBtn,
  ErrorMessage,
} from "./SignUp.style";

function SignUp() {
  const navigate = useNavigate();

  // watch 함수를 사용을 위한 useForm 훅을 초기화
  const {
    watch,
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const nickname: string = watch("nickname");
  const email: string = watch("email");
  const password: string = watch("password");
  // const checkpassword: string = watch("checkpassword");
  const code: string = watch("code");

  const userData = {
    email: email,
    password: password,
    nickname: nickname,
  };

  const authMail = {
    email: email,
    code: code,
  };
  const enterEmail = {
    email: email,
  };

  const handleMailSend = async () => {
      const response = await postmail(enterEmail);
      console.log(response);
  };

  const handleAuthMail = async () => {
    console.log("코드다", code);
    if (code) {
      try {
        const authResult = await checkmail(authMail);
        console.log(authResult);
        swal("", "이메일 인증이 완료되었습니다.", "success");
      } catch (error) {
        console.error("인증번호 틀림", error);
        swal("잘못된 인증번호 입니다. ⚠️");
        return;
      }
    } else {
      swal("인증번호를 입력해주세요. ⚠️");
      return;
    }
  };

  const onSubmit = async () => {
    if (!password) {
      swal("", "비밀번호를 입력해주세요","info");
      return;
    }
      // 회원가입 API 요청
      const signUpResult = await postJoin(userData);
      console.log("Sign-up:", signUpResult);
      if (signUpResult?.status == 200){
      swal("Success", "회원가입 성공 ✔️ \n 로그인 페이지로 이동합니다.", "success");
      navigate("/login");
      } else {
      console.log("Sign-up error");
      swal("Error", "회원가입 실패 \n 중복된 이메일 입니다.", "error");
      }
    };

  return (
    <Container>
      <Wrapper>
        <LoginBox>
          <form onSubmit={handleSubmit(onSubmit)}>
            <LogoImg src="./icon/logo.png" onClick={()=> navigate("/")} />
            <Title>With Block Stock :)</Title>
            <Input
              placeholder="NickName"
              {...register("nickname", {
                required: "아이디를 입력해주세요.",
              })}
              onChange={(e) => {
                setValue("nickname", e.target.value);
                clearErrors("nickname");
              }}
              // onBlur={handleIdCheck}
            ></Input>

            <MailBox>
              <MailInput
                placeholder="E-mail"
                {...register("email", {
                  required: "이메일을 입력해주세요.",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: "올바른 이메일 형식이 아닙니다.",
                  },
                })}
                onChange={(e) => {
                  setValue("email", e.target.value);
                  clearErrors("email");
                }}
                // onBlur={handleEmailCheck}
              ></MailInput>
              <MailBtn type="button" onClick={handleMailSend}>
                발송
              </MailBtn>
            </MailBox>
            <MailBox>
              <MailInput
                placeholder="인증번호"
                onChange={(e) => {
                  setValue("code", e.target.value);
                  clearErrors("code");
                }}
              ></MailInput>
              <MailBtn type="button" onClick={handleAuthMail}>
                인증
              </MailBtn>
            </MailBox>
            <Input
              placeholder="Password"
              type="password"
              {...register("password", {
                pattern: {
                  value:
                    /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/,
                  message:
                    "영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 입력해주세요.",
                },
              })}
            ></Input>
            <br />
            <ErrorMessage>{errors?.password?.message as string}</ErrorMessage>

            <Input
              placeholder="Check Password"
              type="password"
              {...register("checkpassword", {
                validate: (value) =>
                  value === password || "비밀번호가 일치하지 않습니다.",
              })}
            />
            <br />
            <ErrorMessage>
              {errors?.checkpassword?.message as string}
            </ErrorMessage>

            <SignupBtn type="submit">Sign up</SignupBtn>
            <Box>
              <Text onClick={() => navigate("/login")}>Log in</Text>
            </Box>
          </form>
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

export default SignUp;
