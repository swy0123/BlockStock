import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Pagination from "@mui/material/Pagination";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import './style.css'

import { useRecoilValue } from "recoil";
import { TacticBoardList } from '../../../recoil/TacticBoard/TacticBoardBox'

import { useNavigate } from "react-router-dom";
import {
  Container,
  Wrapper,
  Header,
  Search,
  CreateBtn,
  ItemBox,
  Card,
  TitleBox,
  Title,
  Img,
  ReturnBox,
  Testreturn,
  Contestreturn,
  LikeBox,
  Like,
  Hit,
} from './TacticBoardBox.style'

// 게시글 조회 api
import {tacticBoardList} from '../../../api/TacticBoard/TacticBoard'

function TacticBoardBox() {

  const navigate = useNavigate();

  const [menu, setMenu] = useState("createdAt");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [boardList, setBoardList] = useState([])
  const [count, setCount] = useState(0)

  // 검색
  const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
    setPage(1)
  };



  // api 통신 =============================================================
  const params = {
    sort: menu,
    page: page-1,
    size: rowsPerPage,
    keyword: searchKeyword,
  };
  useEffect(()=>{
    tacticboardapi()
  },[page,rowsPerPage,searchKeyword,menu])

  const tacticboardapi = async () => {
    const res = await tacticBoardList(params)
    console.log(res)
    if(res.status===200){
      setBoardList(res.data.tacticPostListResponseList)
      if(Math.floor(res.data.totalCnt % 10)){
        setCount(Math.floor(res.data.totalCnt / 10)+1);
      }else{
        setCount(Math.floor(res.data.totalCnt / 10));
      }
    }
  }
  // api 통신 =================

  useEffect(()=>{
    tacticboardapi()
  },[])

  const handleChange = (event: SelectChangeEvent) => {
    const selectedMenu = event.target.value as string;
    setMenu(selectedMenu);
  };



  // 페이지네이션 ============================================
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
  // 페이지네이션 ============================================
  
  return (
    <Container>
      <Wrapper>
        <Header>
          <Search placeholder="  검색" onChange={handleSearchInputChange} />
          <Box 
          sx={{ 
            maxWidth: '130px',
            margin:'0px 0px 0px 30px'
            }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={menu}
                onChange={handleChange}
                sx={{
                  fontSize:'12px',
                  height:'30px'
              }}
              >
                <MenuItem sx={{fontSize:'12px'}} value="createdAt">최신순</MenuItem>
                <MenuItem sx={{fontSize:'12px'}} value="likes">좋아요</MenuItem>
                <MenuItem sx={{fontSize:'12px'}} value="hit">조회수</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <CreateBtn>
            <div onClick={()=>navigate('/tacticboardcreate')} style={{ margin: '7px 0px 0px 0px' }}>
              글 작성
            </div>
          </CreateBtn>
        </Header>

        <ItemBox style={{display:'flex', flexWrap: 'wrap',justifyContent:'center',alignItems:'center'}}>
          {boardList.map((item, index)=>(
              <Card
              onClick={() => {
                navigate(`/tacticboarddetail`, {
                  state: { post: item } // URL 매개변수 설정
                });
              }}
              >
                <div key={index}>

                <TitleBox>
                  <Title>
                    {item.title}
                  </Title>
                </TitleBox>
                
                <Img src={item.imgPath} 
                style={{margin: item.imgPath === 'img_path' || item.imgPath === null ? '0px 0px 0px 36px' : '0px 0px 0px 23px' }}
                />

                <ReturnBox>
                  <Testreturn>
                    <div>
                    테스트 수익률
                    </div>
                    <div style={{margin: '0px 0px 0px 60px'}}>
                      {item.testReturns}%
                    </div>
                    </Testreturn>
                  <Contestreturn>
                    <div>
                    대 회 수익률
                    </div>
                    <div style={{margin: '0px 0px 0px 72px'}}>
                      {item.contestReturnStatus ? (
                        <>
                        {item.contestReturns}%
                        </>
                      ) : (
                        <>
                        {'-'}
                        </>
                      )}
                    </div>
                    </Contestreturn>
                </ReturnBox>

                <LikeBox>

                  <Like>
                    {item.isLike ? (
                      <FavoriteIcon style={{width:'18px', margin:'0px 0px 0px 0px', color:'red'}}/>
                      ) : (
                      <FavoriteBorderIcon style={{width:'18px', margin:'0px 0px 0px 0px'}}/>
                    )}
                    <div style={{margin:'3px 0px 0px 3px'}}>
                    {item.likeCnt}
                    </div>
                  </Like>

                  <Hit>
                    <VisibilityIcon style={{width:'18px', margin:'0px 0px 0px 0px', color:'black'}}/>
                    <div style={{margin:'3px 0px 0px 3px'}}>
                    {item.hit}
                    </div>
                  </Hit>

                </LikeBox>

                </div>
              </Card>
          ))}
          
        </ItemBox>
          <Pagination 
        count={count} 
        showFirstButton showLastButton
        page={page}
        onChange={handlePageChange}
        sx={combinedStyles}
         />
      </Wrapper>
    </Container>
  )
}

export default TacticBoardBox;
