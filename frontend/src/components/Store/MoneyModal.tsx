import { useState } from "react";
import swal from "sweetalert";
import { putMoney } from "../../api/store";
import { useNavigate } from "react-router-dom";
import { 
  ModalWrapper,
  ModalContent,
  Title,
  CloseIcon,
  Text,
  Img,
  Inputbox,
  Input,
  SubmitBtn,
  Message
 } from "./MoneyModal.style";

interface MoneyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function MoneyModal(props: MoneyModalProps) {
  const navigate = useNavigate();
  const { isOpen, onClose } = props;
  const [inputValue, setInputValue] = useState(""); // 입력된 값의 상태를 관리
  // const [isChargeComplete, setIsChargeComplete] = useState(false); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 입력값이 숫자인지 확인
    const value = e.target.value;
    if (/^\d+$/.test(value) || value === "") {
      setInputValue(value);
    }
  };

  const handleCancel = () => {
    setInputValue("");
    onClose();
    navigate("/mypage")
  }
  
  const handleChargeClick = async() => {
    if (inputValue !== "") {
      const amount = parseInt(inputValue);
      if (!isNaN(amount)) {
        if (amount <= 2000) {
          console.log("충전 금액:", amount);
          const moneyData = {
            money: amount*10000
          }; // 카카오페이 연결할 때 밑에 코드는 주석처리하고 안써도 되는 부분!
          const response = await putMoney(moneyData);
          if (response?.status == 200){
            swal("충전 완료",`${moneyData.money}원이 충전되었습니다.`, "success")
            handleCancel()
            navigate("/mypage")
          } else{
            swal("충전 실패")
          }
        } else {
          swal(" ","충전 금액은 2000 point로 제한됩니다.","error");
        }
      } else {
        console.error("유효하지 않은 숫자입니다.");
      }
    }
  };

  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        <Title>자산 충전</Title>
        <CloseIcon src="/icon/close.png" onClick={handleCancel}/>
        <Text>충전 금액을 입력해주세요.</Text>
        <Img src="/icon/money.png"/>
        <Inputbox>
          <Input
          value={inputValue}
          onChange={handleInputChange}
          />
          <SubmitBtn onClick={handleChargeClick}>충전</SubmitBtn>
        </Inputbox>
        <Message>충전 금액은 하루 최대 2000원까지 가능합니다.</Message>
      </ModalContent>
    </ModalWrapper>
  );
}

export default MoneyModal;
