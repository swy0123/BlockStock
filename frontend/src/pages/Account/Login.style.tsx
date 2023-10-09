import styled from "styled-components";

export const Container = styled.div`
	margin-left: -200px;
	margin-bottom: -150px;
	align-items: center;
	height: 85vh;
	/* position: fixed; */
`;
export const BackGround = styled.div`
	margin-top: -150px;
`
export const Wrapper = styled.div`
	display: flex;
	margin-right: 100px;
	justify-content: end;
	align-items: center;
	height: 100%;
`;
export const Box1 = styled.div`
    z-index: 1000;
`;
export const LoginBox = styled.div`
	align-items: center;
	text-align: center;
	width: 440px;
  	height: 550px;
	flex-shrink: 0;
	border-radius: 10px;
	background: #FFF;
	box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
`;
export const LogoImg = styled.img`
	margin-top: 25px;
	margin-left: -20px;
	width: 140px;
`;
export const Title = styled.p`
	font-size: 23px;
	font-style: normal;
	font-weight: 700;
	margin-top: 35px;
	margin-bottom: 5px;
`;
export const Input = styled.input`
	margin-top: 20px;
	width: 330px;
	height: 45px;
	border-radius: 10px;
	border: 1px solid rgba(0, 0, 0, 0.22);
	background: #FFF;
	font-size: 15px;
	padding-left: 20px;
`;
export const Text = styled.p`
	color: #9155FD;
	font-size: 15px ;
	cursor: pointer;
`
export const Box = styled.div`
	display: flex;
	justify-content: end;
	margin-right: 45px;
`;

export const LoginBtn = styled.button`
	width: 360px;
	height: 45px;
	font-size: 15px;
	color: white;
	border: 0;
	border-radius: 10px;
	background: #9155FD;
	margin-top: 15px;
	margin-bottom: 25px;
	cursor: pointer;
	&:hover{
		background:#9b64ff;
	}
`;
export const Hr = styled.hr`
	width: 80%;
	color: lightgray;
`;
export const P = styled.p`
	width: 25px;
	background-color: white;
	color: gray;
	margin: -20px auto 20px auto;
`;

export const Img = styled.img`
	width: 600px;
	position: fixed;
	top: 25%;
	left: 10%;

`