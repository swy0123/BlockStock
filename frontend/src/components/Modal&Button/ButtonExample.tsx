import styled from "styled-components";

// 가져가서 너비, 높이 바꿔서 자유롭게 사용 색은 4개중에서 골라서 사용 권장

// 색
"#b155fd"
"#e8e8e8"
"#dfd1f8"
"#f1f1f2"
"#e6e5e7"
"#f1e2ff"
"#af65fe"

// 보라색 버튼 디자인
export const Btn0 = styled.button`
  width: 130px;
  height: 35px;
  font-size: 13px;
  border-radius: 6px;
  border: 0;
  background: #9155FD;
  color: white;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  cursor: pointer;
  transition: 0.5s; // 자연스럽게 호버 효과 주려고 넣음(필수)
  &:hover {
    background: #dfd1f8;
    color: #535155;
    transition: 0.5s;
  }
`;

// 회색 계열 버튼 디자인(팔로우)
export const Btn1 =styled.button`
    border: 0px;
    width: 60px;
    height: 30px;
    border-radius: 8px;
    background: #f1f1f2;
    cursor: pointer;
    &:hover{
        background: #e6e5e7;
    }
`

// 보라 테두리 계열 버튼 디자인(팔로우, 종목 선택)
export const Btn2 =styled.button`
    border: 0px;
    width: 70px;
    height: 30px;
    border-radius: 8px;
    background: #ffffff;
    border: solid 1.8px;
    color: gray;
    cursor: pointer;
    &:hover{
        background-color: #faf8fe;
        transition: 0.5s;
        color: #9155FD;
    }
`