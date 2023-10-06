import { useQuery } from "react-query";
import { getlikefreeBoard } from "../../api/MyPage/Mypage";
import { useNavigate } from "react-router-dom";
import LikeTacticBoard from "../TacticBoard/LikeTacticBoard";
import {
     Container,
     Line,
     Title, 
     Hr, 
     FreeBoardBox,
     Box,
     ItemNumber,
     ItemTime,
     ItemTitle,
     ItemWriter,
     ItemtHit,
     Div,
     Box1,
     } from "./BoardList.style";
function LikeList() {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery(
    "getlikefreeBoard",
    getlikefreeBoard
  );
  console.log("좋아요 게시글", data);

  const formatDate = (dateString: string) => {
    const datePart = dateString.split("T")[0];
    return datePart;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }
  return (
    <Container>
      <Line />
      <Title>자유게시판</Title>
      <Hr />
      <FreeBoardBox>
        <Box>
          <ItemNumber>번호</ItemNumber>
          <ItemTitle>제목</ItemTitle>
          <ItemWriter>작성자</ItemWriter>
          <ItemTime>작성일자</ItemTime>
          <ItemtHit>조회수</ItemtHit>
        </Box>
        {data.freeePostListResponseList.map((item, index) => (
          <Div onClick={() => {
            navigate(`/freeboarddetail`, {
              state: { postId: item.freePostId },
            });
          }}>
            <Box1 key={`boardItem_${index}`}>
              <ItemNumber>{index}</ItemNumber>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemWriter>{item.nickname}</ItemWriter>
              <ItemTime>{formatDate(item.updatedAt)}</ItemTime>
              <ItemtHit>{item.hit}</ItemtHit>
            </Box1>
            <Hr />
          </Div>
        ))}
      </FreeBoardBox>
      <LikeTacticBoard/>
    </Container>
  );
}

export default LikeList;
