import { useQuery, useQueryClient } from "react-query";
import { getUserFollower, goFollow, unFollow } from "../../../api/MyPage/Follow";
import {
  Container,
  UserBox,
  Img,
  Name,
  FollowBtn,
  FollowingBtn,
  Info,
  Box,
} from "./Follow.style";

function UserFollower(props) {
    const { memberId } = props;
    console.log("유저 팔로우 넘버",props.memberId)
    const { data, isLoading, isError } = useQuery("getUserFollower", () => getUserFollower(memberId));
    const queryClient = useQueryClient();

  const refetchData = async () => {
    await queryClient.refetchQueries("getUserFollower");
  };

  //팔로우
  const handleFollow = async (following: boolean, memberId: number) => {
    if (following == false) {
      const response = await goFollow(memberId);
      console.log(response);
    } else {
      const response = await unFollow(memberId);
      console.log(response);
    }
    refetchData();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading data</div>;
  }
  return (
    <Container>
      {data.map(
        (info: { memberId: number; nickname: string; following: boolean }) => (
          <UserBox key={info.memberId}>
            <Box>
              <Img src={`https://j9b210.p.ssafy.io:8443/api/member/profile/${info.id}`}></Img>
              <Name>{info.nickname}</Name>
              <Box>
                {info.following ? (
                  <FollowingBtn
                    onClick={() => handleFollow(info.following, info.id)}
                  >
                    팔로잉
                  </FollowingBtn>
                ) : (
                  <FollowBtn
                    onClick={() => handleFollow(info.following, info.id)}
                  >
                    팔로우
                  </FollowBtn>
                )}
                <Info> …</Info>
              </Box>
            </Box>
            {/* <Hr/> */}
          </UserBox>
        )
      )}
    </Container>
  );
}

export default UserFollower;
