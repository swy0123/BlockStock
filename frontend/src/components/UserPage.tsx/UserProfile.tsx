import { useQuery } from "react-query";
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
    Mailbtn
}from "../MyPage/Profile.style"
   

function UserProfile() {
  // const { data } = props;
  const {data, isLoading, isError} = useQuery("userpage", getUserPage);

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
            <br/>
          <Box>
            <MoneyIcon src="./icon/coin.png" />
            <Money> {formattedMoney} </Money>
            <Text1>원</Text1>
          </Box>
        </Wrapper>
      </AssetWrapper>
      <MailWrapper>
        <Circle>
          <MailImg src="./icon/plane_white.png" />
        </Circle>
        <Mailbtn>쪽지보내기 → </Mailbtn>
      </MailWrapper>
    </Container>
  );
}

export default UserProfile;
