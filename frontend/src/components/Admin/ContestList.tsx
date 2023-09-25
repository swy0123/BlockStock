import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import TablePagination from '@mui/material/TablePagination';
import {
  Container,
  Wrapper,
  Title,
  Schedule,
  ContestBox,
  ContentBox,
  Content,
  StartAsset,
  Stock,
  Term,
  BtnBox,
  UpdateBtn,
  DeleteBtn
} from './ContestList.style'
import ContestUpdate from "./ContestUpdate";
import { useRecoilValue } from "recoil";
import { completedContestListState } from "../../recoil/Contest/CompletedContest";
import {contestDelete} from '../../api/Admin/Admin'

function ContestList(){

  const contestResultList = useRecoilValue(completedContestListState);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);


  // 클릭한 대회 내용 ==========================================================
  const [showContent, setShowContent] = useState(
    Array(contestResultList.length).fill(false)
  );

  const toggleContent = (index) => {
    const updatedShowContent = [...showContent];
    updatedShowContent[index] = !updatedShowContent[index];
    setShowContent(updatedShowContent);

    if (updatedShowContent[index]) {
      setSelectedContest(contestResultList[index]);
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

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
    ) => {
      setPage(newPage);
  };

    
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const itemsToDisplay = contestResultList.slice(startIndex, endIndex);
  // const filteredItems = itemsToDisplay.filter((item) =>
  // item.title.includes(searchKeyword)
  // );
  // 페이지 네이션=====================================================================


  
  return(
    <>
    <Container>
      <Wrapper>
        {itemsToDisplay.map((contest, index)=>(
          <div key={index} style={{ margin: "0px 0px 30px 0px" }}>
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
                      fontSize: "40px",
                      marginLeft: "auto",
                      marginRight: "30px",
                    }}
                  />
                ) : (
                  <ExpandMoreIcon
                    style={{
                      fontSize: "40px",
                      marginLeft: "auto",
                      marginRight: "30px",
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
              <BtnBox>
                <UpdateBtn onClick={()=>OpenModal()}>수정하기</UpdateBtn>
                <DeleteBtn onClick={()=>contestDelete(contest.id)}>삭제하기</DeleteBtn>
              </BtnBox>
            </ContentBox>

            <hr style={{margin:'30px 0px 0px 0px'}}/>
          </div>
        ))}

      </Wrapper>
        {isModalOpen ? <ContestUpdate selectedContest={selectedContest} onClose={CloseModal}/> : null}

      <TablePagination
        component="div"
        count={contestResultList.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={()=>{}}
        rowsPerPageOptions={[]}
        style={{margin:'0px 50px 0px 0px'}}
        />

    </Container>
    </>
  )
}

export default ContestList

