import styled from "styled-components";

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
  width: 80%;
  max-width: 600px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* z-index: 1001; */
`;

export const Title = styled.p`
  font-size: 30px;
  margin: 20px 0px;
  font-weight: 700;
`
export const CloseIcon = styled.img`
  width: 18px;
  height: 18px;
  position: fixed;
  top: 7%;
  left: 91%;
  cursor: pointer;
  :hover&{
    opacity: 70%;
  }
`
export const Text = styled.p`
  font-size: 15px;
`
export const Img = styled.img`
  width: 150px;
`
export const Inputbox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Input = styled.input`
  width: 264px;
  height: 44px;
  border-radius: 10px 0px 0px 10px;
  border: 1px solid #d3d3d3;
  padding-left: 20px;
  font-size: 15px;
`
export const SubmitBtn = styled.button`
  width: 62px;
  height: 48px;
  border-radius: 0px 10px 10px 0px;
  border: 1px solid #D9D9D9;
  background: rgba(145, 85, 253, 0.20);
  font-size: 15px;
`
export const Message = styled.p`
  font-size: 14px;
  color: gray;
`