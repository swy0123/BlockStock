import { atom } from 'recoil';

export const completedContestListState = atom({
  key: 'completedContestListState',
  default: [
    {
      id: "1",
      title: "Contest 1",
      startAt: "2023-09-15 09:00:00",
      endAt: "2023-09-30 18:00:00",
      content: "Contest 1 details",
      ticket: "5",
      term: "Weekly",
      maxCapacity: "100",
      joinPeople: "50",
      isRegisted: true
    },
    {
      id: "2",
      title: "Contest 2",
      startAt: "2023-10-01 10:00:00",
      endAt: "2023-10-15 20:00:00",
      content: "Contest 2 details",
      ticket: "3",
      term: "Monthly",
      maxCapacity: "50",
      joinPeople: "30",
      isRegisted: false
    },
    {
      id: "3",
      title: "Contest 3",
      startAt: "2023-10-20 15:00:00",
      endAt: "2023-11-10 22:00:00",
      content: "Contest 3 details",
      ticket: "8",
      term: "Daily",
      maxCapacity: "80",
      joinPeople: "70",
      isRegisted: true
    },
    {
      id: "4",
      title: "Contest 4",
      startAt: "2023-11-01 08:30:00",
      endAt: "2023-11-30 17:30:00",
      content: "Contest 4 details",
      ticket: "4",
      term: "Weekly",
      maxCapacity: "60",
      joinPeople: "45",
      isRegisted: false
    },
    {
      id: "5",
      title: "Contest 5",
      startAt: "2023-12-01 14:00:00",
      endAt: "2023-12-31 23:59:59",
      content: "Contest 5 details",
      ticket: "10",
      term: "Monthly",
      maxCapacity: "120",
      joinPeople: "100",
      isRegisted: true
    }
  ],
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