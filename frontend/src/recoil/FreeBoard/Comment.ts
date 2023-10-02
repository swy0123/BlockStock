import { atom } from 'recoil';

// const dummyData = [];

// for (let i = 1; i <= 10; i++) {
//   const comment = {
//     commentId: i.toString(),
//     memberId: i.toString(),
//     nickName: `User${i}`,
//     profileImage: `profile${i}.jpg`,
//     content: `This is comment #${i}`,
//     createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
//   };
//   dummyData.push(comment);
// }

export const commentlist = atom({
  key: 'commentlist',
  default: [

  ]
})