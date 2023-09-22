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
export const LoginBox = styled.div`
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

export const Title = styled.p`
	font-size: 23px;
	font-style: normal;
	font-weight: 700;
	margin-top: 65px;
	margin-bottom: 5px;
`;
export const SubTitle = styled.p`
  font-size  : 13px;
  color: gray;
`;
export const Input = styled.input`
	margin-top: 20px;
	width: 300px;
	height: 45px;
	border-radius: 10px;
	border: 1px solid rgba(0, 0, 0, 0.22);
	background: #FFF;
	font-size: 15px;
	padding-left: 20px;
`;
export const Text = styled.p`
	color: #9155FD;
	font-size: 16px ;
	cursor: pointer;
`
export const Box = styled.div`
	display: flex;
	justify-content: center;
`;

export const LoginBtn = styled.button`
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