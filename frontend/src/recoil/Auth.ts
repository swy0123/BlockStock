import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();


// 로그인 유저 정보(현재는 memberId만)
export const CurrentUserAtom = atom({
  key: "CurrentUserAtom",
  default: {
    userid: 0,
  },
  effects_UNSTABLE: [persistAtom], // 상태가 변할 때마다 로컬스토리지에 저장
});

// 로그인 상태 관리
export const LoginState = atom({
    key: "LoginState",
    default: false,
    effects_UNSTABLE: [persistAtom],
  });