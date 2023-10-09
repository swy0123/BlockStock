import React, { useState } from "react";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { searchKeywordState } from "../../../recoil/Contest/CurrentContest";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const StoreSearch = styled.input`
  width: 150px;
  height: 28px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  font-family: "Noto Sans Arabic";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 34px;
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
`;

function ContestStoreSearch() {
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setSearchKeyword(e.target.value);
  };

  return (
    <div>
       <Box
      /* <StoreSearch
        type="text"
        placeholder="  검색"
        value={searchKeyword}
        onChange={handleInputChange}
       /> */
        component="form"
        sx={{
          "& > :not(style)": { m: "0px 0px 15px 0px", width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          type="text"
          id="standard-basic"
          label="대회을 입력하세요"
          variant="standard"
          value={searchKeyword}
          onChange={handleInputChange}
          sx={{
            "& > :not(style)": { fontSize: "13px" },
          }}
        />
      </Box>
    </div>
  );
}

export default ContestStoreSearch;
