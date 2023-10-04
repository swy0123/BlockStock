import { useQuery } from "react-query";
import styled from "styled-components";
import { getRecodeList } from "../../api/MyPage/Mypage";

const Container = styled.div`
  display:flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const HistoryCard = styled.div`
  width: 240px;
  height: 290px;
  background-color: white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
  margin-bottom: 25px;
`;
const TitleBox = styled.div`
  width: 100%;
  border-radius: 6px 6px 0px 0px;
  background-color: #ebebeb;
`
const Title = styled.p`
  font-size: 17px;
`;
const Money = styled.p`
  font-size: 17px;
  margin: 33px 0px 15px 0px;
`;
const ResultBox = styled.div`
  border: solid 1px #d9d9d9;
  width: 50%;
  border-radius: 2px;
`
const Box = styled.div`
  width: 80%;
  display: flex;
  margin-top: 20px;
`
const Text = styled.p`
  font-size: 13px;
  margin-bottom: 7px;
  margin-top: 7px;
`;
const Rank = styled.p`
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 7px;
`
const Name = styled.p`
  font-size: 13px;
  margin-bottom: 0px;
`;
const EmptyBox = styled.div`
  width: 900px;
  height: 250px;
  background-color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  display:flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #535254;
`
const Noneimg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
const HistoryBtn = styled.button`
  width: 49%;
  height: 35px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 6px;
  border: 0px;
  background-color: #f4f4f4;
  &:hover{
    background: #9862fd;
    transition: 0.5s;
    color: white;
  }
`
const TacticBtn = styled.button`
  width: 49%;
  height: 35px;
  margin-left: 5px;
  cursor: pointer;
  border-radius: 6px;
  border: 0px;
  background-color: #f4f4f4;
  &:hover{
    background: #9862fd;
    transition: 0.5s;
    color: white;
  }
`
function RecodeList() {
  const { data, isLoading, isError } = useQuery("history", getRecodeList);
  // console.log('기록관리 데이터',data)
  if (isLoading) {
    return <div>Loading...</div>; // 데이터가 로드 중일 때 표시할 내용
  }

  if (isError) {
    return <div>Error loading data.</div>; // 데이터 로드 중 오류가 발생한 경우 처리
  }

  // 데이터가 로드되고 유효할 때만 map 함수를 실행합니다.
  return (
    <Container>
    {data && data.length > 0 ? (
      data.map((item, index: number) => (
        <HistoryCard key={index}>
          <TitleBox>
            <Title>{item.title}</Title>
          </TitleBox>
          <Money style={{ color: item.result_money >= 0 ? "red" : "blue" }}>
  {item.result_money >= 0 ? `▲ ${item.result_money.toLocaleString('ko-KR')} 원` : `▼ ${Math.abs(item.result_money).toLocaleString('ko-KR')} 원`}
</Money>
          <Box>
            <ResultBox>
              <Name>등수</Name>
              <Rank>{item.rank}</Rank>
            </ResultBox>
            <ResultBox>
              <Name>수익률</Name>
              <Text style={{ color: item.revenue >= 0 ? "red" : "blue" }}>{item.revenue.toFixed(2)}</Text>
            </ResultBox>
          </Box>
          <Box>
            <HistoryBtn>기록보기</HistoryBtn>
            <TacticBtn>전략보기</TacticBtn>
          </Box>
        </HistoryCard>
        ))
      ) : (
        <EmptyBox>
          <Noneimg src="/icon/none.png"/>
          <Title>대회 참여 이력이 없습니다.</Title>
        </EmptyBox>
      )}
    </Container>
  );
}

export default RecodeList;
