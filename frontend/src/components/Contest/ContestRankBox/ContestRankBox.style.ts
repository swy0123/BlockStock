import styled from "styled-components";

export const Container = styled.div`
width: 300px;
@media (max-width: 1000px) {
    margin-right: 5%; 
  }
min-height: 20%;
background: #FFFFFF;
border: 2px solid #EFEFEF;
border-radius: 10px;
`;
// 해터 안에 타이틀을 padding을 사용하여 안으로 넣음
export const Header = styled.div`
width: 80%;
height: 20%;
padding: 20px;
border: 1px solid black;
`;
// 실시간 랭킹 타이틀
export const HeaderTitle = styled.div`
font-size: 25px;
font-weight: 530;
`;
// 내용 높이가 길어질시 스크롤을 사용
export const Wrapper = styled.div`
max-height: 220px;
min-width: 100%;
overflow-y: auto;
`;
// map 안에 item 하나 
export const RankBox = styled.div`
display: flex;
padding: 10px 20px;
`;
// map으로 돌린 데이터를 아이템 하나라 한다
// 아이템 안의 요소를 박스로 만들어 거리감을 준다
export const RankNumber = styled.div`
font-size: 16px;
font-weight: 550;
color: #5B5B5B;
width: 50px;
border: 1px solid black;
`;
export const UserImg = styled.img`
width: 25px;
height: 25px;
border: 1px solid black;
margin: 0px 10px 0px 0px;
`;
export const UserNickName = styled.div`
font-size: 12px;
width: 100px;
border: 1px solid black;
`;
export const UserReturnBox = styled.div`
font-size: 12px;
border: 1px solid black;
`;
export const UserReturn = styled.div`
`;
export const UserReturnIcon = styled.div`
`;


