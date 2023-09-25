import { atom } from 'recoil';

export const data = atom({
  key: 'data',
  default: {
    status:'expected',
    page:0,
    size:0,
    key_word:''
  }
})
    