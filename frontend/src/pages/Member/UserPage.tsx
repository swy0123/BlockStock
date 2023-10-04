// 유저 페이지
import React, { useState } from "react";
import UserProfile from "../../components/UserPage.tsx/UserProfile";
import MyBoard from "../../components/MyPage/MyBoard";
import UserFollowList from "../../components/MyPage/FollowModal/UserFollowList";
import { useQuery, useQueryClient } from "react-query";
import { useLocation } from "react-router-dom";
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
import { goFollow, unFollow } from "../../api/MyPage/Follow";

function UserPage() {
  const [selectedMenu, setSelectedMenu] = useState("PROFILE"); // 기본 메뉴 선택
  const location = useLocation();
  const memberId = location.state?.memberId;
  console.log("유저페이지 id", memberId);
  const { data, isLoading, isError } = useQuery("userpage", () =>
    getUserPage(memberId)
  );
  const queryClient = useQueryClient();

  const refetchData = async () => {
    await queryClient.refetchQueries("userpage");
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case "PROFILE":
        return <UserProfile/>;
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

  //팔로우
  const handleFollow = async (following : boolean) => {
    if (following == false) {
      const response = await goFollow(memberId);
      console.log(response);
    }
    else {
      const response = await unFollow(memberId);
      console.log(response);
    }
    refetchData();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }
  return (
    <Container>
      <Wrapper>
        <ColorBox>
          {/* <FollowBox>
            <Follow onClick={openFollowerModal}>
              <Text1>{data.followerCnt}</Text1>
              <Text1>팔로워</Text1>
            </Follow>
            <Follow onClick={openFollowingModal}>
              <Text1>{data.followingCnt}</Text1>
              <Text1>팔로잉</Text1>
            </Follow>
          </FollowBox> */}
        </ColorBox>
        {/* <UserFollowList
          isOpen={isFollowModalOpen}
          onClose={closeFollowModal}
          text={isFollowType}
          memberId = {memberId}
        /> */}
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
          <FollowBtn onClick={()=> handleFollow(data.following)} following={data.following}>
            {data.following ? "팔로잉" : "팔로우"}
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
