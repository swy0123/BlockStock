import { styled } from "styled-components";

export const Container = styled.div`
    padding: 10px 15px;
    position: fixed;
    width: 100%;
    background-color: #F4F5FA;
    z-index: 100;
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
    margin: 0px 50px 0px 10px;
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

export const Text = styled.p`
    font-size: 15px;
    margin-right: 15px;
    cursor: pointer;
    :hover&{
        color: #9256FD; 
        transition: 0.4s;
    }
`;

// #9256FD
export const Text1 = styled.p`
    font-size: 15px;
    margin-right: 15px;
    border-radius: 0.5rem;
    background-color: #9256FD;
    padding: 7px;
    color: white;
    opacity: 80%;
    cursor: pointer;
    :hover&{
        color: black; 
        transition: 0.4s;
    }
`;
export const TextBox = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 35px;
`;

export const DropBoxWrapper = styled.div`
`;

export const DropBox = styled.div`
    /* margin-top: 85px; */
`;

export const ClickBox = styled.div`
    width: 140px;
    text-align: center;
    background-color: #F2EAFF;
    border: 0;
    border-radius: 0.7rem;
    position: absolute;
    top: 70px;
    right: 60px;
    padding-bottom: 10px; 
    /* padding-left: 5px; */
`;
// 483F55
export const Content = styled.p`
    font-size: 13px;
    color: #676767;
    cursor: pointer;
    /* margin-top: 10px; */
    margin-bottom: 10px;
`;

export const Hr = styled.hr`
    width: 70%;
    border: dashed 0.5px;
    margin-top: 10px;
    color: gray;
`;
export const Icon = styled.img`
    width: 17px;
    height: 17px;
    opacity: 60%;
    margin-right: 10px;
`;
export const Box = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
    margin: 0px 10px 0px 10px;
    text-align: start;
    padding-left: 10px;
&:hover{
    background-color: #FBF8FF;
    border-radius: 8px;
    color: black;
}
`

// E6DCF2 (연보라)