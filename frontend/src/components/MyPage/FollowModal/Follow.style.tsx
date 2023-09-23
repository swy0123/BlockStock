import { styled } from "styled-components";

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
    display: ${(props: { isOpen: boolean }) => (props.isOpen ? "block" : "none")};
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
  `;
  
export const ModalContent = styled.div`
    align-items: center;
    text-align: center;
    background: #fff;
    width: 25%;
    max-width: 500px;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;

    /* z-index: 1001; */
`;
export const CloseIcon = styled.img`
    width: 40px;
    height: 40px;
    position: fixed;
    top: 5%;
    left: 88%;
    cursor: pointer;
    :hover&{
    opacity: 70%;
    }
`;
export const Content = styled.div`
    height: 200px;
    width: 78%;
    /* border: solid 2px;
    border-color: #f4f6f8;
    border-radius: 6px; */
`
export const Hr = styled.hr`
    width: 100%;
    margin: 20px auto 0px auto;
    border: solid 0.1px #f5f5f7;
`

export const Container = styled.div`
    
`;
export const UserBox = styled.div`
`;
export const Img = styled.img`
    width: 35px;
    height: 35px;
`
export const Name = styled.p`
    font-size: 15px;
`;

export const FollowingBtn = styled.button`
    border: 0px;
    width: 60px;
    height: 30px;
    border-radius: 8px;
    margin-right: 8px;
    color: white;
    background: #8c5ef8;
    cursor: pointer;
    &:hover{
        background: #986dfa;
    }
`

export const FollowBtn =styled.button`
    border: 0px;
    width: 60px;
    height: 30px;
    border-radius: 8px;
    margin-right: 8px;
    background: #f1f1f2;
    cursor: pointer;
    &:hover{
        background: #e6e5e7;
    }
`

export const Info = styled.p`
    font-size: 20px;
`

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`