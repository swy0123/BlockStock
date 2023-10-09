import { useQuery } from "react-query";
import styled from "styled-components";
import { getRecodeList } from "../../api/MyPage/Mypage";

const Container = styled.div`
  display: flex;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  /* flex-wrap: wrap;
  justify-content: space-between; */
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
  box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.08);
  margin-bottom: 25px;
  margin-right: 15px;
`;
const TitleBox = styled.div`
  width: 100%;
  border-radius: 6px 6px 0px 0px;
  background-color: #f4f6f8;
`;
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
`;
const Box = styled.div`
  width: 80%;
  display: flex;
  margin-top: 20px;
`;
const Text = styled.p`
  font-size: 13px;
  margin-bottom: 7px;
  margin-top: 7px;
`;
const Rank = styled.p`
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 7px;
`;
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #535254;
`;
const Noneimg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
const HistoryBtn = styled.button`
  width: 49%;
  height: 35px;
  font-size: 13px;
  border-radius: 6px;
  color: white;
  border: 0;
  border-radius: 6px;
  background: #9155fd;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    background: #ab80fb;
    color: white;
    transition: 0.5s;
  }
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
`;

const TacticBtn = styled.button`
  border: 0px;
  width: 49%;
  height: 35px;
  border-radius: 6px;
  background: #faf8fe;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
  border: 0;
  color: #9155fd;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #f4f0fd;
    transition: 0.5s;
    color: #9155fd;
  }
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
`;

function RecodeList() {
  const { data, isLoading, isError } = useQuery("history", getRecodeList);
  // console.log('기록관리 데이터',data)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  return (
    <Container>
      {data && data.length > 0 ? (
        data.map((item, index: number) => (
          <HistoryCard key={index}>
            <TitleBox>
              <Title>{item.title}</Title>
            </TitleBox>
            <Money style={{ color: item.result_money >= 0 ? "red" : "blue" }}>
              {item.result_money >= 0
                ? `▲ ${item.result_money.toLocaleString("ko-KR")} 원`
                : `▼ ${Math.abs(item.result_money).toLocaleString("ko-KR")} 원`}
            </Money>
            <Box>
              <ResultBox>
                <Name>등수</Name>
                <Rank>{item.rank}</Rank>
              </ResultBox>
              <ResultBox>
                <Name>수익률</Name>
                <Text style={{ color: item.revenue >= 0 ? "red" : "blue" }}>
                  {item.revenue.toFixed(2)}%
                </Text>
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
          <Noneimg src="/icon/none.png" />
          <Title>대회 참여 이력이 없습니다.</Title>
        </EmptyBox>
      )}
    </Container>
  );
}

export default RecodeList;
