import { atom } from 'recoil';

export const contesttype = atom({
  key: 'contesttype',
  default: 'expected',
});

// 진행중 - proceed, 예정 - expected, 완료 - finish