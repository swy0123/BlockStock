import { atom } from 'recoil';

export const freeBoardList = atom({
  key: 'freeBoardList',
  default: [
    {
      freeboard: {
        id: 0,
        title: "프리보드 글 제목 1",
        nickname: "User 1",
        hit: 100,
        modifiedAt: "2023.09.14 10:30:00"
      }
    },
    {
      freeboard: {
        id: 1,
        title: "프리보드 글 제목 1",
        nickname: "User 2",
        hit: 85,
        modifiedAt: "2023.09.14 09:45:00"
      }
    },
    {
      freeboard: {
        id: 2,
        title: "프리보드 글 제목 1",
        nickname: "User 3",
        hit: 120,
        modifiedAt: "2023.09.13 15:20:00"
      }
    },
    {
      freeboard: {
        id: 3,
        title: "프리보드 글 제목 1",
        nickname: "User 4",
        hit: 75,
        modifiedAt: "2023.09.13 12:15:00"
      }
    },
    {
      freeboard: {
        id: 4,
        title: "프리보드 글 제목 ",
        nickname: "User 5",
        hit: 60,
        modifiedAt: "2023.09.12 14:10:00"
      }
    },
    {
      freeboard: {
        id: 5,
        title: "프리보드 글 제목 6",
        nickname: "User 6",
        hit: 95,
        modifiedAt: "2023.09.12 11:25:00"
      }
    },
    {
      freeboard: {
        id: 6,
        title: "프리보드 글 제목 7",
        nickname: "User 7",
        hit: 110,
        modifiedAt: "2023.09.11 08:50:00"
      }
    },
    {
      freeboard: {
        id: 7,
        title: "프리보드 글 제목 8",
        nickname: "User 8",
        hit: 45,
        modifiedAt: "2023.09.11 06:30:00"
      }
    },
    {
      freeboard: {
        id: 8,
        title: "프리보드 글 제목 9",
        nickname: "User 9",
        hit: 80,
        modifiedAt: "2023.09.10 17:15:00"
      }
    },
    {
      freeboard: {
        id: 9,
        title: "프리보드 글 제목 10",
        nickname: "User 10",
        hit: 70,
        modifiedAt: "2023.09.10 13:55:00"
      }
    }
  ]
})


export const post = atom({
  key: 'post',
  default: [
    {
      memberId: 1,
      nickname: "User1",
      content: "This is the content of post 1.",
      hit: 100,
      modifiedAt: "2023.09.15 12:30:00",
      likes: "50",
      isLike: "false",
      files: [
        {
          fileName: "file1.txt"
        }
      ]
    },
    {
      memberId: 2,
      nickname: "User2",
      content: "This is the content of post 2.",
      hit: 75,
      modifiedAt: "2023.09.14 14:45:00",
      likes: "30",
      isLike: "true",
      files: []
    },
    {
      memberId: 3,
      nickname: "User3",
      content: "This is the content of post 3.",
      hit: 120,
      modifiedAt: "2023.09.13 09:15:00",
      likes: "80",
      isLike: "true",
      files: [
        {
          fileName: "image1.jpg"
        },
        {
          fileName: "image2.jpg"
        }
      ]
    },
    {
      memberId: 4,
      nickname: "User4",
      content: "This is the content of post 4.",
      hit: 50,
      modifiedAt: "2023.09.12 17:20:00",
      likes: "25",
      isLike: "false",
      files: []
    },
    {
      memberId: 5,
      nickname: "User5",
      content: "This is the content of post 5.",
      hit: 90,
      modifiedAt: "2023.09.11 10:10:00",
      likes: "45",
      isLike: "false",
      files: [
        {
          fileName: "document.pdf"
        }
      ]
    },
    {
      memberId: 6,
      nickname: "User6",
      content: "This is the content of post 6.",
      hit: 60,
      modifiedAt: "2023.09.10 08:55:00",
      likes: "15",
      isLike: "true",
      files: []
    },
    {
      memberId: 7,
      nickname: "User7",
      content: "This is the content of post 7.",
      hit: 110,
      modifiedAt: "2023.09.09 16:40:00",
      likes: "70",
      isLike: "true",
      files: [
        {
          "fileName": "image3.png"
        }
      ]
    },
    {
      memberId: 8,
      nickname: "User8",
      content: "This is the content of post 8.",
      hit: 70,
      modifiedAt: "2023.09.08 21:05:00",
      likes: "35",
      isLike: "false",
      files: []
    },
    {
      memberId: 9,
      nickname: "User9",
      content: "This is the content of post 9.",
      hit: 80,
      modifiedAt: "2023.09.07 13:25:00",
      likes: "40",
      isLike: "true",
      files: []
    },
    {
      memberId: 10,
      nickname: "User10",
      content: "This is the content of post 10.",
      hit: 65,
      modifiedAt: "2023.09.06 19:50:00",
      likes: "20",
      isLike: "false",
      files: [
        {
          fileName: "file2.txt"
        },
        {
          fileName: "image4.jpg"
        }
      ]
    }
  ]
})