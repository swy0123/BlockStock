import { privateApi } from "..";
// 팔로우하기
export const goFollow = async(id: number) => {
    try{
        // console.log('yyertgdfxc')
        const response = await privateApi.post("/member/follow", {
            targetId: id
        });
        // console.log('팔로우 성공?', response);
    }catch(error){
        console.log(error)
    }
}

// 언팔
export const unFollow = async(id: number) => {
    try{
        console.log('언팔하게따')
        const response = await privateApi.delete(`/member/unfollow/${id}`);
        console.log('언팔 성공?', response);
    }catch(error){
        console.log(error)
    }
}

// 내 팔로워
export const getFollower = async() => {
    try {
        console.log('팔로우 가져오기 시도')
        const response = await privateApi.get("/member/follower");
        return response.data;
    }catch(error){
        console.log("---팔로워 가져오기 실패", error)
    }
};

// 내 팔로잉
export const getFollowing = async() => {
    try {
        console.log('팔로잉 가져오기 시도')
        const response = await privateApi.get("/member/following");
        return response.data;
    }catch(error){
        console.log("---팔로잉 가져오기 실패", error)
    }
};

// 유저 팔로워
export const getUserFollower = async( memberId: number) => {
    try {
        console.log('유저 팔로우 가져오기 시도')
        const response = await privateApi.get(`/member/${memberId}/follower`);
        return response.data;
    }catch(error){
        console.log("---유저팔로워 가져오기 실패", error)
    }
};

// 유저 팔로잉
export const getUserFollowing = async(memberId: number) => {
    try {
        console.log('유저 팔로잉 가져오기 시도')
        const response = await privateApi.get(`/member/${memberId}/following`);
        return response.data;
    }catch(error){
        console.log("---유저 팔로잉 가져오기 실패", error)
    }
};