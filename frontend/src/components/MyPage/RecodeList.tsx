import { useQuery } from "react-query";
import styled from "styled-components";
import { getRecodeList } from "../../api/MyPage/Mypage";

const Container = styled.div`
    
`;
function RecodeList() {
    const {data, isLoading, isError} = useQuery('history', getRecodeList);

    console.log('???', data)
    if (isLoading) {
        return <div>Loading...</div>; // 데이터가 로드 중일 때 표시할 내용
      }
      
      if (isError) {
        return <div>Error loading data.</div>; // 데이터 로드 중 오류가 발생한 경우 처리
      }
    return(
        <Container>
            기록관리
        

        </Container>
    );
}

export default RecodeList;