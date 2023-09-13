import React, {useState} from "react";
import styled from "styled-components";

import { useRecoilState } from 'recoil';
import { searchKeywordState } from '../../../recoil/CurrentContest';

const StoreSearch = styled.input`
    width: 192px;
    height: 34px;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    border-radius: 3px;
    font-family: 'Noto Sans Arabic';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 34px;
    display: flex;
    align-items: center;
  `;

function ContestStoreSearch(){

  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);
  
  const handleInputChange = (e) => {
    console.log(e.target.value)
    setSearchKeyword(e.target.value);
  };

  return(
    <div>
      <StoreSearch
        type="text"
        placeholder="  검색"
        value={searchKeyword}
        onChange={handleInputChange}
       />
    </div>
  )
}

export default ContestStoreSearch