import { useQuery } from "react-query";
import styled from "styled-components";
import { getRecodeList } from "../../api/MyPage/Mypage";

const Container = styled.div``;
const HistoryCard = styled.div``;
const Title = styled.p``;

function RecodeList() {
  const { data, isLoading, isError } = useQuery("history", getRecodeList);

  if (isLoading) {
    return <div>Loading...</div>; // 데이터가 로드 중일 때 표시할 내용
  }

  if (isError) {
    return <div>Error loading data.</div>; // 데이터 로드 중 오류가 발생한 경우 처리
  }

  // 데이터가 로드되고 유효할 때만 map 함수를 실행합니다.
  return (
    <Container>
      {data.map((item: ArrayType[], index: number) => (
  <HistoryCard key={index}>
    <Title>{item.title}</Title>
  </HistoryCard>
))}
    </Container>
  );
}

export default RecodeList;
