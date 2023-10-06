import { styled } from "styled-components";
import { getStock } from "../../api/home";
import { useQuery } from "react-query";

export const Container = styled.div`
  width: 100%;
  /* margin-top: 15px; */
`;
export const StockBox = styled.div`
  display: flex;
  width: 100%;
  /* margin-top: 5px; */
`;
export const Card = styled.div`
  width: 93px;
  height: 133px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  margin-right: 15px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
export const Name = styled.p`
  font-size: 13px;
  margin-bottom: 7px;
`;
export const Text = styled.p`
  font-size: 12px;
  margin: 2px;
`;
export const Price = styled.div`
  font-size: 11px;
  margin: 5px;
  background-color: #f3f4f4;
  padding: 3px 5px;
  border-radius: 6px;
`;
export const Circle = styled.img`
  /* border-radius: 50%; */
  border-radius: 6px;
  background-color: #ffffff;
  border: 2px solid #f5cdcf;
  width: 30px;
  margin-top: 3px;
`;
export const Circle1 = styled.img`
  /* border-radius: 50%; */
  border-radius: 6px;
  background-color: #ffffff;
  border: 2px solid #b1bff8;
  width: 30px;
  margin-top: 3px;
`;
function formatPrice(price: string) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}

function StockList() {
  const { data, isLoading, isError } = useQuery("getstock", getStock);
  console.log("data", data);
  if (isLoading) {
    return <div>Loading...</div>; // 데이터가 로드 중일 때 표시할 내용
  }

  if (isError) {
    return <div>Error loading data.</div>; // 데이터 로드 중 오류가 발생한 경우 처리
  }

  return (
    <Container>
      <StockBox>
        {data.map((item, index: number) => (
          <Card key={index}>
            {item.comparePrevious.startsWith("-") ? (
              <>
                <Circle1 src="/icon/low.png" alt="img" />
                <Name>{truncateString(item.optionName, 5)}</Name>
                <Text style={{ color: "#718CEA" }}>
                  {item.comparePrevious}%
                </Text>
                <Price>{formatPrice(item.currentPrice)}₩</Price>
              </>
            ) : (
              <>
                <Circle src="/icon/high.png" alt="img" />
                <Name>{item.optionName}</Name>
                <Text style={{ color: "#F25E5E" }}>
                  {item.comparePrevious}%
                </Text>
                <Price>{formatPrice(item.currentPrice)}₩</Price>
              </>
            )}
          </Card>
        ))}
      </StockBox>
    </Container>
  );
}

export default StockList;
