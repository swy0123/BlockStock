import React, { useState } from "react";
import MoneyModal from "../Store/MoneyModal";
import TicketModal from "../Store/TicketModal";
import { useQuery } from "react-query";
import { getmypage } from "../../api/MyPage/Mypage";
import { useNavigate } from "react-router-dom";
import { 
  Container,
  AwardsWrapper,
  TitleBox,
  Icon,
  Title,
  Wrapper0,
  Box,
  Text,
  AssetWrapper,
  Wrapper,
  MoneyIcon,
  Money,
  Text1,
  StoreBtn,
  MailWrapper,
  Circle,
  MailImg,
  Mailbtn,
 } from "./Profile.style";
 
function Profile() {
  // const { data } = props;
  const navigate = useNavigate();
  const {data, isLoading, isError} = useQuery("mypage", getmypage);
  const [isMoneyModalOpen, setIsMoneyModalOpen] = useState(false);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const openMoneyModal = () => {
    setIsMoneyModalOpen(true);
  }
  const closeMoneyModal = () => {
    setIsMoneyModalOpen(false);
    // navigate("/mypage")
  }
  const openTicketModal = () => {
    setIsTicketModalOpen(true);
  }
  const closeTicketModal = () => {
    setIsTicketModalOpen(false);
  }

  // 숫자 금액 형태로 변환
  function formatKoreanCurrency(amount: number): string {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  const formattedMoney = formatKoreanCurrency(data.money); // "10,000"으로 변환됨
  if (isLoading) {
    return <div>Loading...</div>; // 데이터가 로드 중일 때 표시할 내용
  }
  
  if (isError) {
    return <div>Error loading data.</div>; // 데이터 로드 중 오류가 발생한 경우 처리
  }
  return (
    <Container>
      <AwardsWrapper>
        <TitleBox>
          <Icon src="./icon/keep.png" />
          <Title>Awards</Title>
        </TitleBox>
        <Wrapper0>
          {data.award.map((item: string) => (
            <Box>
              <Icon src="./icon/medal3.png" />
              <Text>{item}</Text>
            </Box>
          ))}
        </Wrapper0>
      </AwardsWrapper>
      <AssetWrapper>
        <TitleBox>
          <Icon src="./icon/keep.png" />
          <Title>Asset</Title>
        </TitleBox>
        <Wrapper>
          <Box>
            <MoneyIcon src="./icon/coin.png" />
            <Money>{formattedMoney}</Money>
            <Text1>원</Text1>
          </Box>
          <Box>
            <Text1>보유 티켓</Text1>
            <Icon src="./icon/ticket.png" />
            <Text>x {data.ticketCnt}</Text>
          </Box>
          <Box>
            <StoreBtn onClick={openMoneyModal}>자산충전</StoreBtn>
            <MoneyModal isOpen={isMoneyModalOpen} onClose={closeMoneyModal} />
            <StoreBtn onClick={openTicketModal}>티켓충전</StoreBtn>
            <TicketModal  money={data.money} isOpen={isTicketModalOpen} onClose={closeTicketModal}/>
          </Box>
        </Wrapper>
      </AssetWrapper>
      <MailWrapper>
        <Circle>
          <MailImg src="./icon/plane_black.png" />
        </Circle>
        <Mailbtn onClick={()=> navigate("/message")}>쪽지함 → </Mailbtn>
      </MailWrapper>
    </Container>
  );
}

export default Profile;
