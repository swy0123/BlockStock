import styled from "styled-components"
import Profile from "../../components/MyPage/Profile";

const Container = styled.div`
  width: 100vw;
`
const Wrapper = styled.div`
    margin-bottom: 25px;
    border: 0;
    border-radius: 13px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
    width: 80%;
    height: 288px;
    flex-shrink: 0;
`
const ColorBox = styled.div`
  height: 50%;
  border-radius: 13px 13px 0px 0px;
  background: linear-gradient(90deg, #C1BAEE 0.99%, rgba(207, 193, 238, 0.83) 22.96%, rgba(224, 195, 238, 0.60) 43.91%, rgba(209, 231, 240, 0.64) 57.2%, rgba(206, 228, 248, 0.69) 72.52%, #CCE3F8 99.09%);
`;

const BtnWrapper = styled.div`
  display: flex;
`;

const MenuBtn = styled.button`
  margin-right: 15px;
  width: 130px;
  height: 35px;
  font-size: 13px;
  border-radius: 6px;
  border: 0;
  background: linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  cursor: pointer;
  &:hover {
  /* #9155FD */
  background: linear-gradient(0deg, #c2a2fb 0%, #c1a5f7 100%), #D9D9D9;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
	background-blend-mode: multiply;
  color: white;
  transition: 0.5s;
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  margin-top: -50px;
  margin-left: 50px;
`
const ContentContainer = styled.div`
  margin-top: 30px; 
`;

function MyPage(){
  const data = {
    "id" : 12,
    "nickname": "won",
    "email": "won@naver.com",
    "followerCnt": 12,
    "followingCnt": 0,
    "award": ["제1회 카카오 단기 투자 대회 우승", "제2회 공모주 투자 대회 준우승"],
    "money": 122145221,
    "ticketCnt": 12
  };

  return(
    <Container>
      <Wrapper>
        <ColorBox>
        </ColorBox>
        <Img src="./icon/user4.png"/>
      </Wrapper>
      <BtnWrapper>
        <MenuBtn>PROFILE</MenuBtn>
        <MenuBtn>나의 게시글</MenuBtn>
        <MenuBtn>좋아요 목록</MenuBtn>
        <MenuBtn>기록 관리</MenuBtn>
        <MenuBtn>전략 목록</MenuBtn>
      </BtnWrapper>
      <ContentContainer>
        <Profile data={data} />
      </ContentContainer>
      

    </Container>
  );
}

export default MyPage;