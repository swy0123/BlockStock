import { styled } from "styled-components";

const Container = styled.div`
    /* background-color: #F4F5FA; */
`
const HeaderWrapper = styled.div`
    display: flex  ;
    height: 60px;
    /* height: 5vh; */
    /* background-color: #dcc1f0; */
    justify-content: space-between;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Loupe = styled.img`
    width: 15px;
    height: 15px;
`;
const Img = styled.img`
    width: 35px;
    height: 35px;
    margin: 0px 20px 0px 10px;
`;
const AlertImg = styled.img`
    width: 30px;
    height: 30px;
`
const Logo = styled.img`

`
const InputBox = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    
`
const Input = styled.input`
    width: 300px;
    height: 55%;
    border: 0;
    padding-left: 20px;
    margin-right: 20px;
    border-radius: 10rem;
    background-color: white;
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
    :active{
	border-color:  purple;
    :focus{
	border-color:#865656;
}
}
`;

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
                    {/* <Loupe src="./icon/loupe.png"></Loupe> */}
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