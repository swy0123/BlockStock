import React, { useState, useEffect} from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Container,
  Wrapper,
  Header,
  Box,
  Title,
  Line,
  Card,
  TitleBox,
  HeaderTitle,
  Img,
  ReturnBox,
  Testreturn,
  Contestreturn,
  LikeBox,
  Like,
  Hit,
} from './LikeTacticBoard.style'
import { useNavigate } from "react-router-dom";

// 게시글 조회 api
import {myTacticBoardList, likeTacticBoard} from '../../api/TacticBoard/TacticBoard'
import { useRecoilValue } from 'recoil';
import { CurrentUserAtom } from '../../recoil/Auth';

function LikeTacticBoard({name}){
  const navigate = useNavigate();

  const { userid } = useRecoilValue(CurrentUserAtom);
  const [BoardList, setBoardList] = useState([])
  const params = {
    sort: 'createdAt',
    page: 0,
    size: 100,
    keyword: '',
  };

  useEffect(()=>{
    if(name){
      mytacticboardapi()
    }else{
      liketacticboardapi()
    }
  },[])

  const mytacticboardapi = async () => {
    const data = {
      userid:userid,
      params:params
    }
    console.log(data)
    const res = await myTacticBoardList(data)
    console.log('전략 게시글=================================================')
    console.log('전략 게시글=================================================')
    console.log(res)
    console.log('전략 게시글=================================================')
    console.log('전략 게시글=================================================')
    if(res.status===200){
      setBoardList(res.data)
      // setLikeBoardList(res.data.tacticPostListResponseList)
    }
  }
  const liketacticboardapi = async () => {
    const res = await likeTacticBoard()
    console.log('전략 게시글=================================================')
    console.log('전략 게시글df=================================================')
    console.log(res)
    console.log('전략 게시글=================================================')
    console.log('전략 게시글=================================================')
    setBoardList(res.tacticPostListResponseList)
  }


  return(
    <>
      <Header>
        <Line/>
        <HeaderTitle>
          전략게시글
        </HeaderTitle>
        <Line/>
      </Header>
    <Container>
      <Wrapper style={{display:'flex', flexWrap: 'wrap'}}>
        {BoardList.map((item,index)=>(
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
                 {(Math.round(item.testReturns * 100) / 100)}%
               </div>
               </Testreturn>
             <Contestreturn>
               <div>
               대 회 수익률
               </div>
               <div style={{margin: '0px 0px 0px 72px'}}>
                 {item.contestReturnStatus ? (
                   <>
                   {(Math.round(item.contestReturns * 100) / 100)}%
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
      </Wrapper>

    </Container>
    </>
  )
}

export default LikeTacticBoard