import styled from "styled-components";
// import "../Contest/ContestStore/ExpectedContest/Swiper.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useQuery } from "react-query";
import { getTactic } from "../../api/MyPage/Mypage";

const StyledSlider = styled(Slider)`
  width: 100%;
  padding: 0px 10px;
`
const Container = styled.div`
  /* justify-content: center; */
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const TacticCard = styled.div`
  width: 70%; // 각 슬라이드의 넓이
  height: 280px;
  /* flex-shrink: 0; */
  border-radius: 13px;
  background: #fff;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
const Medal = styled.img`
  width: 25px;
  height: 25px;
`
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const TacticImg = styled.img`
  width: 80%;
  height: 120px;
  border-radius: 6px;
`
const Name = styled.p`
  font-size: 15px;
  margin-bottom: 5px;
`
const Return = styled.p`
  font-size: 13px;
  margin-bottom: 5px;
`
const Date = styled.p`
  font-size: 13px;
`
function TacticList() {
  const {data, isLoading, isError} = useQuery("mytactic", getTactic);

  
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3, // 슬라이드를 3개로 줄임
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
          <Space >
          <TacticCard >
            <Box>
              <Medal src="/icon/medal2.png"/>
              <Title>{item.title}</Title>
            </Box>
            <TacticImg src="https://firebasestorage.googleapis.com/v0/b/pocket-sch.appspot.com/o/tmp_block.png?alt=media&token=01a14d47-374b-4c7f-93af-1b902bad2031&_gl=1*1w4ri8m*_ga*MjIwNzM4OS4xNjc2OTA3ODQ2*_ga_CW55HF8NVT*MTY5NjMxNjM2Ni41LjEuMTY5NjMxNjU1NS4zNi4wLjA."/>
            <Name>{item.optionName}</Name>
            <Return>{item.testReturns}</Return>
            <Date>{item.createdAt}</Date>
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
