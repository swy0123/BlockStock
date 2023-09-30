import { atom } from 'recoil';

const dummyData = [];

// 10개의 더미 데이터 생성
for (let i = 1; i <= 10; i++) {
  const data = {
    "id": `${i}`,
    "memberId": 10,
    "optionName" : "카카오",
    title: `제목 ${i}`,
    imgPath: "/icon/전략불록.png",
    "optionCode": "555555",
    "tacticJsonCode": "{\"block\" : \"round\"}",
    "tacticPythonCode": "print(hello)",
    testReturns: -2.1,
    contestReturns: 2.2,
    "createdAt": "2023-09-23T21:11:49"
  };

  // 생성한 데이터를 배열에 추가
  dummyData.push(data);
}

export const TacticList = atom({
  key: 'TacticList',
  default: [...dummyData
  ]
})
