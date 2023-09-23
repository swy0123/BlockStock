import { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { putNickName } from "../../../api/MyPage/Mypage";

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
  const [nickname, setNickname] = useState(""); // Initialize nickname with the provided data
  const navigate = useNavigate();
  
  const handleSubmitName = async() => {
    const nickNameData = {
      nickname: nickname,
    };
    // console.log(nickname)
    const response = await putNickName(nickNameData); // Pass the nickname data to putNickName function
    if (response?.status == 200){
      swal("", "닉네임 수정 완료", "success");
      onClose();
      navigate("/mypage");  
    } else {
      swal("", "닉네임 수정 실패", "error")
    }
    
  }
  const handleCancel = () => {
    // input 초기화 
    setNickname(data);
    onClose();
  }
    
  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        <CloseIcon src="./icon/close1.png" onClick={handleCancel} />
        <Title>닉네임 변경</Title>
        <InputTitle>Nickname</InputTitle>
        <Input 
          placeholder={data} 
          value={nickname} // Bind the input value to the nickname state
          onChange={(e) => setNickname(e.target.value)} // Update the nickname state on input change
        />
        <ProfileBox>
          <SubmitBtn onClick={handleSubmitName}>✔ 완료</SubmitBtn>
          <CancleBtn onClick={handleCancel}>취소</CancleBtn>
        </ProfileBox>
      </ModalContent>
    </ModalWrapper>
  );
}

export default NickNameModal;
