import styled from "styled-components";
// import swal from "sweetalert";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalWrapper = styled.div<{ isOpen: boolean }>`
  display: ${(props: { isOpen: boolean }) => (props.isOpen ? "block" : "none")};
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

const ModalContent = styled.div`
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

const Title = styled.p`
  font-size: 25px;
  margin: 10px 0px 0px 0px;
  font-weight: 700;
`;

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
const SubmitBtn = styled.button`
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
const ProfileBox = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const CancleBtn = styled.button`
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


function Modal(props: ModalProps) {
  const { isOpen, onClose } = props;

  const handleCloseModal = () => {
    onClose();
    // window.location.reload(); 
  };


  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        <CloseIcon src="./icon/close.png" onClick={handleCloseModal} />
        <Title>제목입력</Title>
        {/* 여기에 모달 내용 */}
        <ProfileBox>
          <SubmitBtn>✔ 완료</SubmitBtn>
          <CancleBtn onClick={handleCloseModal}>취소</CancleBtn>
        </ProfileBox>
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;
