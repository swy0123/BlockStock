import React, {useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import { useRecoilValue } from 'recoil';
import { expectedContestListState } from '../../../../recoil/Contest/ExpectedContest';
import {  searchKeywordState } from '../../../../recoil/Contest/CurrentContest';
import ContestTaticModal from './ContestTaticModal'
import ContestCancelModal from "./ContestCancelModal";
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
} from './ExpectedContestContent.style'
function ExpectedContestContent(){

  const [selectedContest, setSelectedContest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const contestResultList = useRecoilValue(expectedContestListState);

  const searchKeyword  = useRecoilValue(searchKeywordState);
  const filteredContestList = contestResultList.filter((contest) =>
    contest.title.includes(searchKeyword)
  );

  const Line = ({ hide }) => {
    console.log('hide prop:', hide); // hide prop을 로그에 출력
    return (
      <div
        style={{
          alignItems: 'center',
          margin: '0px 0px 0px 0px',
          border: '1px solid #D3D3D3',
          display: hide ? 'none' : 'block',
          marginBottom: '30px'
        }}
      >
      </div>
    );
  };


  const [showContent, setShowContent] = useState(Array(filteredContestList.length).fill(false));
  const toggleContent = (index) => {
    const updatedShowContent = [...showContent];
    updatedShowContent[index] = !updatedShowContent[index];
    setShowContent(updatedShowContent);

    
    if (updatedShowContent[index]) {
      setSelectedContest(filteredContestList[index]);
    } else {
      setSelectedContest(null);
    }
  };

  const OpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const CloseModal = () => {
    setIsModalOpen(false);
  };

  const OpenCandelModal = () => {
    setIsCancelModalOpen(!isCancelModalOpen);
  };

  const CloseCandelModal = () => {
    setIsCancelModalOpen(false);
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
                <Schedule>대회 기간: {contest.startAt} ~ {contest.endAt}</Schedule>
              </div>
              {showContent[index] ? (
                <KeyboardControlKeyIcon style={{ fontSize: '50px', marginLeft: 'auto', marginRight: '50px' }} />
              ) : (
                <ExpandMoreIcon style={{ fontSize: '50px', marginLeft: 'auto', marginRight: '50px' }} />
              )}
            </ContestBox>

            <ContentBox style={{ display: showContent[index] ? 'block' : 'none' }}>
              <Stock>현재 인원: {contest.joinPeople} / {contest.maxCapacity}</Stock>
              <StartAsset>필요 티켓: {contest.ticket} 개</StartAsset>
              <Term>전략 실행 주기 : {contest.term}</Term>
              <div>내용</div>
              <Content>{contest.content}</Content>
              {contest.isRegisted ? (
                <Button onClick={OpenCandelModal}>신청취소</Button>
              ) : (
                <Button onClick={OpenModal}>참가하기</Button>
              )} 
            </ContentBox>
          </div>
        ))}
         {isModalOpen ? <ContestTaticModal selectedContest={selectedContest} onClose={CloseModal}/> : null}
         {isCancelModalOpen ? <ContestCancelModal selectedContest={selectedContest} onClose={CloseCandelModal}/> : null}
      </Wrapper>

    </Container>
  )
}

export default ExpectedContestContent