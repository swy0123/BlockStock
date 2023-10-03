import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RightArrowSrc from "../../assets/img/MakeTactic/rightarrow.png";
// import Swal from 'sweetalert2'

const Container = styled.div` 
    width: 250px;
    position: fixed;
    z-index: 90;
    background-color: #F4F5FA;
    margin-right: 200px;
    /* margin-top: 80px; */
`;
const SideWrapper = styled.div`
    padding-top: 10px;
    height: 90vh;
    /* padding-right: 50px; */
    width: 200px;
`;
const ClickBox1 = styled.div`
	height: 42px;
  display: flex;
  align-items: center;
	border-radius: 0px 50px 50px 0px;
	background-color: rgba(235, 236, 242, 0.81);
	&:hover {
		background: linear-gradient(270deg, #AC85F4 0%, #9256FD 0.01%, #D3BBFF 100%);
		background-blend-mode: multiply;
    color: white;
    transition: 0.5s;
  }
`;
const ClickBox = styled.div`
  width: 100%;
	height: 42px;
  display: flex;
  align-items: center;
	border-radius: 0px 50px 50px 0px;
	transition: 0.5s;
	&:hover {
		background: linear-gradient(270deg, #AC85F4 0%, #9256FD 0.01%, #D3BBFF 100%);
		background-blend-mode: multiply;
    color: white;
    transition: 0.5s;
  }
`;
const Img = styled.img`
    width: 15px;
    height: 15px;
    margin: 0px 20px;
`;
const Text = styled.p`
  font-size  : 17px;
  color: #504b53;
`;
const Menu = styled.div`
	font-size: 15px;
	margin-left: 55px;
	color: #504b53;
	transition: 0.5s;
	&:hover {
    color: #ffffff;
    transition: 0.5s;
  }
`;
const Icon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 10%;
  opacity: 50%;
  cursor: pointer;
  &:hover{
    opacity: 100;
  }
`
const Close = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10%;
  opacity: 50%;
  cursor: pointer;
  &:hover{
  }
`

function SideBar(){
  const navigate = useNavigate();
  const [showContestMenu, setShowContestMenu] = useState(false);
  const [showBoardMenu, setShowBoardMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showSideWrapper, setShowSideWrapper] = useState(true);

  if (window.location.pathname === '/login') return null;
  if (window.location.pathname === '/signup') return null;
  if (window.location.pathname === '/findpw') return null;

  const toggleContestMenu = () => {
    setShowContestMenu(!showContestMenu);
  };
  const toggleBoardMenu = () => {
    setShowBoardMenu(!showBoardMenu);
  };
  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };
  const toggleSideWrapper = () => {
    setShowSideWrapper(!showSideWrapper);
  };

    return(
        <Container>
          {showSideWrapper && (
            <SideWrapper>
                <ClickBox1 onClick={()=> navigate("/")}>
                    <Img src="/icon/home.png"/>
                    <Text>홈</Text>
								</ClickBox1>
								<ClickBox onClick={()=> navigate("/maketactic")}>
                    <Img src="/icon/circle.png"/>
										<Text>전략생성</Text>
                </ClickBox>
								<ClickBox>
                    <Img src="/icon/circle.png"/>
										<Text>모의투자대회</Text>
                    <Icon src="/icon/down.png" onClick={toggleContestMenu}/>
                </ClickBox>
								{showContestMenu && (
                <>
                <ClickBox onClick={() => navigate("/contest")}>
                  <Menu>개요</Menu>
                </ClickBox>
                <ClickBox onClick={() => navigate("/currentcontest")}>
                  <Menu>진행중인 대회</Menu>
                </ClickBox>
                <ClickBox onClick={() => navigate("/expectedcontest")}>
                  <Menu>예정 대회</Menu>
                </ClickBox>
                <ClickBox onClick={() => navigate("/completedcontest")}>
                  <Menu>종료 대회</Menu>
                </ClickBox>
              </>
             )}
								<ClickBox>
                    <Img src="/icon/circle.png"/>
										<Text>게시판</Text>
                    <Icon src="/icon/down.png" onClick={toggleBoardMenu}/>
                </ClickBox>
                {showBoardMenu && (
                <>
								<ClickBox onClick={()=>navigate("/freeboard")}>
										<Menu>자유 게시판</Menu>
                </ClickBox>
								<ClickBox onClick={()=>navigate("/tacticboard")}>
										<Menu>전략 게시판</Menu>
                </ClickBox>
                </>
                )}
								<ClickBox>
                    <Img src="/icon/user_black.png"/>
										<Text>사용자</Text>
                    <Icon src="/icon/down.png" onClick={toggleProfileMenu}/>
                </ClickBox>
                {showProfileMenu && (
                <>
								<ClickBox onClick={()=> navigate("/mypage")}>
										<Menu>프로필</Menu>
                </ClickBox>
								<ClickBox>
										<Menu>나의 게시글</Menu>
                </ClickBox>
								<ClickBox>
										<Menu>좋아요 목록</Menu>
                </ClickBox>
								<ClickBox>
										<Menu>기록 관리</Menu>
                </ClickBox>
								<ClickBox>
										<Menu>전략 목록</Menu>
                </ClickBox>
                </>
              )}
            </SideWrapper>
            )}
             <Close 
             src={RightArrowSrc}
             onClick={toggleSideWrapper}
             style={{
              position: "absolute",
              bottom: showSideWrapper ? "50%" : "-400px",
              right: showSideWrapper? "10%": ""}} />
        </Container>
    );
}

export default SideBar;