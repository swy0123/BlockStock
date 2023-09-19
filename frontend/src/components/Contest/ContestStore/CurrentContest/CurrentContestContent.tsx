import React, {useState, useEffect} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
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

import TablePagination from '@mui/material/TablePagination';

// api 통신
// import {currentContestlist} from '../../../../api/Contest/ContestStore'

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

  // 리코일에서 불러온 검색어
  const searchKeyword  = useRecoilValue(searchKeywordState);
  
  // api 통신 이후 삭제 =======================================================================
  // 리코일에서 불러온 더미 데이터
  const contestResultList = useRecoilValue(currentContestListState);
  // 검색어로 title 일치하는 것만 다시 리스트로 배열을 만들어 준다
  const filteredContestList = contestResultList.filter((contest) =>
  contest.title.includes(searchKeyword)
  );
  // api 통신 이후 삭제 =======================================================================



  // api 통신 =============================================================
  // const params = {
  //   status: 'proceed',
  //   page: page,
  //   size: rowsPerPage,
  //   keyWord: searchKeyword
  // };
  // useEffect(()=>{
  //   currentcontest()    
  // },[page,rowsPerPage,searchKeyword])

  // const currentcontest = async () => {
  //     const contest = await currentContestlist(params)
  //     console.log(contest)
  //   }
  // api 통신 =============================================================



  // 해당 페이지 내용 열기 ==============================================================
  const [showContent, setShowContent] = useState(Array(filteredContestList.length).fill(false));
  const toggleContent = (index) => {
    const updatedShowContent = [...showContent];
    updatedShowContent[index] = !updatedShowContent[index];
    setShowContent(updatedShowContent);
  };
  // 해당 페이지 내용 열기 ==============================================================



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
  


  return(
    <Container>

      <Wrapper>
        {filteredItems.map((contest, index) => (
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
      </Wrapper>

    </Container>
  )
}

export default CurrentContestContent