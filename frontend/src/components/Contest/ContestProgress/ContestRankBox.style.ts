import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// 해터 안에 타이틀을 padding을 사용하여 안으로 넣음
export const Header = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: start;
`;
// 실시간 랭킹 타이틀
export const HeaderTitle = styled.div`
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  margin-left: 30px;
`;
// 내용 높이가 길어질시 스크롤을 사용
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 75%;
  overflow-y: scroll;
  /* overflow-x: hidden; */
  &::-webkit-scrollbar {
    width: 8px;
    /* height: 8px; */
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;
// map 안에 item 하나
export const RankBox = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: start;
  align-items: center;
`;
// map으로 돌린 데이터를 아이템 하나라 한다
// 아이템 안의 요소를 박스로 만들어 거리감을 준다
export const RankNumber = styled.div`
  font-size: 16px;
  font-weight: 550;
  color: #5b5b5b;
  width: 13%;
`;
export const UserImg = styled.img`
  width: 12%;
  /* border: 1px solid black; */
  margin: 0px 10px 0px 0px;
`;
export const UserNickName = styled.div`
  font-size: 12px;
  width: 50%;
`;
export const UserReturnBox = styled.div`
  font-size: 12px;
  width: 20%;
  display: flex;
  flex-direction: column;
`;
export const UserReturn = styled.div<{ $isPositive: boolean }>`
  display: flex;
  justify-content: end;
  color: ${(props) => (props.$isPositive ? "red" : "blue")};
`;
export const UserReturnIcon = styled.div`
  display: flex;
  justify-content: end;
`;
