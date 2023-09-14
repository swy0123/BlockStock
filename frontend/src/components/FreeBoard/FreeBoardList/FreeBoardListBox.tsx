import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import './style.css'
import { useRecoilValue } from "recoil";
import { freeBoardList } from '../../../recoil/FreeBoard/FreeBoardList'
import TablePagination from '@mui/material/TablePagination';
import { useNavigate } from "react-router-dom";
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
  ItemtHit
} from './FreeBoardListBox.style'
function FreeBoardListBox() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("최신순");
  const BoardList = useRecoilValue(freeBoardList);
  const [sortedList, setBoardList] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    // Sort the BoardList in "최신순" order when the component mounts
    const sortedListCopy = [...BoardList].sort((a, b) =>
      new Date(b.freeboard.modifiedAt) - new Date(a.freeboard.modifiedAt)
    );
    setBoardList(sortedListCopy);
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    const selectedMenu = event.target.value as string;
    setMenu(selectedMenu);

    let sortedListCopy = [...BoardList];

    if (selectedMenu === "최신순") {
      sortedListCopy.sort((a, b) =>
        new Date(b.freeboard.modifiedAt) - new Date(a.freeboard.modifiedAt)
      );
    } else if (selectedMenu === "조회수") {
      sortedListCopy.sort((a, b) => b.freeboard.hit - a.freeboard.hit);
    }

    setBoardList(sortedListCopy);
  };

  // Handle page change
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

  const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const itemsToDisplay = sortedList.slice(startIndex, endIndex);
  const filteredItems = itemsToDisplay.filter((item) =>
    item.freeboard.title.includes(searchKeyword)
  );



  return (
    <Container>
      <Wrapper>
        <Header>
          <Box sx={{ width: '150px' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={menu}
                onChange={handleChange}
              >
                <MenuItem value="최신순">최신순</MenuItem>
                <MenuItem value="좋아요">좋아요</MenuItem>
                <MenuItem value="조회수">조회수</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Search placeholder="  검색" onChange={handleSearchInputChange} />
          <CreateBtn>
            <div onClick={()=>navigate('/freeboardcreate')} style={{ margin: '7px 0px 0px 0px' }}>
              글 작성
            </div>
          </CreateBtn>
        </Header>

        <FreeBoardListTitle>
          <ListNumber><div>번호</div></ListNumber>
          <ListTitle><div>제목</div></ListTitle>
          <ListWriter><div>작성자</div></ListWriter>
          <ListTime><div>작성시간</div></ListTime>
          <ListHit><div>조회수</div></ListHit>
        </FreeBoardListTitle>

        <FreeBoardBox>
          {filteredItems.map((item, index) => (
            <div key={`boardItem_${index}`} style={{ display: 'flex' }}>
              <ItemNumber>{item.freeboard.id}</ItemNumber>
              <ItemTitle>{item.freeboard.title}</ItemTitle>
              <ItemWriter>{item.freeboard.nickname}</ItemWriter>
              <ItemTime>{item.freeboard.modifiedAt}</ItemTime>
              <ItemtHit>{item.freeboard.hit}</ItemtHit>
            </div>
          ))}
        </FreeBoardBox>

        <TablePagination
          component="div"
          count={sortedList.length}
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

export default FreeBoardListBox;
