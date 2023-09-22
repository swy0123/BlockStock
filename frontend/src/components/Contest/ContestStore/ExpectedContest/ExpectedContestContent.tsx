import React, {useState, useEffect} from "react";
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

import TablePagination from '@mui/material/TablePagination';
import {expectedContestContent} from '../../../../api/Contest/ContestStore'


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


function ExpectedContestContent(){

  // const [expectedContestList, setExpectedContestList] = useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  // 대회참가 모달 ==================================================================
  const [selectedContest, setSelectedContest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  // 대회참가 모달 ==================================================================



  // 리코일로 검색어를 불러온다 ======================================================
  const searchKeyword  = useRecoilValue(searchKeywordState);



  // api 통신 이 후 삭제 ===============================================================
  // 리코일로 더미데이터 가져오기 
  const contestResultList = useRecoilValue(expectedContestListState);
  // 더미데이터를 검색어를 통해 다시 리스트를 만듬
  const filteredContestList = contestResultList.filter((contest) =>
  contest.title.includes(searchKeyword)
  );
  // api 통신 이 후 삭제 ===============================================================




  // api 통신 =============================================================
  
  useEffect(()=>{
    expectedcontest()
  },[page,rowsPerPage,searchKeyword])

  const expectedcontest = async () => {
    const params = {
      status: 'expected',
      page: page,
      size: rowsPerPage,
      keyWord: searchKeyword
    };
    const contest = await expectedContestContent(params)
    console.log(contest)
  }
  // api 통신 =============================================================



  // 해당 대회만 내용을 보여준다 ==========================================================
  // filteredContestList 값은 api 통신 후 교체
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
  // 해당 대회만 내용을 보여준다 ==========================================================



  // 페이지 네이션=====================================================================
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
    ) => {
      setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    
  const rowsPerPageOptions = [5, 6, 7, 8];
    
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const itemsToDisplay = filteredContestList.slice(startIndex, endIndex);
  const filteredItems = itemsToDisplay.filter((item) =>
  item.title.includes(searchKeyword)
  );
  // 페이지 네이션=====================================================================



  // 모달 열고 닫는 이벤트 ====================================================
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
  // 모달 열고 닫는 이벤트 ====================================================
  


  return(
    <Container>

      <Wrapper>
        {filteredItems.map((contest, index) => (
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

        <TablePagination
          component="div"
          count={filteredContestList.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
          style={{margin:'0px 50px 0px 0px'}}
        />

         {isModalOpen ? <ContestTaticModal selectedContest={selectedContest} type={'contest'} onClose={CloseModal} /> : null}
         {isCancelModalOpen ? <ContestCancelModal selectedContest={selectedContest} onClose={CloseCandelModal}/> : null}
      </Wrapper>

    </Container>
  )
}

export default ExpectedContestContent