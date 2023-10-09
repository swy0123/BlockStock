import React, {useState} from "react";
import styled from "styled-components";

import { useRecoilState } from 'recoil';
import { searchKeywordState } from '../../../recoil/Contest/CurrentContest';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function ContestStoreSearch(){

  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);
  
  const handleInputChange = (e) => {
    console.log(e.target.value)
    setSearchKeyword(e.target.value);
  };

  return(
    <div>
       <Box
        component="form"
        sx={{
          '& > :not(style)': { m: '0px 0px 15px 0px', width: '30ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField 
          type="text"
          id="standard-basic" 
          label="대회를 입력하세요" 
          variant="standard" 
          value={searchKeyword}
          onChange={handleInputChange}
          sx={{
            '& > :not(style)' : {fontSize:'13px'}
          }}
        />
      </Box>
    </div>
  )
}

export default ContestStoreSearch