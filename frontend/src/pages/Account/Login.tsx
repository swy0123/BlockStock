import { useNavigate } from "react-router-dom";
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
	BackGround
 } from "./Login.style";

function Login(){
	const navigate = useNavigate();

	return(
		<Container>
			<Wrapper>
				<LoginBox>
					<LogoImg src="./icon/logo.png"/>
					<Title>Welcome to Block Stock!</Title>
					<Input placeholder="E-mail"></Input>
					<Input placeholder="Password"></Input>
					<Box>
						<Text onClick={()=>navigate("/findpw")}>find Password</Text>
					</Box>
					<LoginBtn>Log in</LoginBtn>
					<Hr/>
					<P>or</P>
					<Text onClick={()=> navigate('/signup')}>Sign up</Text>
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

export default Login;