import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  min-height: 410px;
  background: #FFFFFF;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin: 30px 0px 0px 0px;
`;
export const Wrapper = styled.div`
`;
export const Header = styled.div`
display: flex;
margin: 20px 30px 0px 500px;
padding: 30px;
`;
export const Search = styled.input`
margin: 0px 0px 0px 30px;
font-size: 12px;
`;
export const CreateBtn = styled.div`
width: 117px;
height: 33px;
margin: 0px 0px 0px 30px;
font-weight: 400;
font-size: 16px;
line-height: 22px;
background: #9155FD;
text-align: center;
border-radius: 5px;
color: #FFFFFF;
&:hover{
  background-color: #5A3EFF;
}
`;

export const FreeBoardListTitle = styled.div`
display: flex;
width: 1000px;
height: 40px;
background: #F4F6F8;
font-size: 13px;
font-weight: 600;
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
/* border: 1px solid black; */
width: 1000px;
min-height: 450px;
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
width: 250px;
${list}
`;
export const ItemTime = styled.div`
width: 200px;
${list}
`;
export const ItemtHit = styled.div`
width: 150px;
${list}
`;

