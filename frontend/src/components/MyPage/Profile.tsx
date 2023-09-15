import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 7px;
  margin-left: 30px;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
`;

const common = `
  height: 240px;
  flex-shrink: 0;
  border-radius: 13px;
  background: #fff;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
`;
const AwardsWrapper = styled.div`
  width: 450px;
  ${common}
`;
const Wrapper0 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-left: 50px;
  text-align: center;
  height: 150px;
  overflow-y: scroll; /* 세로 스크롤 활성화 */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5px;
  align-items: center;
  text-align: center;
`;
const Money = styled.p`
  font-size: 23px;
  font-weight: 700;
  margin-left: 10px;
  margin-top: 0px;
  margin-bottom: 10px;
`;
const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
const Text = styled.p`
  font-size: 15px;
  margin: 7px 0px 10px;
`;
const Text1 = styled.p`
  font-size: 12px;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 10px;
`;
const AssetWrapper = styled.div`
  width: 400px;
  ${common}
`;
const StoreBtn = styled.button`
  width: 130px;
  height: 35px;
  flex-shrink: 0;
  color: white;
  border: 0;
  border-radius: 6px;
  background: linear-gradient(0deg, #9155fd 0%, #9155fd 100%), #d9d9d9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 0px 20px;
`;
const MailWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${common}
`;
const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: #9155fd;
  border: 0;
  border-radius: 50%;
  margin: 40px 0px;
`;

const MailImg = styled.img`
  width: 50px;
  height: 50px;
  margin: 25px 10px 0px 0px;
`;

const Mailbtn = styled.button`
  width: 130px;
  height: 35px;
  border-radius: 6px;
  background: linear-gradient(0deg, #f2eaff 0%, #f2eaff 100%), #d9d9d9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 0;
`;
const MoneyIcon = styled.img`
  width: 40px;
`;

interface ProfileProps {
  data: {
    id: number;
    nickname: string;
    email: string;
    followerCnt: number;
    followingCnt: number;
    award: string[];
    money: number;
    ticketCnt: number;
  };
}

function Profile(props: ProfileProps) {
  const { data } = props;
  // 숫자를 금액 형태로 변환
  function formatKoreanCurrency(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const formattedMoney = formatKoreanCurrency(data.money); // "10,000"으로 변환됨

  return (
    <Container>
      <AwardsWrapper>
        <TitleBox>
          <Icon src="./icon/keep.png" />
          <Title>Awards</Title>
        </TitleBox>
        <Wrapper0>
          {data.award.map((award) => (
            <Box>
              <Icon src="./icon/medal3.png" />
              <Text>{award}</Text>
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
            <StoreBtn>자산충전</StoreBtn>
            <StoreBtn>티켓충전</StoreBtn>
          </Box>
        </Wrapper>
      </AssetWrapper>
      <MailWrapper>
        <Circle>
          <MailImg src="./icon/plane_white.png" />
        </Circle>
        <Mailbtn>쪽지함 → </Mailbtn>
      </MailWrapper>
    </Container>
  );
}

export default Profile;
