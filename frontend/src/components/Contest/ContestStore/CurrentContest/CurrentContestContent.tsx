import React, {useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import styled from "styled-components";
import { useRecoilValue } from 'recoil';
import { currentContestListState, searchKeywordState } from '../../../../recoil/Contest/CurrentContest';

import {
  Container,
  Wrapper,
  Title,
  ContestBox,
  ContentBox,
  Content,
  Schedule,
  StartAsset,
  Stock,
  Term,
  Button,
} from './CurrentContestContent.style'

const Line = ({ hide }) => {
  return (
    <div
      style={{
        alignItems: 'center',
        margin: '0px 0px 0px 0px',
        border: '1px solid #D3D3D3',
        display: hide ? 'none' : 'block',
        marginBottom: '20px'
      }}
    >
    </div>
  );
};

function CurrentContestContent(){

  const contestResultList = useRecoilValue(currentContestListState);

  const searchKeyword  = useRecoilValue(searchKeywordState);

  const filteredContestList = contestResultList.filter((contest) =>
    contest.title.includes(searchKeyword)
  );


  const [showContent, setShowContent] = useState(Array(filteredContestList.length).fill(false));
  const toggleContent = (index) => {
    const updatedShowContent = [...showContent];
    updatedShowContent[index] = !updatedShowContent[index];
    setShowContent(updatedShowContent);
  };

  

  return(
    <Container>

      <Wrapper>
        {filteredContestList.map((contest, index) => (
          <div key={contest.id} style={{margin:'0px 0px 30px 0px'}}>
            <Line hide={index === 0} />
            <ContestBox onClick={() => toggleContent(index)}>
              <div>
                <Title> [경진대회] {contest.title}</Title>
                <Schedule>대회 기간  {contest.startAt} ~ {contest.endAt}</Schedule>
              </div>
              {showContent[index] ? (
                <KeyboardControlKeyIcon style={{ fontSize: '50px', marginLeft: '450px', marginRight: '0px' }} />
              ) : (
                <ExpandMoreIcon style={{ fontSize: '50px', marginLeft: '450px', marginRight: '0px' }} />
              )}
            </ContestBox>

            <ContentBox style={{ display: showContent[index] ? 'block' : 'none' }}>
              <Stock>종목 {contest.code}</Stock>
              <StartAsset>시작 자산 {contest.startAsset}</StartAsset>
              <Term>전략 실행 주기  {contest.term}</Term>
              <div>내용</div>
              <Content>{contest.content}</Content>
              <Button>진행 현황</Button>  
            </ContentBox>
          </div>
        ))}
      </Wrapper>

    </Container>
  )
}

export default CurrentContestContent