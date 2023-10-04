import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { deleteTactic, getTactic } from "../../api/MyPage/Mypage";
import swal from "sweetalert";

const Container = styled.div`
  justify-content: space-around;
  width: 100%;
`;

const TacticCard = styled.div`
  width: 220px; // 각 슬라이드의 넓이
  /* height: 280px; */
  margin-bottom: 30px;
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
  /* width: 1000px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* margin-left: 30px; */
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
const Medal = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TacticImg = styled.img`
  width: 80%;
  height: 120px;
  border-radius: 6px;
  margin-top: -5px;
  margin-bottom: 5px;
`;
const Name = styled.p`
  font-size: 15px;
  margin: 0px;
`;
const Return = styled.p`
  font-size: 13px;
  margin: 1px;
`;
const Date = styled.p`
  font-size: 13px;
  margin: 0px;
`;
const Btn2 = styled.button`
  border: 0px;
  width: 70px;
  height: 30px;
  border-radius: 6px;
  background: #ffffff;
  border: solid 1.8px;
  color: gray;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #faf8fe;
    transition: 0.5s;
    color: #9155fd;
  }
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
`;
const Btn0 = styled.button`
  width: 70px;
  height: 30px;
  font-size: 13px;
  border-radius: 6px;
  border: 0;
  background: #dfd1f8;
  color: #3d3c3e;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  cursor: pointer;
  transition: 0.5s; // 자연스럽게 호버 효과 주려고 넣음(필수)
  &:hover {
    background: #9155fd;
    color: white;
    transition: 0.5s;
  }
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
`;

const Box1 = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 4px;
`;
const Text1 = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin: 0px;
`;
function TacticList() {
  const { data, isLoading, isError } = useQuery("mytactic", getTactic);
  // const history = useHistory();

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5, // 슬라이드를 3개로 줄임
    slidesToScroll: 1,
    // centerPadding: '20px', // centerPadding을 제거
  };

  const formatDate = (dateString: string) => {
    const datePart = dateString.split("T")[0];
    return datePart;
  };

  const formatReturns = (returns: number) => {
    return Number(returns).toFixed(2);
  };
  
  // const handleEdit = (tacticId: number) => {
  //   history.push({
  //     pathname: "/maketactic",
  //     state: { tacticId },
  //   });
  // };

  const handleDelete = async(tacticId: number) => {
    console.log("Deleting tactic with ID:", tacticId);
    const response = await deleteTactic(tacticId);
    if(response?.status == 200){
      swal("전략이 삭제되었습니다‼")
    }
  };


  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading data</div>;
  }
  return (
    <Container>
      {data && data.length > 0 ? (
        <Wrapper>
          {data.map((item) => (
            <Space key={item.id}>
              <TacticCard>
                <Box>
                  <Medal src="/icon/medal2.png" />
                  <Title>{item.title}</Title>
                </Box>
                <TacticImg src="https://firebasestorage.googleapis.com/v0/b/pocket-sch.appspot.com/o/tmp_block.png?alt=media&token=01a14d47-374b-4c7f-93af-1b902bad2031&_gl=1*1w4ri8m*_ga*MjIwNzM4OS4xNjc2OTA3ODQ2*_ga_CW55HF8NVT*MTY5NjMxNjM2Ni41LjEuMTY5NjMxNjU1NS4zNi4wLjA." />
                <Box1>
                  <Text1>종목명</Text1>
                  <Name>{item.optionName}</Name>
                </Box1>
                <Box1>
                  <Text1>수익률</Text1>
                  <Return>{formatReturns(item.testReturns)}%</Return>
                </Box1>
                <Box1>
                  <Text1>작성일</Text1>
                  <Date>{formatDate(item.createdAt)}</Date>
                </Box1>
                <Box1>
                  <Btn0>수정</Btn0>
                  <Btn2 onClick={() => handleDelete(item.id)}>삭제</Btn2>
                </Box1>
              </TacticCard>
            </Space>
          ))}
        </Wrapper>
      ) : (
        <EmptyBox>
          <Noneimg src="/icon/none.png" />
          <Title>저장된 전략이 없습니다.</Title>
        </EmptyBox>
      )}
    </Container>
  );
}
export default TacticList;
