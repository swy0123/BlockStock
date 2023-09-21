import { atom } from 'recoil';

const dummyData = [];

// 10개의 더미 데이터 생성
for (let i = 1; i <= 10; i++) {
  const data = {
    tacticPostId: i,
    title: `제목 ${i}`,
    imgPath: "",
    testReturns: -2.1,
    contestReturns: 2.2,
    likeCnt: 21,
    isLike: true,
    hit: 40,
  };

  // 생성한 데이터를 배열에 추가
  dummyData.push(data);
}

export const TacticBoardList = atom({
  key: 'TacticBoardList',
  default: [...dummyData
  ]
})

export const tacticdata = atom({
  key: 'tacticdata',
  default: null
})