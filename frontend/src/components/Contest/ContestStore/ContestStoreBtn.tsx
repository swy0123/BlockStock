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
  const [selectedButton, setSelectedButton] = useState<string>("진행"); // 초기 선택값 설정

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
            backgroundColor: selectedButton === "진행" ? "#E2CCED" : "initial", 
            color: selectedButton === "진행" ? "white" : "initial", 
          }}
        >
          진행중
        </CurrentContestBtn>
        <ExpectedContestBtn
          onClick={() => handleButtonClick("/expectedcontest")}
          style={{
            backgroundColor: selectedButton === "예정" ? "#E2CCED" : "initial",
            color: selectedButton === "예정" ? "white" : "initial",
          }}
        >
          예정
        </ExpectedContestBtn>
        <PastContestBtn
          onClick={() => handleButtonClick("/completedcontest")}
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
