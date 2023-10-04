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

function UserFollower(memberId:number) {
    const { data, isLoading, isError } = useQuery("getUserFollower", () => getUserFollower(memberId));
    const queryClient = useQueryClient();

  const refetchData = async () => {
    await queryClient.refetchQueries("getUserFollower");
  };

  //팔로우
  const handleFollow = async (following: boolean, id: number) => {
    if (following == false) {
      const response = await goFollow(id);
      console.log(response);
    } else {
      const response = await unFollow(id);
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
        (info: { id: number; nickname: string; following: boolean }) => (
          <UserBox key={info.id}>
            <Box>
              <Img src="/icon/user_purple.png"></Img>
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
