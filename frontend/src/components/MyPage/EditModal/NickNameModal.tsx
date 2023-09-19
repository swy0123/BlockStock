// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { 
  ModalWrapper,
  ModalContent,
  Title,
  InputTitle,
  Input,
  CloseIcon,
  SubmitBtn,
  ProfileBox,
  CancleBtn
} from "./NickNameModal.style";

interface NameModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: string;
}


function NickNameModal(props: NameModalProps) {
  const { isOpen, onClose, data } = props;
  // const navigate = useNavigate();

  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        <CloseIcon src="./icon/close1.png" onClick={onClose} />
        <Title>닉네임 변경</Title>
        <InputTitle>Nickname</InputTitle>
        <Input placeholder={data} />
        <ProfileBox>
          <SubmitBtn>✔ 완료</SubmitBtn>
          <CancleBtn onClick={onClose}>취소</CancleBtn>
        </ProfileBox>
      </ModalContent>
    </ModalWrapper>
  );
}

export default NickNameModal;
