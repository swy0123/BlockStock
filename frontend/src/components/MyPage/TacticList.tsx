import styled from "styled-components";
// import "../Contest/ContestStore/ExpectedContest/Swiper.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
  font-size: 15px;
`;

function TacticList() {
  const data = [
    {
      tacticPostId: 1,
      title: "제목 1",
      imgPath: "",
      testReturns: -2.1,
      contestReturns: 2.2,
      likeCnt: 21,
      isLike: true,
      hit: 40,
    },
    {
      tacticPostId: 2,
      title: "제목 2",
      imgPath: "",
      testReturns: 3.5,
      contestReturns: -1.2,
      likeCnt: 21,
      isLike: true,
      hit: 40,
    },
    {
      tacticPostId: 3,
      title: "제목 3",
      imgPath: "",
      testReturns: +3.5,
      contestReturns: +1.2,
      likeCnt: 21,
      isLike: true,
      hit: 40,
    },
    {
      tacticPostId: 3,
      title: "제목 3",
      imgPath: "",
      testReturns: +3.5,
      contestReturns: +1.2,
      likeCnt: 21,
      isLike: true,
      hit: 40,
    },
    {
      tacticPostId: 3,
      title: "제목 3",
      imgPath: "",
      testReturns: +3.5,
      contestReturns: +1.2,
      likeCnt: 21,
      isLike: true,
      hit: 40,
    },
    {
      tacticPostId: 3,
      title: "제목 3",
      imgPath: "",
      testReturns: +3.5,
      contestReturns: +1.2,
      likeCnt: 21,
      isLike: true,
      hit: 40,
    },
    {
      tacticPostId: 3,
      title: "제목 3",
      imgPath: "",
      testReturns: +3.5,
      contestReturns: +1.2,
      likeCnt: 21,
      isLike: true,
      hit: 40,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // 슬라이드를 3개로 줄임
    slidesToScroll: 1,
    // centerPadding: '20px', // centerPadding을 제거
  };
  return (
    <Container>
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
    </Container>
  );
}

export default TacticList;
