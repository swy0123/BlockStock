import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`

`;
const LoginBox = styled.div`
	align-items: center;
	text-align: center;
	width: 444px;
  height: 565px;
	flex-shrink: 0;
	border-radius: 10px;
	background: #FFF;
	box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
`;
const LogoImg = styled.img`
	margin-top: 25px;
	margin-left: -20px;
	width: 140px;
`;
const Title = styled.p`
	font-size: 23px;
	font-style: normal;
	font-weight: 500;
	margin-top: 35px;
	margin-bottom: 5px;
`;
const Input = styled.input`
	margin-top: 20px;
	width: 360px;
	height: 55px;
	border-radius: 10px;
	border: 1px solid rgba(0, 0, 0, 0.22);
	background: #FFF;
	font-size: 15px;
	padding-left: 20px;
`;
const Text = styled.p`
	color: #9155FD;
	font-size: 15px ;
`
const Box = styled.div`
	display: flex;
	justify-content: end;
	margin-right: 40px;
`;

const LoginBtn = styled.button`
	width: 370px;
	height: 52px;
	font-size: 15px;
	color: white;
	border: 0;
	border-radius: 10px;
	background: #9155FD;
	margin-top: 10px;
	margin-bottom: 25px;
`;
const Hr = styled.hr`
	width: 80%;
	color: lightgray;
`;
const P = styled.p`
	width: 25px;
	background-color: white;
	color: gray;
	margin: -20px auto 20px auto;
`;
function Login(){
	const navigate = useNavigate();

	return(
		<Container>
			<LoginBox>
				<LogoImg src="./icon/logo.png"/>
				<Title>Welcome to Block Stock!</Title>
				<Input placeholder="E-mail"></Input>
				<Input placeholder="Password"></Input>
				<Box>
					<Text>find Password</Text>
				</Box>
				<LoginBtn>Log in</LoginBtn>
				<Hr/>
				<P>or</P>
				<Text onClick={()=> navigate('/signup')}>Sign up</Text>
			</LoginBox>

			<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="150" viewBox="0 0 1440 150" fill="none">
				<path d="M733.638 5.50287C757.15 1.51166 781.011 -0.0380349 804.842 0.878527L1120 13L1345.5 37.5L1440 49.5V81V107.573V150H0L71.7834 79.9258C106.238 46.2918 153.532 29.1655 201.533 32.9408L429.054 50.8357C434.667 51.2772 440.312 51.0935 445.885 50.288L607 27L733.638 5.50287Z" fill="#9155FD" fill-opacity="0.1"/>
			</svg>
		</Container>
	);
}

export default Login;