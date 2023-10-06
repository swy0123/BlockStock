import { styled } from "styled-components";

export const Container = styled.div`
width: 99%;
`;
export const CurrentContestBox = styled.div`
  /* width: 100%; */
  min-width: 1190px;
  height: 450px;
  margin-bottom: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.08);  
  background-color: white;
  margin-left: 5px;
`;
export const NotCurrentContest = styled.div`
display: flex;
position: relative;
min-width: 900px;
height: 30px;
left: 37%;
top: 35%;
color: rgba(0, 0, 0, 0.49);
text-align: center;
font-family: 'Alatsi';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 26px;
color: #ABABAB;
`;

export const NotCurrentContestImage = styled.img`
  width: 30px;
  height: 30px;
`;

export const CurrentContestTitle = styled.div`
  font-size: 25px;
  margin: 0px 0px 10px 10px;
  font-weight: bold;
  width: 150px;
`;

export const ContestHeader = styled.div`
  display:flex;
  font-size: 12px;
  width: 500px;
  margin: 10px 0px 0px 0px;
`;

export const ContestTitle = styled.div`
  margin: 20px 0px 5px 0px;
  font-weight: bold;
  font-size: 18px;
`;

export const Contestperiod = styled.div`
  margin: 25px 0px 5px 20px;
  font-weight: 500;
  font-size: 12px;
  color: #A0A0A0;
`;

export const CurrentContestList = styled.div`
  width: 1400px;
  margin: 0px 0px 0px 40px;
`;

export const CurrentContestLinkBox = styled.div`
  display:flex;
  color: #A0A0A0;
  font-size: 14px;
  margin: 5px 0px 0px 0px;
  div:hover {
    cursor: pointer;
  }
`;
export const CurrentContestLink = styled.div`
margin-left: 20px;

`;
export const CurrentContestRankBox = styled.div`
  display:flex;
`;

export const RankImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin: 20px 0px 0px 32%;
`;

export const ContestReturn = styled.div`
  margin: 8px 0px 0px 0px;
  color: #8A8A8A;
`;

export const NoRankImage = styled.img`
  width: 20px;
  height: 20px;
  margin: 7px 15px 0px 10px;
  border-radius: 50px;
`;

export const RankUser = styled.div`
width: 53%;
height: 100%;
/* margin: 0px 50px 0px 0px; */
`;
export const RankUserNickName = styled.div`
  font-size:14px;
  font-weight: bold;
  margin-top: 8px;
  text-align: center;
`;

export const Participant = styled.div`
  width: 440px;
  max-height: 330px;
  overflow-y: auto;
  /* 스크롤바 트랙 (배경) 스타일링 */
  &::-webkit-scrollbar {
    width: 4px; /* 스크롤바의 너비 설정 */
  }

  /* 스크롤바 색상 설정 */
  &::-webkit-scrollbar-thumb {
    background: #888; /* 스크롤바 색상 설정 */
    border-radius: 6px; /* 스크롤바 모양을 둥글게 만듭니다. */
  }

  /* 스크롤바 hover 시 색상 변경 */
  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* 스크롤바 hover 시 색상 변경 */
  }
`;

export const Line = styled.div`
height: 330px;
border: 1px solid #D3D3D3;
margin: 0px 5% 0px 30px;
`;

export const Prev = styled.div`
position: absolute;
min-width: 30px;
top:240px;
left: 10px;
color: #E1E1E1;
`;
export const Next = styled.div`
position: absolute;
min-width: 30px;
top:220px;
right: -50px;
color: #E1E1E1;
`;

export const NotUser = styled.div`
position: relative;
top: 100px;
left: 43%;
font-size: 25px;
color: #ABABAB;
`;