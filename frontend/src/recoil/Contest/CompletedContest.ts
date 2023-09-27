import { atom } from 'recoil';

export const completedContestListState = atom({
  key: 'completedContestListState',
  default: [],
});

export const useRank = atom({
  key: 'useRank',
  default: [
    {
      nickName: "사용자1",
      profileImage: "사용자1의 프로필 이미지 URL",
      return: "+10%" 
    },
    {
      nickName: "사용자2",
      profileImage: "사용자2의 프로필 이미지 URL",
      return: "-5%" 
    },
    {
      nickName: "사용자3",
      profileImage: "사용자3의 프로필 이미지 URL",
      return: "+15%" 
    },
    {
      nickName: "사용자4",
      profileImage: "사용자4의 프로필 이미지 URL",
      return: "-2%" 
    },
    {
      nickName: "사용자5",
      profileImage: "사용자5의 프로필 이미지 URL",
      return: "+8%" 
    },
    {
      nickName: "사용자6",
      profileImage: "사용자1의 프로필 이미지 URL",
      return: "+10%" 
    },
    {
      nickName: "사용자7",
      profileImage: "사용자2의 프로필 이미지 URL",
      return: "-5%" 
    },
    {
      nickName: "사용자8",
      profileImage: "사용자3의 프로필 이미지 URL",
      return: "+15%" 
    },
    {
      nickName: "사용자9",
      profileImage: "사용자4의 프로필 이미지 URL",
      return: "-2%" 
    },
    {
      nickName: "사용자10",
      profileImage: "사용자5의 프로필 이미지 URL",
      return: "+8%" 
    }
  ]
});