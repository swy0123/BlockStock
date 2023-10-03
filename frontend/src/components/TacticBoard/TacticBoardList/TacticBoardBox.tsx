import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TablePagination from '@mui/material/TablePagination';
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
  Missile,
  Boom,
  BoomVideo,
  Speech,
  MeBox,
  Mes
} from './TacticBoardBox.style'

// 게시글 조회 api
import {tacticBoardList} from '../../../api/TacticBoard/TacticBoard'

function TacticBoardBox() {

  const navigate = useNavigate();

  const [menu, setMenu] = useState("createdAt");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [boardList, setBoardList] = useState([])


  // 검색
  const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };



  // api 통신 =============================================================
  const params = {
    sort: menu,
    page: page,
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
      setBoardList(res.data)
    }
  }
  // api 통신 =================


  const handleChange = (event: SelectChangeEvent) => {
    const selectedMenu = event.target.value as string;
    setMenu(selectedMenu);
  };



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
  const itemsToDisplay = boardList.slice(startIndex, endIndex);
  const filteredItems = itemsToDisplay.filter((item) =>
    item.title.includes(searchKeyword)
  );
  // 페이지네이션 ============================================

  // 미사일 
  const [isHovered, setIsHovered] = useState(false);
  const [boomimg, setBoomimg] = useState(false)
  const [boomvideo, setBoomvideo] = useState(false)
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(true);
  };
  const handleTime = ()=>{
    setTimeout(() => {
      setBoomimg(true);
      setBoomvideo(true);
      // setTimeout(() => {
      //   setIsClicked(false);
      //   setBoomimg(false);
      // }, 4000);
      setTimeout(() => {
        setIsClicked(false);
        setBoomvideo(false);
      }, 20000);
    }, 1700); // 2초(2000 밀리초) 후에 실행
  };

  const z = 'zzzzzzz'
  
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

        <ItemBox style={{display:'flex', flexWrap: 'wrap',}}>
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
        <MeBox 
        onClick={handleTime}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            {isHovered && (
            <Mes>
              절대 누르지 마시오! {/* 경고 메시지 */}
            </Mes>
          )}
            <Missile 
              src="/icon/미사일new.png" 
              onClick={handleClick}
              style={{
                width:'20px',
                left: isClicked ? "600px" : "300px",
                top: isClicked ? "300px" : "800px",
                minWidth: isClicked ? "100px" : "20px",
              }}
            />
          </MeBox>
        <TablePagination
          component="div"
          count={boardList.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={() => {}}
          rowsPerPageOptions={[]}
          style={{margin:'0px 50px 0px 0px'}}
        />
      </Wrapper>
      {boomimg && <Boom src="/icon/폭발.webp"/>}
      {boomimg && <Speech>{z * 2}</Speech>}
      {/* {boomvideo && <BoomVideo src="/icon/차르붐바.mp4" autoPlay playbackRate={2} />} */}
    </Container>
  )
}

export default TacticBoardBox;
