import React, { useState } from "react";
import Profile from "../../components/MyPage/Profile";
import MyBoard from "../../components/MyPage/MyBoard";
import LikeList from "../../components/MyPage/LikeList";
import RecodeList from "../../components/MyPage/RecodeList";
import TacticList from "../../components/MyPage/TacticList";
import NickNameModal from "../../components/MyPage/EditModal/NickNameModal";
import PasswordModal from "../../components/MyPage/EditModal/ChangePasswordModal";
import SecessionModal from "../../components/MyPage/EditModal/SecessionModal";
import { useQuery } from "react-query";
import { getmypage } from "../../api/Mypage";
import { Container,
  Wrapper,
  ColorBox,
  FollowBox,
  Follow,
  Text1,
  InfoBox,
  Box,
  Img,
  Text,
  Btn,
  EditBtn,
  BtnWrapper,
  MenuBtn,
  ContentContainer
} from "./Mypage.style";

function MyPage() {
  const [selectedMenu, setSelectedMenu] = useState("PROFILE"); // 기본 메뉴 선택
  const [isEditing, setIsEditing] = useState(false);

  // useQuery data 받아오기
  const {data, isLoading, isError} = useQuery("mypage", getmypage);
  // console.log("data", data)

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

  const enterEditMode = () => {
    setIsEditing(true);
  };

  const exitEditMode = () => {
    setIsEditing(false);
  };
  const closeModal = () => {
    setIsEditing(false);
  };
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isSecessionModalOpen, setIsSecessionModalOpen] = useState(false);
  
  const openNameModal = () => {
    setIsNameModalOpen(true);
    setIsEditing(true);
  }
  const openPasswordModal = () => {
    setIsPasswordModalOpen(true);
    setIsEditing(true);
  }
  const openSecessionModal = () => {
    setIsSecessionModalOpen(true);
    setIsEditing(true);
  } 
  const closeNameModal = () => {
    setIsNameModalOpen(false);
    setIsEditing(false);
  }
  const closePasswordModal = () => {
    setIsPasswordModalOpen(false);
    setIsEditing(false);
  }
  const closeSecessionModal = () => {
    setIsSecessionModalOpen(false);
     setIsEditing(false);
  }
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
          <NickNameModal
            isOpen={isNameModalOpen}
            onClose={() => {
              closeNameModal();
              closeModal();
            }}
            data = {data.nickname}
          />
          <PasswordModal
            isOpen={isPasswordModalOpen}
            onClose={() => {
              closePasswordModal();
              closeModal();
            }}
          />
          <SecessionModal
            isOpen={isSecessionModalOpen}
            onClose={() => {
              closeSecessionModal();
              closeModal();
            }}
          />
          <div
        onMouseEnter={enterEditMode}
        onMouseLeave={exitEditMode}
        onClick={exitEditMode}
      >
        {isEditing ? (
          <div>
            <Btn onClick={openNameModal}>닉네임 변경</Btn>
            <Btn onClick={openPasswordModal}>비밀번호 변경</Btn>
            <Btn onClick={openSecessionModal}>회원 탈퇴</Btn>
          </div>
        ) : (
          <EditBtn>회원 정보 수정 →</EditBtn>
        )}
      </div>
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
