import React, { useState} from "react";
import styled from "styled-components";
import { useRecoilState } from 'recoil';
import { type } from '../../recoil/Admin/AdminContest';

function ContestBtn({ onButtonClick }) {
  
  const [typeValue, setType] = useRecoilState(type);

  const handleButtonClick = (buttonType) => {
    setType(buttonType); 
    // setBtn(buttonType); 
    onButtonClick(buttonType);
  };

  return (
    <>
      <Container>
        <ContestListBtn
          onClick={() => handleButtonClick('List')}
          style={{ 
            background: typeValue === 'List' ? '#9155FD' : 'initial',
            color: typeValue === 'List' ? 'white' : 'initial'
           }}
        >
          <div style={{ padding: '3px 0px 0px 0px' }}>
            Block Stock
          </div>
        </ContestListBtn>
        <ContestCreateBtn
          onClick={() => handleButtonClick('create')}
          style={{ 
            background: typeValue === 'create' ? '#9155FD' : 'initial',
            color: typeValue === 'create' ? 'white' : 'initial'
           }}
        >
          <div style={{ padding: '5px 0px 0px 0px' }}>
            대회 생성
          </div>
        </ContestCreateBtn>
      </Container>
    </>
  );
}

export default ContestBtn;

const Container = styled.div`
  width: 707px;
  height: 50px;
  display: flex;
  margin: 0px 0px 30px 0px;
`;
const ContestListBtn = styled.div`
  width: 148px;
  height: 40px;
  background: linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  &:hover {
    color: white;
    background: linear-gradient(0deg, #9155FD, #9155FD), #D9D9D9;
    transition: background-color 0.8s, color 0.8s ease;
  }
`;
const ContestCreateBtn = styled.div`
  width: 148px;
  height: 40px;
  background: linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0px 0px 0px 30px;
  border-radius: 6px;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  &:hover {
    color: white;
    background: linear-gradient(0deg, #9155FD, #9155FD), #D9D9D9;
    transition: background-color 0.8s, color 0.8s ease;
  }
`;
