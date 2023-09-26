import { useState } from "react";
import styled from "styled-components";
import { putTicket } from "../../api/store";
import swal from "sweetalert";

interface TicketModalProps {
    isOpen: boolean;
    onClose: () => void;
    money: number; // 새로운 prop 추가
  }
  interface TextProps {
    fontsize?: string; // fontSize 속성 지정
    weight? : string;
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
  max-width: 650px;
  padding: 20px 20px 40px 20px;
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
const Box = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
`
const TextWrapper = styled.div`
    width: 250px;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 10px;
`
const TextBox= styled.div`
    display: flex;
    /* width: 50%; */
    justify-content: space-between;
`
const Text = styled.p<TextProps>`
  font-size: ${(props) => (props.fontsize ? props.fontsize : "15px")};
  font-weight: ${(props) => (props.weight ? props.weight : "300")};
`;
const Text1 = styled.p`
    font-size : 19px;
    color : #ae82fa;
    font-weight: 500;
`;
const Img = styled.img`
  width: 170px;
  height: 160px;
  margin: 10px 0px 20px 0px;
`
const Hr = styled.hr`
    margin: 0px;
`
const QuantityControl = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  width: 40px;
  height: 30px;
  background: #e3d8f4;
  border: none;
  border-radius: 20%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 0 5px;
`;

const QuantityDisplay = styled.p`
  font-size: 18px;
  margin: 10px;
`;
const SubmitBtn = styled.button`
    width: 130px;
  height: 35px;
  color: #ffffff;
  border: 0;
  border-radius: 6px;
  background:  #a3a2a3;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-left: 120px;
  margin-top: 10px;
  &:hover {
    color: #ffffff;
    background-color: #9155fd;
    transition: 0.5s;
  }
`;

function TicketModal(props: TicketModalProps) {
  const { isOpen, onClose, money} = props;
  const [ticketQuantity, setTicketQuantity] = useState(1); // 초기값을 1로 설정

  const decreaseQuantity = () => {
    if (ticketQuantity > 1) {
      setTicketQuantity(ticketQuantity - 1);
    }
  };

  const increaseQuantity = () => {
    setTicketQuantity(ticketQuantity + 1);
  };
  function formatKoreanCurrency(amount: number): string {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
//   const formattedMoney = formatKoreanCurrency(money); 
  const handleSubmit = async() => {
    const response = await putTicket(ticketQuantity)
    console.log("결과가 머야", response)
    if (response?.status == 200){
      swal("티켓 교환 완료")
    }else{
      swal('교환 금액이 부족합니다')
    }
  }

  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        <Title>티켓 교환</Title>
        <CloseIcon src="./icon/close.png" onClick={onClose}/>
        <Text>교환할 티켓 수를 입력해주세요.</Text>
        <Wrapper>
            <Box>
            <Img src="./icon/tickets.png"/>
            <QuantityControl>
                <QuantityButton onClick={decreaseQuantity}>-</QuantityButton>
                <QuantityDisplay>{ticketQuantity}</QuantityDisplay>
                <QuantityButton onClick={increaseQuantity}>+</QuantityButton>
            </QuantityControl>
            </Box>
            <TextWrapper>
            <TextBox>
                <Text fontsize="18px" weight="500">현재 자산</Text>
                <Text fontsize="18px">{formatKoreanCurrency(money)} 원</Text>
            </TextBox>
            <TextBox>
                <Text fontsize="18px" weight="500">티켓 금액</Text>
                <Text fontsize="18px">{formatKoreanCurrency(ticketQuantity * 10000000)} 원</Text>
            </TextBox>
            <Hr/>
            <TextBox>
                <Text fontsize="18px" weight="500">교환 후 자산</Text>
                <Text1>{formatKoreanCurrency(money-(ticketQuantity * 10000000))} 원</Text1>
            </TextBox>
            <SubmitBtn onClick={handleSubmit}>교환하기</SubmitBtn>
            </TextWrapper>
        </Wrapper>
      </ModalContent>
    </ModalWrapper>
  );
}

export default TicketModal;
