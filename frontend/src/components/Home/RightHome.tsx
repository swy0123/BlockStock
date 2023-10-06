import styled, { css } from 'styled-components';
import { motion, useAnimation } from "framer-motion";

const Container = styled.div`
  /* width: 100%; */
  align-items: center;
  margin-top: 90px;
  margin-left: -70px;
`;
const PersonImg = styled.img`
  position: absolute;
  width: 300px;
  height: 450px;
  left: 990px;
  top: 150px;
`;
const MenuBtn = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 0px 10px; */
  width: 190px;
  height: 54px;
  flex-shrink: 0;
  border: 0px;
  padding: 0px 10px;
  border-radius: 23px;
  background: #483F55;
  box-shadow: 6px 10px 8px 0px rgba(126, 83, 194, 0.29);
  ${props => props.transform && `
    transform: ${props.transform};
  `}
  ${props => props.top && props.left && `
    top: ${props.top};
    left: ${props.left};
  `};      
    animation-name: dung;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    transition-timing-function: linear;
    @keyframes dung {
    from {
        /* transform: translateY(5px); */
        transform: rotate('5.7deg');
    }
    25% {
        /* transform: translateY(-5px); */
        transform: rotateX('5.4deg');
    }
    50% {
        transform: translateY(5px);
        transform: rotate('5.0deg');
    }
    75% {
        /* transform: translateY(-5px); */
        transform: rotateX('5.7deg');
    }
    to {
        /* transform: translateY(5px); */
        transform: rotate('-5.5deg');
    }
}
`;

const Circle = styled.div`
  margin-top: 50px;
  width: 400px;
  height: 400px;
  flex-shrink: 0;
  border-radius: 423px;
  border: 2px solid rgba(126, 83, 194, 0.12);
  background: rgba(217, 217, 217, 0.00);

`
const Text = styled.p`
  color: white;
  font-size: 17px;
  margin: 0px 10px;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  margin: 0px 10px;
`
const CoinImg = styled.img`
  width: 130px;
  height: 130px;
  position: relative;
  top: 70px;
  left: 90px;
`;
const Coin = styled.img`
  width: 65px;
  height: 65px;
  position: relative;
  top: 25px;
  left: 100px;
`;
function RightHome(){
  return(
    <Container>
      <Circle>
        <PersonImg src="/icon/person.png"/>
        <MenuBtn transform="rotate(2.807deg)" top="25px" left="260px">
          <Img src="/icon/contest.png"/>
          <Text>Contest</Text>
        </MenuBtn>
        <MenuBtn transform="rotate(2.199deg)" top="40px" left="-110px">
          <Img src="/icon/block.png"/>
          <Text>Block Strategy</Text>
        </MenuBtn>
        <MenuBtn transform="rotate(-5.861deg)" top="80px" left="310px">
          <Text>Free Board</Text>
          <Img src="/icon/free.png"/>
        </MenuBtn>
        <MenuBtn transform="rotate(-5.949deg)" top="120px" left="-80px">
          <Text>Strategy Board</Text>
          <Img src="/icon/strategy.png"/>
        </MenuBtn>
        <MenuBtn transform="rotate(3.686deg)" top="100px" left="260px" >
          <Img src="/icon/info.png"/>
          <Text>Information</Text>
        </MenuBtn>
        <Coin src="/icon/coin2.png"></Coin>
        <CoinImg src="/icon/coins.png"/>
      </Circle>
    </Container>
  );
}

export default RightHome;