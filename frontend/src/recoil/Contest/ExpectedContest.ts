import { atom } from 'recoil';

export const expectedContestListState = atom({
  key: 'expectedContestListState',
  default: [
  ]
})

export const ContestId = atom({
  key: 'contestid',
  default: {
    contestId:-1,
    tacticId:-1
  }
})