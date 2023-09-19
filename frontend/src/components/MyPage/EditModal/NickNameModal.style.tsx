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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #fff;
  width: 40%;
  max-width: 500px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* z-index: 1001; */
`;

export const Title = styled.p`
  font-size: 25px;
  margin: 10px 0px 0px 0px;
  font-weight: 700;
`;
export const InputTitle = styled.p`
  background-color: white;
  font-size: 13px;
  color: #403e41;
  font-weight: 500;
  z-index: 5;
  padding: 10px;
  margin-left: -200px;
  text-align: start;
  justify-content: start;
`;
export const Input = styled.input`
  width: 300px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1.5px solid rgba(0, 0, 0, 0.26);
  background: #fff;
  margin-top: -30px;
  padding-left: 20px;
  font-size: 12px;
  color: #5c5858;
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
`
export const SubmitBtn = styled.button`
  width: 150px;
  height: 33px;
  flex-shrink: 0;
  border: 0;
  border-radius: 6px;
  background: #9155fd;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
  margin-right: 10px;
  margin-top: 30px;
  margin-bottom: 10px;
  color: white;
`;
export const ProfileBox = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const CancleBtn = styled.button`
  width: 150px;
  height: 33px;
  flex-shrink: 0;
  border: 0;
  border-radius: 6px;
  background: #f5f4f7;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 10px;
`;