import { atom } from 'recoil';

export const expectedContestListState = atom({
  key: 'expectedContestListState',
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

export const contestTatic = atom({
  key: 'contestTatic',
  default: [
    {
      tacticId: 1,
      title: "빠르게 가는 전략",
      optionCode: "005147",
      imgPath: "/icon/전략블록.png",
      updatedAt: "2023.09.04"
    },
    {
      tacticId: 2,
      title: "천천히 가는 전략",
      optionCode: "006666",
      imgPath: "/icon/admin2.png",
      updatedAt: "2023.09.04"
    },
    {
      tacticId: 3,
      title: "적당히 가는 전략",
      optionCode: "007777",
      imgPath: "/icon/medal3.png",
      updatedAt: "2023.09.04"
    },
    {
      tacticId: 4,
      title: "고위험 고수익 전략",
      optionCode: "009999",
      imgPath: "/icon/admin2.png",
      updatedAt: "2023.09.05"
    },
    {
      tacticId: 5,
      title: "안전한 투자 전략",
      optionCode: "004321",
      imgPath: "/icon/admin2.png",
      updatedAt: "2023.09.05"
    },
    {
      tacticId: 6,
      title: "장기 투자 전략",
      optionCode: "002222",
      imgPath: "/icon/strategy.png",
      updatedAt: "2023.09.06"
    },
    {
      tacticId: 7,
      title: "단기 투자 전략",
      optionCode: "008888",
      imgPath: "/icon/admin2.png",
      updatedAt: "2023.09.06"
    }
  ]
})