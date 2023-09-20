// 로그인시 헤더
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Container,
  HeaderWrapper,
  Logo,
  Wrapper,
  InputBox,
  Input,
  AlertImg,
  Img,
  DropBoxWrapper,
  DropBox,
  ClickBox,
  Content,
} from "./Header.style";

function LoginHeader() {
  const navigate = useNavigate();
  const [isDropBox, setIsDropBox] = useState(false);

  // 헤더 및 사이드바 조건부 렌더링
  if (window.location.pathname === "/login") return null;
  if (window.location.pathname === "/signup") return null;
  if (window.location.pathname === "/findpw") return null;

  const enterDropBox = () => {
    setIsDropBox(!isDropBox);
    };

  return (
    <Container>
      <HeaderWrapper>
        <Logo src="./icon/logo.png" onClick={() => navigate("/")}></Logo>
        <Wrapper>
          <InputBox>
            <Input type="text" placeholder="검색어를 입력하세요 🔎" />
          </InputBox>
          <InputBox>
            <AlertImg src="./icon/isalert.png"></AlertImg>
            <DropBoxWrapper
              onClick={enterDropBox}
            >
              {isDropBox ? (
                <DropBox>
                  <Img src="./icon/user_purple.png"></Img>
                  <ClickBox>
                    <Content onClick={()=>navigate("/mypage")}>마이페이지</Content>
                    <Content>로그아웃</Content>
                  </ClickBox>
                </DropBox>
              ) : (
                <Img src="./icon/user_purple.png"></Img>
              )}
            </DropBoxWrapper>
          </InputBox>
        </Wrapper>
      </HeaderWrapper>
    </Container>
  );
}

export default LoginHeader;
