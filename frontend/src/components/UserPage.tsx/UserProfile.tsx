import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from 'react-router-dom';
import Message from "../Message/Message";
import style from "../../components/Tooltip/Tooltip.module.css"
import { getUserPage } from "../../api/MyPage/Userpage";
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
    MailWrapper,
    Circle,
    MailImg,
    StoreBtn,
    Mailbtn
}from "../MyPage/Profile.style"
   

function UserProfile() {
  const location = useLocation();
  const memberId = location.state?.memberId;
  console.log("유저페이지 id", memberId)

  const { data, isLoading, isError } = useQuery("userpage", () => getUserPage(memberId));
  const [isMessageVisible, setMessageVisible] = useState(false);

  // 숫자 금액 형태로 변환
  function formatKoreanCurrency(amount: number): string {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  const showMessage = () => {
    setMessageVisible(!isMessageVisible);
  };

  const hideMessage = () => {
    setMessageVisible(false);
  };

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
          <Icon src="/icon/keep.png" />
          <Title>Awards</Title>
        </TitleBox>
        <Wrapper0>
          {data.award.map((item: string) => (
            <Box>
              <Icon src="/icon/medal3.png" />
              <Text>{item}</Text>
            </Box>
          ))}
        </Wrapper0>
      </AwardsWrapper>
      <AssetWrapper>
        <TitleBox>
          <Icon src="/icon/keep.png" />
          <Title>Asset</Title>
        </TitleBox>
        <Wrapper>
            <br/>
          <Box>
            <MoneyIcon src="/icon/coin.png" />
            <Money> {formattedMoney} </Money>
            <Text1>원</Text1>
          </Box>
        </Wrapper>
      </AssetWrapper>
      <MailWrapper>
        <Circle>
          <MailImg src="/icon/plane_white.png" />
        </Circle>
        <Mailbtn onClick={() => showMessage()}>쪽지보내기 → </Mailbtn>
      </MailWrapper>
      {isMessageVisible && (
        <div className={`${style.messageLayer}`} onClick={hideMessage}>
          <div
            className={`${style.message}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Message
              state={{ nickname: data.nickname, id: data.id }}
              onClose={hideMessage}
            />
          </div>
        </div>
      )}
    </Container>
  );
}

export default UserProfile;
