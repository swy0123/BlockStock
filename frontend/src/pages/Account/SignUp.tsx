import React, { ChangeEvent, FormEvent, useCallback, useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import {useNavigate } from "react-router";
import { postJoin, postmail } from "../../api/Join";

const Container = styled.div`
  margin-left: -200px;
  align-items: center;
  height: 85vh;
	/* position: fixed; */
`;

const BackGround = styled.div`
	margin-top: -150px;
`;

const Wrapper = styled.div`
	display: flex;
	margin-right: 100px;
	justify-content: end;
	align-items: center;
  height: 100%;
`;

const LoginBox = styled.div`
  align-items: center;
  text-align: center;
  width: 440px;
  height: 585px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  z-index: 20;
`;
const LogoImg = styled.img`
  margin-top: 15px;
  margin-left: -20px;
  width: 140px;
`;
const Title = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-top: 17px;
  margin-bottom: 5px;
`;
const Input = styled.input`
  margin-top: 20px;
  width: 290px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.22);
  background: #fff;
  font-size: 13px;
  padding-left: 20px;
`;
const MailBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
const MailBtn = styled.button`
  margin-top: 20px;
  margin-left: 5px;
  width: 55px;
  height: 25px;
  border: 0;
  border-radius: 5px;
  background: #9e9ea1;
  color: white;
  cursor: pointer;
`;
const MailInput = styled.input`
  margin-top: 20px;
  width: 230px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.22);
  background: #fff;
  font-size: 13px;
  padding-left: 20px;
`;
const Text = styled.p`
  color: #9155fd;
  font-size: 15px;
  cursor: pointer;
`;
const Box = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 70px;
`;

const SignupBtn = styled.button`
  width: 315px;
  height: 45px;
  font-size: 15px;
  color: white;
  border: 0;
  border-radius: 10px;
  background: #9155fd;
  margin-top: 20px;
  cursor: pointer;
`;
const ErrorMessage = styled.span`
  font-size: 10px;
  color: red;
`;

function SignUp() {
  const navigate = useNavigate();

  // watch 함수를 사용을 위한 useForm 훅을 초기화
  const {
    watch,
    register,
    handleSubmit,
    setValue,
    getValues,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const nickname: string = watch("nickname");
  const email: string = watch("email");
  const password: string = watch("password");
  const checkemail: string = watch("checkemail")
  const checkpassword: string = watch("checkpassword");

  const userData = {
    email: email,
    password: password,
    nickname: nickname,
  };

  const handleMailSend = async () => {
    const enterEmail = email;
    try {
      console.log('try');
      const response = await postmail(enterEmail);
      console.log(response);
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };

  const onSubmit = async (formData) => {
    if (!nickname) {
      swal("닉네임을 입력해주세요")
    }
    try {
      // 회원가입 API 요청
      // console.log("formDATA: ", formData);
      const signUpResult = await postJoin(userData);
      console.log("Sign-up success:", signUpResult);
      swal("Success", "회원가입이 완료되었습니다.", "success");
      navigate("/login");
    } catch (error) {
      console.error("Sign-up error:", error);
      swal("Error", "회원가입에 실패했습니다.", "error");
    }
  };
  return (
    <Container>
      <Wrapper>
      <LoginBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LogoImg src="./icon/logo.png" />
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
        >
    </Input>

        <MailBox>
          <MailInput placeholder="E-mail"
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value:
                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "올바른 이메일 형식이 아닙니다.",
            },
          })}
          onChange={(e) => {
            setValue("email", e.target.value);
            clearErrors("email");
          }}
          // onBlur={handleEmailCheck}
        ></MailInput>
          <MailBtn type="button" onClick={handleMailSend}>발송</MailBtn>
        </MailBox>
        <MailBox>
          <MailInput placeholder="인증번호"></MailInput>
          <MailBtn type="button">인증</MailBtn>
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
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>

        <Input
          placeholder="Check Password"
          type="password"
          {...register("checkpassword", {
            validate: (value) =>
              value === password || "비밀번호가 일치하지 않습니다.",
          })}
        />
        <br />
        <ErrorMessage>{errors?.checkpassword?.message}</ErrorMessage>

        <SignupBtn type="submit">Sign up</SignupBtn>
        <Box>
          <Text onClick={()=> navigate("/login")}>Log in</Text>
        </Box>
      </form>
      </LoginBox>
      </Wrapper>
      <BackGround>
				<svg xmlns="http://www.w3.org/2000/svg" z-index="1" width="100%" height="180" viewBox="0 0 1440 150" fill="none">
					<path d="M733.638 5.50287C757.15 1.51166 781.011 -0.0380349 804.842 0.878527L1120 13L1345.5 37.5L1440 49.5V81V107.573V150H0L71.7834 79.9258C106.238 46.2918 153.532 29.1655 201.533 32.9408L429.054 50.8357C434.667 51.2772 440.312 51.0935 445.885 50.288L607 27L733.638 5.50287Z" fill="#9155FD" fill-opacity="0.1"/>
				</svg>
			</BackGround>
    </Container>
  );
}

export default SignUp;
