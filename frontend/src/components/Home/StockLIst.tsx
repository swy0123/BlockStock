import { styled } from "styled-components";
import { getStock } from "../../api/home";
import { useQuery } from "react-query";

export const Container = styled.div`
    width: 100%;
`
export const StockBox = styled.div`
  display: flex;
  width: 100%;

`;
export const Card = styled.div`
  width: 85px;
  height: 130px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  margin-right: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  `;
export const Name = styled.p`
  font-size: 12px;
`;
export const Text = styled.p`
  font-size: 12px;
  margin: 0;
`;
export const Price = styled.p`
  font-size: 13px;
  margin: 0;
`;
export const Circle = styled.img`
  border-radius: 50%;
  width: 30px;
`

function StockList(){
    const { data, isLoading, isError } = useQuery("getstock", getStock);
    console.log("data", data);
    if (isLoading) {
        return <div>Loading...</div>; // 데이터가 로드 중일 때 표시할 내용
    }

    if (isError) {
        return <div>Error loading data.</div>; // 데이터 로드 중 오류가 발생한 경우 처리
    }

    return(
        <Container>
            <StockBox>
            {data.map((item, index: number) => (
                <Card key={index}>
                <Circle src="/icon/high.png" alt="img"/>
                <Name>{item.optionName}</Name>
                <Price>{item.currentPrice}</Price>
                <Text>{item.comparePrevious}</Text>
            </Card>
            ))}
            </StockBox>
        </Container>
    )   
}

export default StockList;