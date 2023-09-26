// 유저 페이지
import React, { useState } from "react";
import UserProfile from "../../components/UserPage.tsx/UserProfile";
import MyBoard from "../../components/MyPage/MyBoard";
import FollowListModal from "../../components/MyPage/FollowModal/FollowListModal";
import { useQuery } from "react-query";
import { getUserPage } from "../../api/MyPage/Userpage";
import {
  Container,
  Wrapper,
  ColorBox,
  FollowBox,
  Follow,
  Text1,
  InfoBox,
  Box,
  Img,
  Text,
  FollowBtn,
  BtnWrapper,
  MenuBtn,
  ContentContainer,
  MailIcon,
} from "./Mypage.style";

function UserPage() {
  const [selectedMenu, setSelectedMenu] = useState("PROFILE"); // 기본 메뉴 선택
  const memberId = 38 // 클릭 유저 아이디 가져오기
  const { data, isLoading, isError } = useQuery("userpage", getUserPage);

  const renderContent = () => {
    switch (selectedMenu) {
      case "PROFILE":
        return <UserProfile />;
      case "작성 게시글":
        return <MyBoard />;
      default:
        return null;
    }
  };

  const [isFollowModalOpen, setIsFollowModalOpen] = useState(false);
  const [isFollowType, setIsFollowType] = useState("");

  const openFollowerModal = () => {
    setIsFollowModalOpen(true);
    setIsFollowType("follower");
  };
  const openFollowingModal = () => {
    setIsFollowModalOpen(true);
    setIsFollowType("following");
  };
  const closeFollowModal = () => {
    setIsFollowModalOpen(false);
  };
  if (isLoading) {
    return <div>Loading...</div>; // 데이터가 로드 중일 때 표시할 내용
  }

  if (isError) {
    return <div>Error loading data.</div>; // 데이터 로드 중 오류가 발생한 경우 처리
  }
  return (
    <Container>
      <Wrapper>
        <ColorBox>
          <FollowBox>
            <Follow onClick={openFollowerModal}>
              <Text1>{data.followerCnt}</Text1>
              <Text1>팔로워</Text1>
            </Follow>
            <Follow onClick={openFollowingModal}>
              <Text1>{data.followingCnt}</Text1>
              <Text1>팔로잉</Text1>
            </Follow>
          </FollowBox>
        </ColorBox>
        <FollowListModal
          isOpen={isFollowModalOpen}
          onClose={closeFollowModal}
          text={isFollowType}
        />
        <InfoBox>
          <Box>
            <Img
              src={`https://j9b210.p.ssafy.io:8443/api/member/profile/${memberId}`}
              alt="profile"
            />
            <Text>{data.nickname}</Text>
            <InfoBox>
              <MailIcon src="/icon/mail.png" />
              <Text>{data.email}</Text>
            </InfoBox>
          </Box>
          <FollowBtn following={data.following}>
            {data.following ? "✅팔로잉" : "팔로우"}
          </FollowBtn>
        </InfoBox>
      </Wrapper>
      <BtnWrapper>
        <MenuBtn
          onClick={() => setSelectedMenu("PROFILE")}
          isSelected={selectedMenu === "PROFILE"}
        >
          PROFILE
        </MenuBtn>
        <MenuBtn
          onClick={() => setSelectedMenu("작성 게시글")}
          isSelected={selectedMenu === "작성 게시글"}
        >
          작성 게시글
        </MenuBtn>
      </BtnWrapper>
      <ContentContainer>{renderContent()}</ContentContainer>
    </Container>
  );
}

export default UserPage;
