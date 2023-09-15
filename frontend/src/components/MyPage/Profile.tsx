import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
`;

const common = `
  height: 238px;
  flex-shrink: 0;
  border-radius: 13px;
  background: #fff;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
`
const AwardsWrapper = styled.div`
  width: 400px;
  ${common}
`;
const Wrapper = styled.div`
  margin-top: 20px;
  margin-left: 50px;
`;
const Money = styled.p`
  font-size: 23px;
  font-weight: 700;
`;
const Title = styled.p`
  font-size: 20px;
`;
const Text = styled.p`
  font-size: 15px;
`;
const Text1 = styled.p`
  font-size: 12px;
`
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
  width: 131.279px;
  height: 35px;
  flex-shrink: 0;
  color: white;
  border: 0;
  border-radius: 6px;
  background: linear-gradient(0deg, #9155FD 0%, #9155FD 100%), #D9D9D9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
  background-color: #9155FD ;
  border: 0;
  border-radius: 50%;
  margin: 40px 0px
`;

const MailImg = styled.img`
  /* text-align: center; */
  /* align-items: center; */
  width: 50px;
  height: 50px;
  margin-top: 20px;
`;

const Mailbtn = styled.button`
  width: 148px;
  height: 40px;
  border-radius: 6px;
  background: linear-gradient(0deg, #F2EAFF 0%, #F2EAFF 100%), #D9D9D9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 0;
`;

function Profile(props: data) {
  const { data } = props;
  console.log("data", data);

  return (
    <Container>
      <AwardsWrapper>
        <Wrapper>
          <Box>
            <Icon src="./icon/keep.png" />
            <Title>Awards</Title>
          </Box>
          {data.award.map((award, index) => (
            <Box>
              <Icon src="./icon/medal3.png" />
              <Text>{award}</Text>
            </Box>
          ))}
        </Wrapper>
      </AwardsWrapper>
      <AssetWrapper>
        <Text1>보유자산</Text1>
        <Box>
          <Money>{data.money}</Money>
          <Text1>원</Text1>
        </Box>
        <Text1>티켓</Text1>
        <Text>{data.ticketCnt}</Text>
        <Box>
          <StoreBtn>자산충전</StoreBtn>
          <StoreBtn>티켓충전</StoreBtn>
        </Box>

      </AssetWrapper>
      <MailWrapper>
        <Circle>
          <MailImg src="./icon/plane_white.png"/>
        </Circle>
        <Mailbtn>쪽지함 → </Mailbtn>
      </MailWrapper>
    </Container>
  );
}

export default Profile;
