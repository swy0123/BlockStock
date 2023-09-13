import { styled } from "styled-components"
import { useForm } from 'react-hook-form';

const Container = styled.div`

`;
const LoginBox = styled.div`
	align-items: center;
	text-align: center;
	width: 444px;
  height: 600px;
	flex-shrink: 0;
	border-radius: 10px;
	background: #FFF;
	box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
`;
const LogoImg = styled.img`
	margin-top: 15px;
	margin-left: -20px;
	width: 140px;
`;
const Title = styled.p`
	font-size: 20px;
	font-style: normal;
	font-weight: 500;
	margin-top: 17px;
	margin-bottom: 5px;
`;
const Input = styled.input`
	margin-top: 20px;
	width: 310px;
	height: 40px;
	border-radius: 10px;
	border: 1px solid rgba(0, 0, 0, 0.22);
	background: #FFF;
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
`;
const MailInput = styled.input`
  margin-top: 20px;
	width: 250px;
	height: 40px;
  border-radius: 10px;
	border: 1px solid rgba(0, 0, 0, 0.22);
	background: #FFF;
	font-size: 13px;
	padding-left: 20px;
`
const Text = styled.p`
	color: #9155FD;
	font-size: 15px ;
`
const Box = styled.div`
	display: flex;
	justify-content: end;
	margin-right: 55px;
`;

const SignupBtn = styled.button`
	width: 340px;
	height: 45px;
	font-size: 15px;
	color: white;
	border: 0;
	border-radius: 10px;
	background: #9155FD;
	margin-top: 20px;
`;
const ErrorMessage = styled.span`
  font-size: 10px;
  color: red;
`;

function SignUp(){
  type FormValues = {
    pwd: string;
    checkpassword: string;
    nickname: string;
    email: string;  
  };


  // watch 함수를 사용을 위한 useForm 훅을 초기화
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const nickname: string = watch("nickname");
  const email: string = watch("email");
  const password: string = watch("pwd");
  const checkpassword: string = watch("checkpassword");


  const userData = {
    nickname: nickname,
    email: email,
    pwd: password,
  };


    return(
      <Container>
			  <LoginBox>
				  <LogoImg src="./icon/logo.png"/>
				  <Title>With Block Stock :)</Title>
				  <Input placeholder="NickName"></Input>
          <MailBox>
            <MailInput placeholder="E-mail"></MailInput>
            <MailBtn>발송</MailBtn>
          </MailBox>
          <MailBox>
            <MailInput placeholder="인증번호"></MailInput>
            <MailBtn>인증</MailBtn>
          </MailBox>
				  <Input
          placeholder="Password"
          type="password"
          {...register("pwd", {
          pattern: {
          value:/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/,
          message: "영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 입력해주세요.",
          },
          })}></Input>
          <br/>
          <ErrorMessage>{errors?.pwd?.message}</ErrorMessage>

        <Input
          placeholder="Check Password"
          type="password"
          {...register("checkpassword", {
          validate: (value) =>
          value === password || "비밀번호가 일치하지 않습니다.",
          })}/>
          <br/>
          <ErrorMessage>{errors?.checkpassword?.message}</ErrorMessage>

				  <SignupBtn onClick={()=>{}}>Sign up</SignupBtn>
          <Box>
					  <Text>Log in</Text>
				  </Box>
			  </LoginBox>
			  <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="150" viewBox="0 0 1440 150" fill="none">
				  <path d="M733.638 5.50287C757.15 1.51166 781.011 -0.0380349 804.842 0.878527L1120 13L1345.5 37.5L1440 49.5V81V107.573V150H0L71.7834 79.9258C106.238 46.2918 153.532 29.1655 201.533 32.9408L429.054 50.8357C434.667 51.2772 440.312 51.0935 445.885 50.288L607 27L733.638 5.50287Z" fill="#9155FD" fill-opacity="0.1"/>
			  </svg>
		  </Container>
    );
}

export default SignUp;