import React, { useEffect, useState } from "react";
import { format } from "d3-format";
import {
  Container,
  Header,
  HeaderTitle,
  Wrapper,
  RankBox,
  RankNumber,
  UserImg,
  UserNickName,
  UserReturnBox,
  UserReturn,
  UserReturnIcon,
} from "./ContestRankBox.style";
import { contestRanking, rankingBoxItem } from "../../../api/Contest/ContestProgress";
import dayjs from "dayjs";

const ContestRankBox = (props: {
  contestId: number;
  isRunning: boolean;
  handleCurPlayerId: (value: number) => void;
}) => {
  const [curRank, setCurRank] = useState<rankingBoxItem[]>([]);
  const [count, setCount] = useState(0); // 남은 시간 (단위: 초)
  const [updateTime, setUpdateTime] = useState(dayjs().format("YYYY.MM.DD HH:mm:ss"));
  const pricesDisplayFormat = format(",");

  useEffect(() => {
    if (props.isRunning) {
      const cnt = setInterval(() => {
        // 타이머 숫자가 하나씩 줄어들도록
        setCount((count) => count - 1);
      }, 1000);

      if (count <= 0) {
        setCount(14);
        getCurRank();
        setUpdateTime(dayjs().format("YYYY.MM.DD HH:mm:ss"));
      }
      return () => clearInterval(cnt);
    }
  }, [count]);

  // useEffect(()=>{

  // },)

  const getCurRank = async () => {
    const res = await contestRanking(props.contestId);
    setCurRank(res);
  };

  const setCurPlayerId = (id: any) => {
    console.log(id);
    props.handleCurPlayerId(id);
  };

  return (
    <>
      <Container>
        <Header>
          <HeaderTitle>실시간 랭킹</HeaderTitle>
        </Header>
        <Wrapper>
          {/* {rank.map((item, index) => ( */}
          {curRank.map((item, index) => (
            <RankBox key={index} onClick={() => setCurPlayerId(item.memberId)}>
              <RankNumber>{index + 1}위</RankNumber>
              <UserImg src={`https://j9b210.p.ssafy.io:8443/api/member/profile/${item.memberId}`} />
              <UserNickName>{item.nickName}</UserNickName>
              <UserReturnBox>
                <UserReturn $isPositive={item.returns > 0 ? true : false}>
                  {Math.round(item.returns * 100) / 100}%
                </UserReturn>
              </UserReturnBox>
            </RankBox>
          ))}
        </Wrapper>
        <span style={{ fontSize: "10px" }}>마지막 업데이트 시간 : {updateTime}</span>
      </Container>
    </>
  );
};
export default ContestRankBox;
