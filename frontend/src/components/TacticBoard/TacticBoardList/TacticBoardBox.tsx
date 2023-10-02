import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TablePagination from '@mui/material/TablePagination';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  // 검색
  const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };



  // api 통신 =============================================================
  const params = {
    sort: menu,
    page: page,
    size: rowsPerPage,
    keyWord: searchKeyword,
  };
  useEffect(()=>{
    tacticboardapi()
  },[page,rowsPerPage,searchKeyword])

  const tacticboardapi = async () => {
    const res = await tacticBoardList(params)
    console.log(res)
  }
  // api 통신 =================



  // 더미데이터 ============================================
  const BoardList = useRecoilValue(TacticBoardList);


  // 더미데이터를 사용하여 직접 조건에 맞게 다시 배열을 만들기
  // useEffect(() => {
  //   // Sort the BoardList in "최신순" order when the component mounts
  //   const sortedListCopy = [...BoardList].sort((a, b) =>
  //     new Date(b.freeboard.modifiedAt) - new Date(a.freeboard.modifiedAt)
  //   );
  //   setBoardList(sortedListCopy);
  // }, []);


  const handleChange = (event: SelectChangeEvent) => {
    const selectedMenu = event.target.value as string;
    setMenu(selectedMenu);

    // let sortedListCopy = [...BoardList];

    // if (selectedMenu === "최신순") {
    //   sortedListCopy.sort((a, b) =>
    //     new Date(b.freeboard.modifiedAt) - new Date(a.freeboard.modifiedAt)
    //   );
    // } else if (selectedMenu === "조회수") {
    //   sortedListCopy.sort((a, b) => b.freeboard.hit - a.freeboard.hit);
    // }

    // setBoardList(sortedListCopy);
  };
  // 더미데이터 ============================================



  // 페이지네이션 ============================================

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const rowsPerPageOptions = [5, 6, 7, 8];


  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const itemsToDisplay = BoardList.slice(startIndex, endIndex);
  const filteredItems = itemsToDisplay.filter((item) =>
    item.title.includes(searchKeyword)
  );
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
                <MenuItem sx={{fontSize:'12px'}} value="hits">조회수</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <CreateBtn>
            <div onClick={()=>navigate('/tacticboardcreate')} style={{ margin: '7px 0px 0px 0px' }}>
              글 작성
            </div>
          </CreateBtn>
        </Header>

        <ItemBox style={{display:'flex', flexWrap: 'wrap',}}>
          {filteredItems.map((item, index)=>(
              <Card>
                <div key={index}>

                <TitleBox>
                  <Title
                  onClick={() => {
                    navigate(`/tacticboarddetail`, {
                      state: { postId: item.tacticPostId } // URL 매개변수 설정
                    });
                  }}>
                    {item.title}
                  </Title>
                </TitleBox>

                <Img src="/icon/전략블록.png"/>

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
                    {item.contestReturns}%
                    </div>
                    </Contestreturn>
                </ReturnBox>

                <LikeBox>

                  <Like>
                    <FavoriteBorderIcon style={{width:'18px', margin:'0px 0px 0px 0px'}}/>
                    <div style={{margin:'3px 0px 0px 3px'}}>
                    {item.likeCnt}
                    </div>
                  </Like>

                  <Hit>
                    <VisibilityIcon style={{width:'18px', margin:'0px 0px 0px 0px'}}/>
                    <div style={{margin:'3px 0px 0px 3px'}}>
                    {item.hit}
                    </div>
                  </Hit>

                </LikeBox>

                </div>
              </Card>
          ))}
          
        </ItemBox>


        <TablePagination
          component="div"
          count={BoardList.length}
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

export default TacticBoardBox;
