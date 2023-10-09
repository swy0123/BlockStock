import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  min-height: 710px;
  background: #ffffff;
  box-shadow: 0.2px 2px 2px 0px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin: 0px auto;
`;
export const Wrapper = styled.div`
  height: 100%;
  width: 85%;
  margin-top: 2%;
  margin-bottom: 2%;
  background-color: white;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 5px 25px 0px;
`;
export const Search = styled.input`
  font-size: 12px;
  border-radius: 6px;
  height: 28px;
  border: solid 1px lightgrey;
  width: 250px;
  padding-left: 20px;
  outline: none;
`;
export const CreateBtn = styled.button`
min-width: 90px;
  height: 30px;
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
  width: 100%;
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
  width: 20%;
  ${commonStyles}
`;
export const ListTitle = styled.div`
  width: 33%;
  ${commonStyles}
`;
export const ListWriter = styled.div`
  width: 30%;
  ${commonStyles}
`;
export const ListTime = styled.div`
  width: 20%;
  ${commonStyles}
`;
export const ListHit = styled.div`
  width: 17%;
  ${commonStyles}
`;
export const FreeBoardBox = styled.div`
  border: 1px solid #F0F0F0;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  min-height: 450px;
  border-radius: 8px;
  margin-bottom: 35px;
`;

const list = `
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 0px 0px;
  height: 35px;
  font-size: 14px;
  // text-align: center;
`;
export const ItemNumber = styled.div`
  width: 21%;
  padding: 0px 20px 0px 0px;
  ${list}
`;
export const ItemTitle = styled.div`
  width: 30%;
  padding: 0px 40px 0px 20px;
  ${list}
`;
export const Box1 = styled.div`
  width: 150px;
  margin-top: 5px;
  padding: 0px 0px 0px 110px;
  display: flex;
  align-items: center;
  /* ${list} */
` 
export const Img = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 10px;
  /* align-items: center; */
`
export const ItemWriter = styled.div`
  font-size: 14px;
  /* width: 120px;
  padding: 0px 0px 0px 170px;
  ${list} */
`;
export const ItemTime = styled.div`
  width: 25%;
  text-align: start;
  padding: 0px 0px 0px 20px;
  ${list}
`;
export const ItemtHit = styled.div`
  width: 17%;
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
