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
    console.log(data)
  const refetchData = async () => {
    await queryClient.refetchQueries("myfollowing");
  };

  //팔로우
  const handleFollow = async (following: boolean, id: number) => {
    if (following) {
    console.log("팔로잉에선")
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
                                <FollowBtn
                                onClick={() => handleFollow(info.following, info.id)}
                                >팔로우</FollowBtn>
                                // <FollowingBtn>팔로잉</FollowingBtn>
                                ) : (
                                // <FollowBtn>팔로우</FollowBtn>
                                <FollowingBtn
                                onClick={() => handleFollow(info.following, info.id)}
                                >팔로잉</FollowingBtn>
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

export default Following;
