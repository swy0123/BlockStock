import { useQuery } from "react-query";
import { getFollower } from "../../../api/MyPage/Follow";
import { 
    Container,
    UserBox,
    Img,
    Name,
    FollowBtn,
    FollowingBtn,
    Info,
    Box,
    Hr,
 } from "./Follow.style";

function Follower() {
    const {data, isLoading, isError} = useQuery("myfollower", getFollower);

    console.log("팔로워 data", data)
    
    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error loading data</div>
    }
    return(
        <Container>
            {data.map((info: { id: number; nickname: string; following: boolean; }) => (
                <UserBox key={info.id}>
                    <Box>
                        <Img src="./icon/user_purple.png"></Img>
                        <Name>{info.nickname}</Name>
                        <Box>
                            {info.following ? (
                                <FollowingBtn>팔로잉</FollowingBtn>
                                ) : (
                                <FollowBtn>팔로우</FollowBtn>
                            )}
                            <Info> …</Info>
                        </Box>
                    </Box>
                    {/* <Hr/> */}
                </UserBox>
            ))}
        </Container>
    )
}

export default Follower;