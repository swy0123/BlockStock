import React, { useState, useEffect } from "react";
import AdminInfo from "../../components/Admin/AdminInfo";
import ContestBtn from "../../components/Admin/ContestBtn";
import ContestList from "../../components/Admin/ContestList";
import ContestCreate from "../../components/Contest/ContestCreate/ContestCreate";
import styled from "styled-components";

// api 통신
import {expectedContest} from '../../api/Contest/Main' 

import { useRecoilState } from 'recoil';
import { type } from '../../recoil/Admin/AdminContest';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 30px 0px 0px 30px;
`;

function ContestManagement() {

  const [typeValue, setType] = useRecoilState(type);
  const [ contestList, setContestList] = useState([])
  const [ count, setCount ] = useState(0)
  const [currentPage, setCurrentPage] = useState(0);

  const handleButtonClick = (info) => {
    console.log('Received info from button click:', info);
    contestListApi()
    setType(info);
  };


  const data = {
    status:'expected',
    page : currentPage,
    size: 4,
    key_word:''
  }


  // api =====================================================
  useEffect(()=>{
    console.log(currentPage)
    if (typeValue === 'List'){
      contestListApi()
    }
  },[typeValue,currentPage])

  const contestListApi = async ()=>{
    const contest = await expectedContest(data)
    console.log('관리자 페이지 대회 리스트', contest)
    setContestList(contest.contestList)
    setCount(contest.count)
  }
  // api =====================================================
        
  

  return (
    <>
      <Container>
        <div style={{ margin: '0px 0px 0px 0px' }}>
          <AdminInfo />
        </div>
        <div style={{ margin: '0px 0px 0px 50px' }}>
          <ContestBtn onButtonClick={handleButtonClick} name={type}/>
          {typeValue === 'List' && <ContestList 
          onClickPage={(page) => setCurrentPage(page)}
          data={{ contestList, count }}
          onButtonClick={handleButtonClick}
          />}
          {typeValue === 'create' && <ContestCreate />}
        </div>
      </Container>
    </>
  );
}

export default ContestManagement;
