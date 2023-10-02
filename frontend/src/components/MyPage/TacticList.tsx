import styled from "styled-components";
// import "../Contest/ContestStore/ExpectedContest/Swiper.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useQuery } from "react-query";
import { getTactic } from "../../api/MyPage/Mypage";

const StyledSlider = styled(Slider)`
  width: 1100px;
`
const Container = styled.div`
  /* justify-content: center; */
  width: 900px;
`;

const TacticCard = styled.div`
  width: 200px; // 각 슬라이드의 넓이
  height: 280px;
  /* flex-shrink: 0; */
  border-radius: 13px;
  background: #fff;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
`;

const Space = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  width: 900px;
  margin-left: 30px;
`;

const Title = styled.p`
  font-size: 17px;
`;
const EmptyBox = styled.div`
  width: 75%;
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
function TacticList() {
  const {data, isLoading, isError} = useQuery("mytactic", getTactic);

  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // 슬라이드를 3개로 줄임
    slidesToScroll: 1,
    // centerPadding: '20px', // centerPadding을 제거
  };
  if(isLoading){
    return <div>Loading...</div>
  }
  if(isError){
    return <div>Error loading data</div>
  }
  return (
    <Container>
      {data && data.length > 0 ? (
      <Wrapper>
      <StyledSlider {...settings}>
        {data.map((item) => (
          <Space>
          <TacticCard>
            <Title>{item.title}</Title>
            <Title>{item.testReturns}</Title>
          </TacticCard>
          </Space>
          ))}
      </StyledSlider>
      </Wrapper>
      ) : (
        <EmptyBox>
          <Noneimg src="/icon/none.png"/>
          <Title>저장된 전략이 없습니다.</Title>
        </EmptyBox>
      )}
    </Container>
  );
}

export default TacticList;
