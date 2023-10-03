import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TablePagination from "@mui/material/TablePagination";
import "./style.css";

import { useNavigate } from "react-router-dom";
import Tooltip from "../../Tooltip/Tooltip";
import {
  Container,
  Wrapper,
  Header,
  Search,
  CreateBtn,
  FreeBoardListTitle,
  ListNumber,
  ListTitle,
  ListWriter,
  ListTime,
  ListHit,
  FreeBoardBox,
  ItemNumber,
  ItemTitle,
  ItemWriter,
  ItemTime,
  ItemtHit,
  DivBox,
  Hr,
  Posting,
} from "./FreeBoardListBox.style";

// api
import {freeBoardList} from '../../../api/FreeBoard/FreeBoard'

function FreeBoardListBox() {
  const navigate = useNavigate();

  const [menu, setMenu] = useState("createdAt");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  // 글 리스트
  const [ boardList, setBoardList] = useState([])
  // 전체 글의 수
  const [count, setCount] = useState(0)

  // api 통신 =============================================================
  const params = {
    sort: menu,
    page: page,
    size: rowsPerPage,
    keyWord: searchKeyword,
  };

  useEffect(()=>{
    freeboard()
  },[page,rowsPerPage,searchKeyword])

  // 자유게시판 리스트 api
  const freeboard = async () => {
    const res = await freeBoardList(params)
    console.log(res)
    if (res.status===200){
      setBoardList(res.data)
      // setCount()
    }
  }
  // api 통신 =================

  // 삭제시 다시 한번 갱신
  useEffect(()=>{
    freeboard()
  },[])
  

  // sort
  const handleChange = (event: SelectChangeEvent) => {
    const selectedMenu = event.target.value as string;
    setMenu(selectedMenu);
  };


  // 페이지네이션 ============================================
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }


  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const itemsToDisplay = boardList.slice(startIndex, endIndex);
  const filteredItems = itemsToDisplay.filter((item) =>
    item.freeboard.title.includes(searchKeyword)
  );
  // 페이지네이션 ============================================

  return (
    <Container>
      <Wrapper>
        <Header>
          <DivBox>
          <Search placeholder="  검색" onChange={(e)=>setSearchKeyword(e.target.value)} />
          <Box sx={{ maxWidth: "130px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={menu}
                onChange={handleChange}
              >
                <MenuItem value="createdAt">최신순</MenuItem>
                <MenuItem value="likes">좋아요</MenuItem>
                <MenuItem value="hits">조회수</MenuItem>
              </Select>
            </FormControl>
          </Box>
          </DivBox>
          <DivBox>
            <CreateBtn onClick={() => navigate("/freeboardcreate")}>
              글 작성
            </CreateBtn>
          </DivBox>
        </Header>
        <FreeBoardBox>
          <FreeBoardListTitle>
            <ListNumber>
              <div>번호</div>
            </ListNumber>
            <ListTitle>
              <div>제목</div>
            </ListTitle>
            <ListWriter>
              <div>작성자</div>
            </ListWriter>
            <ListTime>
              <div>작성시간</div>
            </ListTime>
            <ListHit>
              <div>조회수</div>
            </ListHit>
          </FreeBoardListTitle>

        
          {boardList.map((item, index) => (
            <Posting key={`boardItem_${index}`}>
              <div style={{ display: "flex", cursor: "pointer" }}>
                <ItemNumber>{item.freeboard.id}</ItemNumber>
                <ItemTitle
                  onClick={() => {
                    navigate(`/freeboarddetail`, {
                      state: { postId: item.freeboard.id }, // URL 매개변수 설정
                    });
                  }}
                >
                  {item.freeboard.title}
                </ItemTitle>

                <Tooltip
                  state={{
                    nickname: item.freeboard.nickname,
                    id: item.freeboard.id,
                  }}
                >
                  <ItemWriter>{item.freeboard.nickname}</ItemWriter>
                </Tooltip>

                <ItemTime>{item.freeboard.modifiedAt}</ItemTime>
                <ItemtHit>{item.freeboard.hit}</ItemtHit>
              </div>
              <Hr/>
            </Posting>
          ))}
        </FreeBoardBox>
        <TablePagination
          component="div"
          count={count}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={()=>{}}
          rowsPerPageOptions={[]}
          style={{ margin: "0px 15px 0px 0px" }}
        />
      </Wrapper>
    </Container>
  );
}

export default FreeBoardListBox;
