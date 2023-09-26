import { atom } from 'recoil';

// type에 따라 버튼, 생성 컴포넌트, 목록 컴포넌트 변경
export const type = atom({
  key: 'type',
  default: 'List'
})
    
