import React, {useState} from "react";
import ContestStoreSearch from "./ContestStoreSearch";

import {
  CurrentContestBtn,
  ExpectedContestBtn,
  PastContestBtn,
  StoreBox,
} from './ContestStoreBtn.style'

function ContestStoreBtn(){
  const [selectedButton, setSelectedButton] = useState("진행중"); // 초기 선택값 설정

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName); 
  };

  return(
    <div style={{display:'flex', justifyContent: 'space-between',alignItems: 'center'}}>
      <StoreBox>
        <CurrentContestBtn
          onClick={() => handleButtonClick("진행중")}
          style={{
            backgroundColor: selectedButton === "진행중" ? "#E2CCED" : "initial", 
            color: selectedButton === "진행중" ? "white" : "initial", 
          }}
        >
          진행중
        </CurrentContestBtn>
        <ExpectedContestBtn
          onClick={() => handleButtonClick("예정")}
          style={{
            backgroundColor: selectedButton === "예정" ? "#E2CCED" : "initial",
            color: selectedButton === "예정" ? "white" : "initial",
          }}
        >
          예정
        </ExpectedContestBtn>
        <PastContestBtn
          onClick={() => handleButtonClick("완료")}
          style={{
            backgroundColor: selectedButton === "완료" ? "#E2CCED" : "initial",
            color: selectedButton === "완료" ? "white" : "initial",
          }}
        >
          완료
        </PastContestBtn>
      </StoreBox>

      <ContestStoreSearch />

    </div>
  );
}

export default ContestStoreBtn;
