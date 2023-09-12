import { styled } from "styled-components";

import {
    Container, 
    HeaderWrapper, 
    Logo, Wrapper, 
    InputBox, 
    Input, 
    AlertImg, 
    Img} from "./Header.style";

function Header(){
    return( 
        <Container>
            <HeaderWrapper>
                <Logo src="./icon/logo.png"></Logo>
                <Wrapper>
                <InputBox>
                    <Input
                        type="text"
                        placeholder="검색어를 입력하세요 🔎"/>
                </InputBox>
                <InputBox>
                    <AlertImg src="./icon/isalert.png"></AlertImg>
                    <Img src="./icon/user_purple.png"></Img>
                </InputBox>
                </Wrapper>
            </HeaderWrapper>
        </Container>
    );
}

export default Header;