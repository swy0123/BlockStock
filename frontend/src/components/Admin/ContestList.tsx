import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
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
// 삭제 api
import {contestDelete} from '../../api/Admin/Admin'
// 대회 불러오기 api
import {expectedContest} from '../../api/Contest/Main'

import './style.css'

function ContestList({onClickPage, data, onButtonClick}){

  const contestResultList = useRecoilValue(completedContestListState);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const contest = data.contestList; // contestList를 data에서 가져옵니다.
  const count = data.count; 

  // const [ contestListItem, setContestListItem ] = useState([])
  // const [count, setcount ] = useState(data.count)


  // 클릭한 대회 내용 ==========================================================
  const [showContent, setShowContent] = useState(
    Array(contest.length).fill(false)
  );

  const toggleContent = (index) => {
    const updatedShowContent = [...showContent];
    updatedShowContent[index] = !updatedShowContent[index];
    setShowContent(updatedShowContent);
    
    if (updatedShowContent[index]) {
      console.log(contest[index])
      setSelectedContest(contest[index]);
    } else {
      setSelectedContest(null);
    }
  };
  // 클릭한 대회 내용 ==========================================================

  // 삭제 api
  const handleDelete =(id)=>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      // title: '삭제?',
      // text: "You won't be able to revert this!",
      text: '정말 삭제하시겠습니까?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: `<span>삭제</span>`,
      cancelButtonText: '<span>취소</span>',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        contestDeleteApi(id)
        swalWithBootstrapButtons.fire({
          title: '삭제되었습니다',
          icon:'success',
          timer: 1000, // 2초 후에 자동으로 사라집니다 (밀리초 단위)
          showConfirmButton: false, // 확인 버튼을 표시하지 않음
          showCancelButton: false, // 취소 버튼을 표시하지 않음
        })
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: '취소되었습니다',
          icon:'error',
          timer: 1000, // 2초 후에 자동으로 사라집니다 (밀리초 단위)
          showConfirmButton: false, // 확인 버튼을 표시하지 않음
          showCancelButton: false, // 취소 버튼을 표시하지 않음
        })
        }
      })
  }

  const contestDeleteApi = async(id)=>{
    const res = await contestDelete(id)
    console.log(res)
    if (res===200){
      onButtonClick('List')
      setShowContent(Array(contest.length).fill(false))
    }
  }
 // ===============================================================================

//  const params = {
//   status: 'expected',
//   page: page,
//   size: rowsPerPage,
//   keyWord: ''
// };


  // 대회 불러오기 api ============================================================
  // const conteatApi = async()=>{
  //   const res = await expectedContest(params)
  //   console.log(res)
  //   if(res === undefined){

  //   }
  // }
  // 대회 불러오기 api ============================================================



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
      onClickPage(newPage)
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
        {contest.map((contest, index)=>(
          <div key={index} style={{ margin: "0px 0px 30px 0px" }}>
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
              <Content>{contest.content}</Content>
              <BtnBox>
                <UpdateBtn onClick={()=>OpenModal()}>수정하기</UpdateBtn>
                <DeleteBtn onClick={()=>handleDelete(contest.id)}>삭제하기</DeleteBtn>
              </BtnBox>
            </ContentBox>

            <hr style={{margin:'30px 0px 0px 0px'}}/>
          </div>
        ))}

      </Wrapper>
        {isModalOpen ? <ContestUpdate selectedContest={selectedContest} onClose={CloseModal}/> : null}

      <TablePagination
        component="div"
        count={count}
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

