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
  Notexist,
  Box,
  NotRegisted,
  Registed,
  Icon
} from './ExpectedContestContent.style'

import Pagination from "@mui/material/Pagination";

 // 날짜 변환
 import dayjs from "dayjs";
// 리코일로 userid
import { CurrentUserAtom } from '../../../../recoil/Auth'
// contestid
import { useRecoilState } from 'recoil';
import { ContestId } from '../../../../recoil/Contest/ExpectedContest'
import {currentContestListState} from '../../../../recoil/Contest/CurrentContest'
// 예정대회 api
import {expectedContestList} from '../../../../api/Contest/ContestStore'

function ExpectedContestContent(){

  // 리코일로 유저 아이디
  const currentUser = useRecoilValue(CurrentUserAtom);
  const { userid } = currentUser;

  const [expectedContestItem, setExpectedContestItem] = useState([])
  const [ page, setPage ] = React.useState(1);
  const [ rowsPerPage, setRowsPerPage ] = React.useState(7);
  const [ count, setCount] = useState(0)

  // 리코일 대회 id 전략 id
  const [contestId, setContestId] = useRecoilState(ContestId);

  // 리코일로 검색어를 불러온다 ======================================================
  const searchKeyword  = useRecoilValue(searchKeywordState);

  useEffect(()=>{
    setPage(1)
  },[searchKeyword])


  // 대회참가 모달 ==================================================================
  const [selectedContest, setSelectedContest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  // 대회참가 모달 ==================================================================

  // api 통신 =============================================================
  
  useEffect(()=>{
    expectedcontest()
  },[page,rowsPerPage,searchKeyword])

  const expectedcontest = async () => {
    const params = {
      status: 'expected',
      page: page-1,
      size: rowsPerPage,
      key_word: searchKeyword
    };
    const contest = await expectedContestList(params)
    console.log(contest)
    setExpectedContestItem(contest.contestList)
    if(Math.floor(contest.totalCnt % 7)){
      setCount(Math.floor(contest.totalCnt / 7)+1);
    }else{
      setCount(Math.floor(contest.totalCnt / 7));
    }
  }
  // api 통신 =============================================================



  // 해당 대회만 내용을 보여준다 ==========================================================
  // filteredContestList 값은 api 통신 후 교체
  const [showContent, setShowContent] = useState(Array(expectedContestItem.length).fill(false));
  const toggleContent = (index) => {
    const updatedShowContent = [...showContent];
    updatedShowContent[index] = !updatedShowContent[index];
    setShowContent(updatedShowContent);
    
    if (updatedShowContent[index]) {
      console.log(expectedContestItem[index],'expectedContestItem[index]')
      setSelectedContest(expectedContestItem[index]);
      const newContestId = { ...contestId, contestId: expectedContestItem[index].id };
      // Recoil 상태 업데이트
      setContestId(newContestId);
    } else {
      setSelectedContest(null);
    }
  };
  // 해당 대회만 내용을 보여준다 ==========================================================



  // 페이지 네이션=====================================================================
  const handlePageChange = (event, newPage) => {
    setPage(newPage); // 페이지 변경 시 상태 변수 업데이트
  };
  const paginationStyle = {
    '& .MuiPagination-ul .MuiPaginationItem-root.Mui-selected': {
      backgroundColor: '#F4F5FA', // 선택된 페이지 배경색을 연보라색으로 변경
    },
    '& .MuiPagination-ul .MuiPaginationItem-root.Mui-selected:hover': {
      backgroundColor: '#F4F5FA', // 선택된 페이지 호버 시 배경색도 연보라색으로 변경
    },
    '& .MuiPagination-ul .MuiPaginationItem-root.MuiPaginationItem-page:hover': {
      backgroundColor: '#F4F5FA', // 페이지 호버 시 배경색도 연보라색으로 변경
    },
  };
  const combinedStyles = {
    ...paginationStyle, // paginationStyle 객체
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  // 페이지 네이션=====================================================================



  // 모달 열고 닫는 이벤트 ====================================================
  const OpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  const CloseModal = () => {
    setIsModalOpen(false);
    expectedcontest()
  };
  
  const OpenCandelModal = () => {
    setIsCancelModalOpen(!isCancelModalOpen);
  };
  
  const CloseCandelModal = () => {
    setIsCancelModalOpen(false);
    expectedcontest()
  };
  // 모달 열고 닫는 이벤트 ====================================================


  return(
    <Container>

      <Wrapper style={{
          display: expectedContestItem.length === 0 ? 'flex' : undefined,
          alignItems: expectedContestItem.length === 0 ? 'center' : undefined,
          justifyContent: expectedContestItem.length === 0 ? 'center' : undefined,
      }}>
        {expectedContestItem.length === 0 ? (
          <Notexist>아직 대회가 없습니다</Notexist>
        ) : (
          <>
          {expectedContestItem.map((contest, index) => (
            <div key={contest.id} style={{margin:'0px 0px 0px 0px'}}>
              <Box>         
                <ContestBox onClick={() => toggleContent(index)}>
                  <div style={{margin:'16px 37% 16px 50px', width:'600px'}}>
                    <div style={{display:'flex'}}>
                        <Title> [경진대회] {contest.title}</Title>
                        {contest.isRegisted ? (
                          <NotRegisted>참여</NotRegisted>
                        ) : (
                        <Registed>미참여</Registed>
                        )}
                      </div>
                    <Schedule>
                      {dayjs(contest.startTime).format('YYYY/MM/DD HH:mm')} 부터 ~ {dayjs(contest.endTime).format('YYYY/MM/DD HH:mm')} 까지
                    </Schedule>
                  </div>
                  <Icon>
                    {showContent[index] ? (
                      <KeyboardControlKeyIcon style={{ fontSize: '50px', margin: '10px 80% 0px 0px' }} />
                    ) : (
                      <ExpandMoreIcon style={{ fontSize: '50px', color:'#D4D4D4' }} />
                    )}
                  </Icon>
                </ContestBox>
              </Box>
              
              {/* <hr style={{ color: '#ebebeb', margin: '0px' , border:'1px solid #ebebeb'}} /> */}

              <ContentBox 
              style={{
                transition: 'max-height 1s ease, transform 1s ease', // 트랜지션 적용
                overflow: 'hidden', // 내용이 보이지 않도록 숨김
                maxHeight: showContent[index] ? '1200px' : '0', // 최대 높이 설정
              }}
              >
                  <Stock>인원 : {contest.joinPeople}/{contest.maxCapacity} 명</Stock>
                  <StartAsset>티켓 수 : {contest.ticket}개</StartAsset>
                  <StartAsset>종목 : {contest.optionName} ({contest.optionCode})</StartAsset>
                  <Term>전략 실행 주기 : {contest.term} 초</Term>
                {/* 줄바꿈 적용 넘어갈 경우 다음 줄로 */}
                <Content style={{ whiteSpace: 'pre-line',wordWrap: 'break-word' }}>
                  {contest.content}
                </Content>
                {contest.isRegisted ? (
                  <Button onClick={OpenCandelModal}>신청취소</Button>
                ) : (
                  <Button onClick={OpenModal}>참가하기</Button>
                  )} 
                {/* <Button onClick={OpenModal}>참가하기</Button> */}
              </ContentBox>
              <hr style={{margin:'0px 0px 0px 0px', border:'1px solid #ebebeb'}}/>

            </div>
          ))}

          </>
        )}

         {isModalOpen ? <ContestTaticModal selectedContest={selectedContest} type={'contest'} onClose={CloseModal} onClosetactic={CloseModal}/> : null}
         {isCancelModalOpen ? <ContestCancelModal selectedContest={selectedContest} onClose={CloseCandelModal} /> : null}
      </Wrapper>
      {expectedContestItem.length > 0 && (
          <>
          <Pagination 
          count={count} 
          showFirstButton showLastButton
          page={page}
          onChange={handlePageChange}
          sx={combinedStyles}
          />
          </>
      )}

    </Container>
  )
}

export default ExpectedContestContent