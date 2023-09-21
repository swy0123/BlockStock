// 로그인시 헤더
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";
import { useRecoilState } from "recoil";
import { CurrentUserAtom, LoginState } from "../../recoil/Auth";
useRecoilState
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
  Hr
} from "./Header.style";


function LoginHeader() {
  const navigate = useNavigate();
  const [isDropBox, setIsDropBox] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(LoginState);
  const [currentUser, setCurrentUser] = useRecoilState(CurrentUserAtom);


  // 헤더 및 사이드바 조건부 렌더링
  if (window.location.pathname === "/login") return null;
  if (window.location.pathname === "/signup") return null;
  if (window.location.pathname === "/findpw") return null;

  const enterDropBox = () => {
    setIsDropBox(!isDropBox);
    };
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsLogin(false); // 로그인 여부 아톰에 저장
    setCurrentUser(""); // 유저 정보 아톰에 저장
    swal('로그아웃 완료')
    navigate("/")
  }
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
                    <Content>{currentUser.nickname}</Content>
                    <Hr/>
                    <Content onClick={()=>navigate("/mypage")}>마이페이지</Content>
                    <Content onClick={handleLogout}>로그아웃</Content>
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
