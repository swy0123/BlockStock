import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import { useRecoilValue } from "recoil";
import { completedContestListState } from "../../../../recoil/Contest/CompletedContest";
import { searchKeywordState } from "../../../../recoil/Contest/CurrentContest";
import CompletedContestModal from "./CompletedContestModal";
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
} from "./CompletedContestContent.style";

import TablePagination from '@mui/material/TablePagination';


// api 통신
// import {completedContestContent} from '../../../../api/Contest/ContestStore'


const Line = ({ hide }) => {
  console.log('hide prop:', hide); // hide prop을 로그에 출력
  return (
    <div
      style={{
        alignItems: 'center',
        margin: '10px 0px 0px 0px',
        border: '1px solid #D3D3D3',
        display: hide ? 'none' : 'block',
        marginBottom: '30px'
      }}
    >
    </div>
  );
};


function CompletedContestContent() {

  // 검색어
  const searchKeyword = useRecoilValue(searchKeywordState);


  // 더미데이터 api 통신 후 삭제 ================================================
  const contestResultList = useRecoilValue(completedContestListState);
  const filteredContestList = contestResultList.filter((contest) =>
  contest.title.includes(searchKeyword)
  );
  // 더미데이터 api 통신 후 삭제 ================================================

  
  

  // api 통신 =============================================================
  // const params = {
  //   status: 'finish',
  //   page: page,
  //   size: rowsPerPage,
  //   keyWord: searchKeyword
  // };
  // useEffect(()=>{
  //   completedcontest()    
  // },[page,rowsPerPage,searchKeyword])

  // const completedcontest = async () => {
  //     const contest = await completedContestContent(params)
  //     console.log(contest)
  //   }
  // api 통신 =============================================================




  // 클릭한 대회 내용 ==========================================================
  const [showContent, setShowContent] = useState(
    Array(filteredContestList.length).fill(false)
  );

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
  // 클릭한 대회 내용 ==========================================================




  // 선택한 대회 상세보기(모달) ======================================================
  const [selectedContest, setSelectedContest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const OpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const CloseModal = () => {
    setIsModalOpen(false);
  };
  // 선택한 대회 상세보기(모달) ======================================================



   // 페이지 네이션=====================================================================
   const [page, setPage] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(3);

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



  return (
    <>
      <Container>
        <Wrapper>
          {filteredItems.map((contest, index) => (
            <div key={contest.id} style={{ margin: "0px 0px 30px 0px" }}>
              <Line hide={index === 0} />
              <ContestBox onClick={() => toggleContent(index)}>
                <div>
                  <Title> [경진대회] {contest.title}</Title>
                  <Schedule>
                    대회 기간: {contest.startAt} ~ {contest.endAt}
                  </Schedule>
                </div>
                {showContent[index] ? (
                  <KeyboardControlKeyIcon
                    style={{
                      fontSize: "50px",
                      marginLeft: "auto",
                      marginRight: "50px",
                    }}
                  />
                ) : (
                  <ExpandMoreIcon
                    style={{
                      fontSize: "50px",
                      marginLeft: "auto",
                      marginRight: "50px",
                    }}
                  />
                )}
              </ContestBox>

              <ContentBox
                style={{ display: showContent[index] ? "block" : "none" }}
              >
                <Stock>현재 인원: {contest.joinPeople} / {contest.maxCapacity}</Stock>
                <StartAsset>필요 티켓: {contest.ticket} 개</StartAsset>
                <Term>전략 실행 주기 : {contest.term}</Term>
                <div>내용</div>
                <Content>{contest.content}</Content>
                <Button onClick={OpenModal}>결과보기</Button>
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

          {isModalOpen ? <CompletedContestModal selectedContest={selectedContest} onClose={CloseModal}/> : null}
        </Wrapper>
      </Container>


    </>
  );
}

export default CompletedContestContent;
