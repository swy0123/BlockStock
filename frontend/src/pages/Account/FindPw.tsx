import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
	margin-left: -200px;
	margin-bottom: -150px;
	align-items: center;
	height: 85vh;
	/* position: fixed; */
`;
const BackGround = styled.div`
	margin-top: -150px;

`
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
	width: 420px;
  	height: 400px;
	flex-shrink: 0;
	border-radius: 10px;
	background: #FFF;
	box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
	z-index: 20;
`;

const Title = styled.p`
	font-size: 23px;
	font-style: normal;
	font-weight: 700;
	margin-top: 65px;
	margin-bottom: 5px;
`;
const SubTitle = styled.p`
  font-size  : 13px;
  color: gray;
`;
const Input = styled.input`
	margin-top: 20px;
	width: 300px;
	height: 45px;
	border-radius: 10px;
	border: 1px solid rgba(0, 0, 0, 0.22);
	background: #FFF;
	font-size: 15px;
	padding-left: 20px;
`;
const Text = styled.p`
	color: #9155FD;
	font-size: 16px ;
	cursor: pointer;
`
const Box = styled.div`
	display: flex;
	justify-content: center;
`;

const LoginBtn = styled.button`
	width: 325px;
	height: 45px;
	font-size: 15px;
	color: white;
	border: 0;
	border-radius: 10px;
	background: #9155FD;
	margin-top: 30px;
	margin-bottom: 15px;
	cursor: pointer;
`;

function FindPw(){
	const navigate = useNavigate();

	return(
		<Container>
			<Wrapper>
				<LoginBox>
					<Title>Forgot Password?</Title>
                    <SubTitle>이메일을 통해 임시비밀번호를 발급 받을 수 있습니다.</SubTitle>
					<Input placeholder="E-mail"></Input>
					<LoginBtn>확인</LoginBtn>
                    <Box>
						<Text onClick={()=>navigate("/login")}>↪ Back to Login</Text>
					</Box>
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

export default FindPw;