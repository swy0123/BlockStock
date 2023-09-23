import { privateApi } from "..";

// 팔로워
export const getFollower = async() => {
    try {
        console.log('팔로우 가져오기 시도')
        const response = await privateApi.get("/member/follower");
        return response.data;
    }catch(error){
        console.log("---팔로워 가져오기 실패", error)
    }
};

export const getFollowing = async() => {
    try {
        console.log('팔로잉 가져오기 시도')
        const response = await privateApi.get("/member/following");
        return response.data;
    }catch(error){
        console.log("---팔로잉 가져오기 실패", error)
    }
};