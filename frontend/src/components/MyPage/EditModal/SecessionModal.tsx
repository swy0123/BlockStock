import { useState } from "react";
import styled from "styled-components";
import swal from "sweetalert";
import { deleteAuth } from "../../../api/Auth/Join";
import { useNavigate } from "react-router-dom";
import { CurrentUserAtom } from "../../../recoil/Auth";
import { useRecoilState } from "recoil";
import { LoginState } from "../../../recoil/Auth";

interface SecessionModalProps {
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
  align-items: center;
  text-align: center;
  background: #fff;
  width: 50%;
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

const Title = styled.p`
  font-size: 25px;
  margin: 20px 0px;
  font-weight: 700;
`
const Text = styled.p`
    font-size: 15px;
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
  width: 180px;
  height: 40px;
  flex-shrink: 0;
  border: 0;
  border-radius: 6px;
  background: #9155fd;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
`;
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  align-items: center;
`;

const CancleBtn = styled.button`
  width: 180px;
  height: 40px;
  flex-shrink: 0;
  border: 0;
  border-radius: 6px;
  background: #f5f4f7;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  margin-bottom: 10px;
`;

function SecessionModal(props: SecessionModalProps) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(LoginState);
  const [currentUser, setCurrentUser] = useRecoilState(CurrentUserAtom);

  const { isOpen, onClose } = props;

  const handleDeleteAuth = async () => {
    const response = await deleteAuth();
    console.log("탈퇴 api 결과", response)
    if(response?.status == 200){
      swal("", "계정이 삭제되었습니다. \n 로그아웃이 진행됩니다.")
      setIsLogin(false);
      setCurrentUser("");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      navigate("/")
    } else{
      swal("회원탈퇴 실패🚫")
    }
  }

  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        <CloseIcon src="/icon/close.png" onClick={onClose}/>
        <Title>회원 탈퇴</Title>
        <Text>정말 탈퇴하시겠어요?</Text>
        <Text>탈퇴 버튼 선택 시, 계정은 삭제되며 복구되지 않습니다.</Text>
        <ProfileBox>
          <SubmitBtn onClick={handleDeleteAuth}>↪ 탈퇴</SubmitBtn>
          <CancleBtn onClick={onClose}>취소</CancleBtn>
        </ProfileBox>
      </ModalContent>
    </ModalWrapper>
  );
}

export default SecessionModal;
