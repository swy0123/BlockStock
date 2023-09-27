import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import { useRecoilValue } from "recoil";
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
  Notexist
} from "./CompletedContestContent.style";

import TablePagination from '@mui/material/TablePagination';


// api 통신
import { completedContestList, contestResult  } from '../../../../api/Contest/ContestStore'


function CompletedContestContent() {

  // 검색어
  const searchKeyword = useRecoilValue(searchKeywordState);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const [completedContestItem, setCompletedContestItem] = useState([])
  const [ count, setCount] = useState(0)
  const [ userRank, setUserRank] = useState([])
  

  // api 통신 =============================================================
  const params = {
    status: 'finish',
    page: page,
    size: rowsPerPage,
    keyWord: searchKeyword
  };
  useEffect(()=>{
    completedcontest()    
  },[page,rowsPerPage,searchKeyword])

  const completedcontest = async () => {
      const contest = await completedContestList(params)
      console.log(contest)
      setCompletedContestItem(contest.contestList)
      setCount(contest.count)
    }
  // api 통신 =============================================================

  useEffect(()=>{
    console.log(userRank, 'userRank')
  },[userRank])


  // 클릭한 대회 내용 ==========================================================
  const [showContent, setShowContent] = useState(
    Array(completedContestItem.length).fill(false)
  );

  const toggleContent = (index) => {
    const updatedShowContent = [...showContent];
    updatedShowContent[index] = !updatedShowContent[index];
    setShowContent(updatedShowContent);

    if (updatedShowContent[index]) {
      setSelectedContest(completedContestItem[index]);
    } else {
      setSelectedContest(null);
    }
  };
  // 클릭한 대회 내용 ==========================================================




  // 선택한 대회 상세보기(모달) ======================================================
  const [selectedContest, setSelectedContest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const OpenModal = (id) => {
    console.log(id)
    result(id)
    setIsModalOpen(!isModalOpen);
  };

  const CloseModal = () => {
    setIsModalOpen(false);
  };
  // 선택한 대회 상세보기(모달) ======================================================



  // 상세 조회api ================================================================
  const result = (id)=>{
    resultApi(id)
  };

  const resultApi = async (id)=>{
    const res =  await contestResult(id)
    console.log(res, 'res')
    if (res === undefined){
      setUserRank([])
    }else{
      setUserRank(res)
    }
  }
  // api ================================================================
  



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
  // 페이지 네이션=====================================================================



  return (
    <>
      <Container>
        <Wrapper style={{
          display: completedContestItem.length === 0 ? 'flex' : undefined,
          alignItems: completedContestItem.length === 0 ? 'center' : undefined,
          justifyContent: completedContestItem.length === 0 ? 'center' : undefined,
        }}>
          {completedContestItem.length === 0 ? (
            <Notexist>아직 대회가 없습니다.</Notexist>
          ) : (
            <>
              {completedContestItem.map((contest, index) => (
                <div key={contest.id} style={{ margin: "0px 0px 30px 0px" }}>
                  {/* <Line hide={index === 0} /> */}
                  <ContestBox onClick={() => toggleContent(index)}>
                    <div>
                      <Title> [경진대회] {contest.title}</Title>
                      <Schedule>
                        대회 기간: {contest.startTime} ~ {contest.endTime}
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
                    <Button onClick={()=>OpenModal(contest.id)}>결과보기</Button>
                  </ContentBox>
                <hr style={{margin:'30px 0px 0px 0px'}}/>
                </div>
              ))}
            </>
          )}

          {isModalOpen ? <CompletedContestModal selectedContest={selectedContest} onClose={CloseModal} rank={userRank}/> : null}
        </Wrapper>
        {completedContestItem.length > 0 && (
          <>
            <TablePagination
              component="div"
              count={count}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={() => {}} 
              rowsPerPageOptions={[]} 
              style={{ margin: '0px 50px 0px 0px' }}
            />
          </>
        )}
      </Container>


    </>
  );
}

export default CompletedContestContent;
