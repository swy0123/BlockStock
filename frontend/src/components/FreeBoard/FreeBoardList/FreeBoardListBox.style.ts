import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  text-align: center;
  min-height: 410px;
  background: #ffffff;
  box-shadow: 0.2px 2px 2px 0px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin: 0px auto;
`;
export const Wrapper = styled.div`
  height: 90%;
  margin-top: 2%;
  margin-bottom: 2%;
  background-color: white;
  /* box-shadow: 0.2px 2px 2px 0px rgba(0, 0, 0, 0.08); */
  /* border: solid 1px lightgray; */
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 5px 25px 0px;
  /* padding: 10px; */
`;
export const Search = styled.input`
  font-size: 12px;
  border-radius: 6px;
  height: 30px;
  border: solid 1px lightgrey;
  width: 250px;
  padding-left: 20px;
`;
export const CreateBtn = styled.button`
  width: 110px;
  height: 33px;
  font-size: 13px;
  border-radius: 6px;
  align-items: center;
  text-align: center;
  border: 0;
  background: #9155FD;
  color: white;
  /* box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08); */
  border-radius: 6px;
  cursor: pointer;
  transition: 0.5s; // 자연스럽게 호버 효과 주려고 넣음(필수)
  &:hover {
    background: #dfd1f8;
    color: #535155;
    transition: 0.5s;
  }
`;

export const FreeBoardListTitle = styled.div`
  display: flex;
  width: 1000px;
  height: 40px;
  background: #f4f6f8;
  font-size: 13px;
  font-weight: 600;
  border-radius: 8px 8px 0px 0px;
  padding-top: 5px;
`;

const commonStyles = `
  text-align: center;
  margin: 7px 0px 0px 0px;
`;

export const ListNumber = styled.div`
  width: 150px;
  ${commonStyles}
`;
export const ListTitle = styled.div`
  width: 600px;
  ${commonStyles}
`;
export const ListWriter = styled.div`
  width: 250px;
  ${commonStyles}
`;
export const ListTime = styled.div`
  width: 200px;
  ${commonStyles}
`;
export const ListHit = styled.div`
  width: 150px;
  ${commonStyles}
`;
export const FreeBoardBox = styled.div`
  border: 1px solid #F0F0F0;
  width: 1000px;
  min-height: 450px;
  border-radius: 8px;
  margin-bottom: 5px;
`;

const list = `
display: flex;
justify-content: center;
align-items: center;
  margin: 0px 0px 0px 0px;
  height: 35px;
  font-size: 13px
`;
export const ItemNumber = styled.div`
  width: 150px;
  ${list}
`;
export const ItemTitle = styled.div`
  width: 600px;
  ${list}
`;
export const ItemWriter = styled.div`
  width: 200px;
  ${list}
`;
export const ItemTime = styled.div`
  width: 200px;
  /* padding: 0px 0px 0px 200px; */
  ${list}
`;
export const ItemtHit = styled.div`
  width: 150px;
  ${list}
`;

export const DivBox = styled.div`
  display: flex;
  /* justify-content: space-between; */
`

export const Hr = styled.hr`
  border: solid 0.01px lightgrey;
  opacity: 30%;
  margin-bottom: 0px;
`;

export const Posting = styled.div`
  align-items: center;
  padding-top: 5px;
  cursor: pointer;
  &:hover {
    background-color: #F4F5FA;
  }
`