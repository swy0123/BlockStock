import { useQuery, useQueryClient } from "react-query";
import { getFollower } from "../../../api/MyPage/Follow";
import { goFollow, unFollow } from "../../../api/MyPage/Follow";
import {
  Container,
  UserBox,
  Img,
  Name,
  Info,
  Box,
  Hr,
  FollowBtn,
  FollowingBtn,
} from "./Follow.style";

function Follower() {
  const { data, isLoading, isError } = useQuery("myfollower", getFollower);
  console.log("팔로워 data", data);

  const queryClient = useQueryClient();

  const refetchData = async () => {
    await queryClient.refetchQueries("myfollower");
  };

  const handleFollow = async (following: boolean, id: number) => {
    if (following == false) {
    console.log("Qhdod")
      const response = await goFollow(id);
      console.log(response);
      refetchData();
    } else {
      const response = await unFollow(id);
      console.log(response);
      refetchData();
    }
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
                  <FollowBtn onClick={() => handleFollow(info.following, info.id)}>팔로우</FollowBtn>
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

export default Follower;
