import { useState } from "react";
import styled from "styled-components";
import swal from "sweetalert";
import { putMoney } from "../../api/store";
import { useNavigate } from "react-router-dom";

interface MoneyModalProps {
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

const Title = styled.p`
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
const Text = styled.p`
  font-size: 15px;
`
const Img = styled.img`
  width: 150px;
`
const Inputbox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 264px;
  height: 44px;
  border-radius: 10px 0px 0px 10px;
  border: 1px solid #d3d3d3;
  padding-left: 20px;
  font-size: 15px;
`
const SubmitBtn = styled.button`
  width: 62px;
  height: 48px;
  border-radius: 0px 10px 10px 0px;
  border: 1px solid #D9D9D9;
  background: rgba(145, 85, 253, 0.20);
  font-size: 15px;
`
const Message = styled.p`
  font-size: 14px;
  color: gray;
`

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
    // input 초기화 
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
            money: amount
          };
          const response = await putMoney(moneyData);
          if (response?.status == 200){
            swal("",`${amount}원 충전 완료`, "success")
            handleCancel()
            navigate("/mypage")
            // setIsChargeComplete(true);
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
  // if (isChargeComplete) {
  //   navigate("/mypage");
  // }

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
