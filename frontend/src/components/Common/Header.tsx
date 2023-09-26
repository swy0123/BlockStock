// 비로그인 헤더
import { useNavigate } from "react-router-dom";

import {
    Container, 
    HeaderWrapper, 
    Logo, Wrapper, 
    InputBox, 
    Input, 
    Text,
    Text1,
    TextBox,
    } from "./Header.style";


function Header(){
    const navigate = useNavigate();
    // 헤더 및 사이드바 조건부 렌더링
    if (window.location.pathname === '/login') return null;
    if (window.location.pathname === '/signup') return null;
    if (window.location.pathname === '/findpw') return null;

    return( 
        <Container>
            <HeaderWrapper>
                <Logo src="/icon/logo.png" onClick={()=> navigate("/")}></Logo>
                <Wrapper>
                <InputBox>
                    <Input
                        type="text"
                        placeholder="검색어를 입력하세요 🔎"/>
                </InputBox>
                <TextBox>
                    <Text onClick={()=>navigate("/login")}>Log in</Text>
                    <Text1 onClick={()=>navigate("/signup")}>Sign up</Text1>
                </TextBox>
                </Wrapper>
            </HeaderWrapper>
        </Container>
    );
}

export default Header;