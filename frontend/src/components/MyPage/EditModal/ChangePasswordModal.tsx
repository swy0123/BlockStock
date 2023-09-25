import { useState } from "react";
import swal from "sweetalert";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { putPassword } from "../../../api/MyPage/Mypage";
import { useNavigate } from "react-router-dom";
// import swal from "sweetalert";

interface PasswordModalProps {
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
const InputTitle = styled.p`
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
const Input = styled.input`
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
const ErrorMessage = styled.span`
  font-size: 10px;
  color: red;
  padding-top: 5px;
`;

function PasswordModal(props: PasswordModalProps) {
  const navigate = useNavigate();
  const { isOpen, onClose } = props;

  const {
    watch,
    register,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const originPassword: string = watch("originPassword");
  const newPassword: string = watch("newPassword");
  const confirmPassword: string = watch("confirmPassword");
  const isPasswordMatching = watch("newPassword") === watch("confirmPassword");

  const pwData = {
    originPassword: originPassword,
    newPassword: newPassword,
    confirmPassword: confirmPassword,
  }

  // console.log(pwData)
  const handleCloseModal = () => {
    reset()
    onClose();
    // window.location.reload(); 
  };
  const handleSubmitPw = async() =>{
    const response = await putPassword(pwData);
    if(response?.status == 200){
      swal("", "비밀번호가 변경되었습니다🙂", "success")
      navigate("/mypage")
    } else{
      swal("", "현재 비밀번호가 잘못되었습니다.", "")
    }
  }

  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        <CloseIcon src="./icon/close.png" onClick={handleCloseModal} />
        <Title>비밀번호 변경</Title>
        <InputTitle>현재 비밀번호</InputTitle>
        <Input
          type="password"
          {...register("originPassword")}
        />
        <InputTitle>새 비밀번호</InputTitle>
        <Input
          placeholder="8~16자리의 비밀번호를 입력해주세요."
          type="password"
          {...register("newPassword", {
            pattern: {
              value:
                /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/,
              message:
                "영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 입력해주세요.",
            },
        })}
        />
         <ErrorMessage>{errors.newPassword?.message as string}</ErrorMessage>
         <InputTitle>비밀번호 확인</InputTitle>
        <Input
          placeholder="Check Password"
          type="password"
          {...register("confirmPassword", {
            validate: (value) =>
              value === watch("newPassword") || "비밀번호가 일치하지 않습니다.",
          })}
        />
        <ErrorMessage>{errors?.confirmPassword?.message as string}</ErrorMessage>

        <ProfileBox>
          <SubmitBtn 
          onClick={handleSubmitPw}
          disabled={!isPasswordMatching}
          >
            ✔ 완료</SubmitBtn>
          <CancleBtn onClick={handleCloseModal}>취소</CancleBtn>
        </ProfileBox>
      </ModalContent>
    </ModalWrapper>
  );
}

export default PasswordModal;
