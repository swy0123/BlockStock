import React, {useState, useEffect} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';

import { useRecoilValue } from 'recoil';
import { searchKeywordState } from '../../../../recoil/Contest/CurrentContest';

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
  Registed
} from './CurrentContestContent.style'

import { useNavigate } from "react-router-dom";

import TablePagination from '@mui/material/TablePagination';
 // 날짜 변환
 import dayjs from "dayjs";
// api 통신
import {currentContestList} from '../../../../api/Contest/ContestStore'


function CurrentContestContent(){

  const navigate = useNavigate();
  // 리코일에서 불러온 검색어
  const searchKeyword  = useRecoilValue(searchKeywordState);
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  const [ currentContestListItem, setCurrentContestListItem] = useState([])
  const [count, setCount] = useState(0)


  // api 통신 =============================================================
  const params = {
    status: 'proceed',
    page: page,
    size: rowsPerPage,
    keyWord: searchKeyword
  };
  useEffect(()=>{
    currentcontest()    
  },[page,rowsPerPage,searchKeyword])

  const currentcontest = async () => {
      const contest = await currentContestList(params)
      console.log('진행중 대회 페이지', contest)
      if (contest === undefined){
        setCurrentContestListItem([])
      } else {
        setCurrentContestListItem(contest.contestList)
        setCount(contest.count)
      }
    }
  // api 통신 =============================================================



  // 해당 페이지 내용 열기 ==============================================================
  const [selectedContest, setSelectedContest] = useState(null);
  const [showContent, setShowContent] = useState(Array(currentContestListItem.length).fill(false));
  const toggleContent = (index) => {
    const updatedShowContent = [...showContent];
    console.log(updatedShowContent)
    updatedShowContent[index] = !updatedShowContent[index];
    setShowContent(updatedShowContent);

    if (updatedShowContent[index]) {
      console.log(currentContestListItem[index],'-----------------')
      setSelectedContest(currentContestListItem[index]);
    } else {
      setSelectedContest(null);
    }
    console.log(selectedContest)
  };
  // 해당 페이지 내용 열기 ==============================================================



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
        
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const itemsToDisplay = currentContestListItem.slice(startIndex, endIndex);
  const filteredItems = itemsToDisplay.filter((item) =>
  item.title.includes(searchKeyword)
  );
  // 페이지 네이션=====================================================================
  

  return(
    <Container>

        <Wrapper style={{
          display: currentContestListItem.length === 0 ? 'flex' : undefined,
          alignItems: currentContestListItem.length === 0 ? 'center' : undefined,
          justifyContent: currentContestListItem.length === 0 ? 'center' : undefined,
        }}>
        {currentContestListItem.length === 0 ? (
          <Notexist>아직 대회가 없습니다.</Notexist>
        ) : (
          <>
          {currentContestListItem.map((contest, index) => (
            <div key={index} style={{margin:'0px 0px 0px 0px'}}>
                <Box>
                  <ContestBox onClick={() => toggleContent(index)}>
                    <div style={{margin:'16px 50% 16px 50px'}}>
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
                      {showContent[index] ? (
                        <KeyboardControlKeyIcon style={{ fontSize: '50px',margin: '10px 80% 0px 0px' }} />
                      ) : (
                        <ExpandMoreIcon style={{ fontSize: '50px' }} />
                      )}
                  </ContestBox>
                </Box>

                <hr style={{ color: '#ebebeb', margin: '0px' , border:'1px solid #ebebeb'}} />
                
                <ContentBox 
                  style={{
                    transition: 'max-height 1s ease, transform 1s ease', // 트랜지션 적용
                    overflow: 'hidden', // 내용이 보이지 않도록 숨김
                    maxHeight: showContent[index] ? '1200px' : '0', // 최대 높이 설정
                  }}
                >
                  <Stock>종목 {contest.optionCode}</Stock>
                  <StartAsset>티켓 수 {contest.ticket}개</StartAsset>
                  <Term>전략 실행 주기  {contest.term}s</Term>
                   {/* 줄바꿈 적용 넘어갈 경우 다음 줄로 */}
                   <Content style={{ whiteSpace: 'pre-line',wordWrap: 'break-word' }}>
                     {contest.content}
                   </Content>
                  <Button onClick={()=>navigate('/contestprogress',{ state: { selectedContest } })}>진행 현황</Button>  
                </ContentBox>
                <hr style={{margin:'0px 0px 0px 0px', border:'1px solid #D3D3D3'}}/>

              </div>
          ))}
          </>
        )}
      </Wrapper>
        {currentContestListItem.length > 0 && (
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

export default CurrentContestContent