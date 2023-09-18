import styled from "styled-components";

const Container = styled.div`
`;

export const FreeBoardBox = styled.div` 
    min-height: 200px;
    border: 0;
    border-radius: 13px;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
    width: 75%;
    height: 270px;
    flex-shrink: 0;
    margin-bottom: 50px;
`;

const Box = styled.div`
  display: flex;
  border-radius: 10px 10px 0px 0px;
  background: #ebecec;
  margin-bottom: 10px;
`
const Box1 = styled.div`
  display: flex;
`

const list = `
display: flex;
justify-content: center;
align-items: center;
  margin: 0px 0px 0px 0px;
  height: 50px;
  font-size: 15px
`;
export const ItemNumber = styled.div`
width: 150px;
${list}
`;
export const ItemTitle = styled.div`
width: 300px;
${list}
`;
export const ItemWriter = styled.div`
width: 150px;
${list}
`;
export const ItemTime = styled.div`
width: 200px;
${list}
`;
export const ItemtHit = styled.div`
width: 100px;
${list}
`;

function MyBoard() {
    const data = {
        freeboardList: [

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
                title: "프리보드 글 제목 2",
                nickname: "User 2",
                hit: 85,
                modifiedAt: "2023.09.14 09:45:00"
              }
            },
            {
                freeboard: {
                  id: 2,
                  title: "프리보드 글 제목 3",
                  nickname: "User 3",
                  hit: 85,
                  modifiedAt: "2023.09.14 09:45:00"
                }
              },
              {
                freeboard: {
                  id: 3,
                  title: "프리보드 글 제목 4",
                  nickname: "User 4",
                  hit: 25,
                  modifiedAt: "2023.09.14 09:45:00"
                }
              },
        ]}
    return(
        <Container>
          <FreeBoardBox>
            <Box>
              <ItemNumber>번호</ItemNumber>
              <ItemTitle>제목</ItemTitle>
              <ItemWriter>작성자</ItemWriter>
              <ItemTime>작성일자</ItemTime>
              <ItemtHit>조회수</ItemtHit>
            </Box>
          {data.freeboardList.map((item, index) => (
            <Box1 key={`boardItem_${index}`}>
              <ItemNumber>{item.freeboard.id}</ItemNumber>
              <ItemTitle>{item.freeboard.title}</ItemTitle>
              <ItemWriter>{item.freeboard.nickname}</ItemWriter>
              <ItemTime>{item.freeboard.modifiedAt}</ItemTime>
              <ItemtHit>{item.freeboard.hit}</ItemtHit>
            </Box1>
            ))}
        </FreeBoardBox>
      </Container>
    );
}

export default MyBoard;