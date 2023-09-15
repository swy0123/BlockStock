import React, { useState } from "react";
import styled from "styled-components";
import Profile from "../../components/MyPage/Profile";
import MyBoard from "../../components/MyPage/MyBoard";
import LikeList from "../../components/MyPage/LikeList";
import RecodeList from "../../components/MyPage/RecodeList";
import TacticList from "../../components/MyPage/TacticList";

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  margin-bottom: 25px;
  border: 0;
  border-radius: 13px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
  /* width: 80%; */
  height: 270px;
  flex-shrink: 0;
`;
const ColorBox = styled.div`
  height: 55%;
  border-radius: 13px 13px 0px 0px;
  background: #c1baee;
`;
const FollowBox = styled.div`
  text-align: end;
  display: flex;
  justify-content: end;
`;
const Follow = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 80px;
  margin-right: 25px;
`;
const BtnWrapper = styled.div`
  display: flex;
`;

const MenuBtn = styled.button<{ isSelected: boolean }>`
  margin-right: 15px;
  width: 130px;
  height: 35px;
  font-size: 13px;
  border-radius: 6px;
  border: 0;
  background: ${({ isSelected }) =>
      isSelected
        ? "#9155FD"
        : "#ffffff"};
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? "white" : "initial")};
  transition: 0.5s;
  &:hover {
    background: ${({ isSelected }) =>
      isSelected
        ? "#9155FD"
        : "#dfd1f8"};
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
    background-blend-mode: multiply;
    color: #535155;
    transition: 0.5s;
  }
`;
const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Box = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
  margin-top: -50px;
  margin-left: 50px;
  margin-right: 30px;
`;
const Text1 = styled.p`
  font-size: 15px;
  margin: 5px;
`;
const Text = styled.p`
  font-size: 15px;
  margin-right: 100px;
`;
const EditBtn = styled.button`
  margin-top: 10px;
  width: 148px;
  height: 35px;
  border-radius: 10px;
  color: white;
  background: #9155fd;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 0;
  margin-right: 20px;
`;
const ContentContainer = styled.div`
  margin-top: 30px;
`;

function MyPage() {
  const data = {
    id: 12,
    nickname: "ssafy1234",
    email: "ssafy1234@naver.com",
    followerCnt: 12,
    followingCnt: 0,
    award: [
      "제1회 카카오 단기 투자 대회 우승",
      "제2회 공모주 투자 대회 준우승",
      "제1회 수익률 of 수익률을 찾아라 준우승",
      "제2회 카카오 단기 투자 대회 우승",
    ],
    money: 122145221,
    ticketCnt: 12,
  };

  const [selectedMenu, setSelectedMenu] = useState("PROFILE"); // 기본 메뉴 선택

  const renderContent = () => {
    switch (selectedMenu) {
      case "PROFILE":
        return <Profile data={data} />;
      case "나의 게시글":
        return <MyBoard />;
      case "좋아요 목록":
        return <LikeList />;
      case "기록 관리":
        return <RecodeList />;
      case "전략 목록":
        return <TacticList />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Wrapper>
        <ColorBox>
          <FollowBox>
            <Follow>
              <Text1>{data.followerCnt}</Text1>
              <Text1>팔로워</Text1>
            </Follow>
            <Follow>
              <Text1>{data.followingCnt}</Text1>
              <Text1>팔로잉</Text1>
            </Follow>
          </FollowBox>
        </ColorBox>
        <InfoBox>
          <Box>
            <Img src="./icon/user4.png" />
            <Text>{data.nickname}</Text>
            <Text>{data.email}</Text>
          </Box>
          <EditBtn>회원 정보 수정 →</EditBtn>
        </InfoBox>
      </Wrapper>
      <BtnWrapper>
        <MenuBtn onClick={() => setSelectedMenu("PROFILE")}
        isSelected={selectedMenu === "PROFILE"}>
          PROFILE
        </MenuBtn>
        <MenuBtn onClick={() => setSelectedMenu("나의 게시글")}
        isSelected={selectedMenu === "나의 게시글"}>
          나의 게시글
        </MenuBtn>
        <MenuBtn onClick={() => setSelectedMenu("좋아요 목록")}
        isSelected={selectedMenu === "좋아요 목록"}
        >
          좋아요 목록
        </MenuBtn>
        <MenuBtn onClick={() => setSelectedMenu("기록 관리")}
        isSelected={selectedMenu === "기록 관리"}>
          기록 관리
        </MenuBtn>
        <MenuBtn onClick={() => setSelectedMenu("전략 목록")}
        isSelected={selectedMenu === "전략 목록"}>
          전략 목록
        </MenuBtn>
      </BtnWrapper>
      <ContentContainer>{renderContent()}</ContentContainer>
    </Container>
  );
}

export default MyPage;
