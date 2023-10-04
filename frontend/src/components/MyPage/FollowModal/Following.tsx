import { useQuery, useQueryClient } from "react-query";
import { getFollowing } from "../../../api/MyPage/Follow";
import { goFollow, unFollow } from "../../../api/MyPage/Follow";
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

function Following() {
  const { data, isLoading, isError } = useQuery("myfollowing", getFollowing);
  const queryClient = useQueryClient();

  const refetchData = async () => {
    await queryClient.refetchQueries("myfollowing");
  };

  //팔로우
  const handleFollow = async (following: boolean, id: number) => {
    console.log("여부", following, "id", id);
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
                <FollowBtn
                  onClick={() => handleFollow(info.following, info.id)}
                >
                  {data.following ? "팔로잉" : "팔로우"}
                </FollowBtn>
                {/* {info.following ? (
                                <FollowingBtn onClick={() => handleFollow(info.following, info.id)}>팔로잉</FollowingBtn>
                                ) : (
                                <FollowBtn onClick={() => handleFollow(info.following, info.id)}>팔로우</FollowBtn>
                            )} */}
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

export default Following;
