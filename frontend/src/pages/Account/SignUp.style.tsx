import styled from "styled-components";

export const Container = styled.div`
  margin-left: -200px;
  align-items: center;
  height: 85vh;
  /* position: fixed; */
`;
export const Img = styled.img`
	width: 600px;
	position: fixed;
	top: 25%;
	left: 10%;

`
export const BackGround = styled.div`
  margin-top: -150px;
`;

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
  width: 440px;
  height: 585px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  z-index: 20;
`;
export const LogoImg = styled.img`
  margin-top: 15px;
  margin-left: -20px;
  width: 140px;
`;
export const Title = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-top: 17px;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  margin-top: 20px;
  width: 290px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.22);
  background: #fff;
  font-size: 13px;
  padding-left: 20px;
`;
export const MailBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
export const MailBtn = styled.button`
  margin-top: 20px;
  margin-left: 5px;
  width: 55px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  background: #e6e6e9;
  transition: 0.5s;
  color: #8b8888;
  cursor: pointer;
  &:hover{
    background: #dadadd;
    color: gray;
  }
`;
export const MailInput = styled.input`
  margin-top: 20px;
  width: 230px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.22);
  background: #fff;
  font-size: 13px;
  padding-left: 20px;
`;
export const Text = styled.p`
  color: #686868;
  font-size: 15px;
  transition: 0.5s;
  cursor: pointer;
  &:hover{
    color: #9155fd;
  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 70px;
`;

export const SignupBtn = styled.button`
  width: 315px;
  height: 45px;
  font-size: 15px;
  color: white;
  border: 0;
  border-radius: 10px;
  background: #9155fd;
  margin-top: 20px;
  transition: 0.5s;
  cursor: pointer;
  &:hover{
    background: #9c6bf8;
  }
`;
export const ErrorMessage = styled.span`
  font-size: 10px;
  color: red;
`;
