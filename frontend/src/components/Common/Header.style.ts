import { styled } from "styled-components";

export const Container = styled.div`
    padding: 10px;
    position: fixed;
    width: 100%;
`
export const HeaderWrapper = styled.div`
    display: flex  ;
    height: 60px;
    /* height: 5vh; */
    /* background-color: #dcc1f0; */
    justify-content: space-between;
`;
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const Loupe = styled.img`
    width: 15px;
    height: 15px;
`;
export const Img = styled.img`
    width: 35px;
    height: 35px;
    margin: 0px 20px 0px 10px;
`;
export const AlertImg = styled.img`
    width: 30px;
    height: 30px;
`
export const Logo = styled.img`

`
export const InputBox = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    
`
export const Input = styled.input`
    width: 300px;
    height: 55%;
    border: 0;
    padding-left: 20px;
    margin-right: 20px;
    border-radius: 10rem;
    background-color: white;
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
`;