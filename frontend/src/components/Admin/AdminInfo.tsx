import React from "react";
import {
  Container,
  ImgBox,
  Img,
  ServerTitle,
  AbminName,
  Line,
  Wrapper,
  ServerBox,
  ServerName,
  Email,
  EmailBox,
  Box,
  InfoBox,
  UseImg,
  UseName,
  ContestImg,
  ContestNum,
} from './AdminInfo.style'

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
function AdminInfo(){
  return(
    <>
      <Container>
        <ImgBox>
          <Img src="/icon/admin2.png"/>
        </ImgBox>
        <ServerTitle>Block Stock</ServerTitle>
        <AbminName>
          <div>
            admin
          </div>
        </AbminName>
        <Line/>
        <Wrapper>
          <ServerBox>
            <ManageAccountsIcon
            style={{fontSize:'30px'}}
            />
            <ServerName>Block Stock</ServerName>
          </ServerBox>
          <EmailBox>
            <MailOutlineIcon
            style={{fontSize:'30px'}}
            />
            <Email>admin@naver.com</Email>
          </EmailBox>
          <Box>
            <InfoBox>
              <UseImg src="/icon/유저이미지.png"/>
              <UseName>
                <div
                style={{color:'#8C8892', fontSize:'10px'}}
                >member</div>
                <div>153</div>
              </UseName>
              <ContestImg  src="/icon/대회아이콘.png"/>
              <ContestNum>
                <div
                 style={{fontSize:'10px', color:'#8C8892'}}
                >contest</div>
                <div>26</div>
              </ContestNum>
            </InfoBox>
          </Box>

        </Wrapper>

      </Container>
    </>
  )
}

export default AdminInfo