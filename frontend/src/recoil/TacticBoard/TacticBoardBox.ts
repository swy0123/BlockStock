import { atom } from 'recoil';

export const tacticBoardList = atom({
  key: 'tacticBoardList',
  default: {}
})

export const tacticdata = atom({
  key: 'tacticdata',
  default: {
    tacticId : 0,
    imgPath: null
  }
})