import React, {useState, useEffect} from "react";
import ContestStoreSearch from "./ContestStoreSearch";
import { useNavigate } from "react-router-dom";
import {
  CurrentContestBtn,
  ExpectedContestBtn,
  PastContestBtn,
  StoreBox,
} from './ContestStoreBtn.style'

function ContestStoreBtn(props){
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState<string>("/currentcontest"); // 초기 선택값 설정

  useEffect(()=>{
    console.log(props.name)
    setSelectedButton(props.name)
  },[])
  
  const handleButtonClick = (e: string) =>{
    navigate(e)
  };

  return(
    <div style={{display:'flex', justifyContent: 'space-between',alignItems: 'center'}}>
      <StoreBox>
        <CurrentContestBtn
          onClick={() => handleButtonClick("/currentcontest")}
          style={{
            backgroundColor: selectedButton === "/currentcontest" ? "#E2CCED" : "initial", 
            color: selectedButton === "/currentcontest" ? "white" : "initial", 
          }}
        >
          진행중
        </CurrentContestBtn>
        <ExpectedContestBtn
          onClick={() => handleButtonClick("/expectedContest")}
          style={{
            backgroundColor: selectedButton === "/expectedContest" ? "#E2CCED" : "initial",
            color: selectedButton === "/expectedContest" ? "white" : "initial",
          }}
        >
          예정
        </ExpectedContestBtn>
        <PastContestBtn
          onClick={() => handleButtonClick("/completedcontest")}
          style={{
            backgroundColor: selectedButton === "/completedcontest" ? "#E2CCED" : "initial",
            color: selectedButton === "/completedcontest" ? "white" : "initial",
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
