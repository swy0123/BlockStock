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
  Notexist
} from './ExpectedContestContent.style'

import TablePagination from '@mui/material/TablePagination';
import {expectedContestList} from '../../../../api/Contest/ContestStore'

// 리코일로 userid
import { CurrentUserAtom } from '../../../../recoil/Auth'
// contestid
import { useRecoilState } from 'recoil';
import { ContestId } from '../../../../recoil/Contest/ExpectedContest'
// 전략 불러오기 api
import { tacticList } from '../../../../api/Contest/ContestStore'

function ExpectedContestContent(){

  // 리코일로 유저 아이디
  const currentUser = useRecoilValue(CurrentUserAtom);
  const { userid } = currentUser;

  const [expectedContestItem, setExpectedContestItem] = useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const [ count, setCount] = useState(0)
  const [ tacticListItem, setTacticListItem ] = useState([])

  // 종목 ========================================
  const [optionCode, setOptionCode] = useState('')

  // 리코일 대회 id 전략 id
  const [contestId, setContestId] = useRecoilState(ContestId);

  // 리코일로 검색어를 불러온다 ======================================================
  const searchKeyword  = useRecoilValue(searchKeywordState);



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
      page: page,
      size: rowsPerPage,
      key_word: searchKeyword
    };
    const contest = await expectedContestList(params)
    console.log(contest)
    setExpectedContestItem(contest.contestList)
    setCount(contest.count)
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
      setOptionCode(expectedContestItem[index].optionCode)
      const newContestId = { ...contestId, contestId: expectedContestItem[index].id };
      // Recoil 상태 업데이트
      setContestId(newContestId);
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
  const itemsToDisplay = expectedContestItem.slice(startIndex, endIndex);
  const filteredItems = itemsToDisplay.filter((item) =>
  item.title.includes(searchKeyword)
  );
  // 페이지 네이션=====================================================================



  // 모달 열고 닫는 이벤트 ====================================================
  const OpenModal = () => {
    setIsModalOpen(!isModalOpen);
    tacticApi()
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
  

    // api 전략불러오기 ============================================================
    const data = {
      member_id:userid,
      option_code:optionCode
    }
  
    const tacticApi = async()=>{
      const res = await tacticList(data)
      console.log(res, '전략 불러옴')
      setTacticListItem(res)
    }
    // api 전략불러오기 ============================================================


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
            <div key={contest.id} style={{margin:'0px 0px 30px 0px'}}>
              {/* <Line hide={index === 0} /> */}
              <ContestBox onClick={() => toggleContent(index)}>
                <div>
                  <Title> [경진대회] {contest.title}</Title>
                  <Schedule>대회 기간: {contest.startTime} ~ {contest.endTime}</Schedule>
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
                <Content>{contest.content}</Content>
                {!contest.isRegisted ? (
                  <Button onClick={OpenCandelModal}>신청취소</Button>
                ) : (
                  <Button onClick={OpenModal}>참가하기</Button>
                )} 
              </ContentBox>
              <hr style={{margin:'30px 0px 0px 0px'}}/>

            </div>
          ))}

          </>
        )}

         {isModalOpen ? <ContestTaticModal selectedContest={tacticListItem} type={'contest'} onClose={CloseModal} /> : null}
         {isCancelModalOpen ? <ContestCancelModal selectedContest={selectedContest} onClose={CloseCandelModal}/> : null}
      </Wrapper>
      {expectedContestItem.length > 0 && (
          <>
          <TablePagination
            component="div"
            count={count}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={() => {}}
            rowsPerPageOptions={[]}
            style={{margin:'0px 50px 0px 0px'}}
          />
          </>
      )}

    </Container>
  )
}

export default ExpectedContestContent