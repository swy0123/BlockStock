import React, {useState, useEffect} from "react";
import ContestStoreSearch from "./ContestStoreSearch";
import { useNavigate } from "react-router-dom";
import {
  CurrentContestBtn,
  ExpectedContestBtn,
  PastContestBtn,
  StoreBox,
} from './ContestStoreBtn.style'
import { useRecoilState } from "recoil";
import { contesttype } from '../../../recoil/Contest/ContestList'

function ContestStoreBtn(props){
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState<string>("expected"); // 초기 선택값 설정

  const [type, setType] = useRecoilState(contesttype)

  useEffect(()=>{
    console.log(type)
    setSelectedButton(type)
  },[])
  
  const handleButtonClick = (e: string) =>{
    console.log(e)
    setType(e)
  };

  return(
    <div style={{display:'flex',alignItems: 'center'}}>
      <StoreBox>
        <CurrentContestBtn
          onClick={() => handleButtonClick("proceed")}
          style={{
            backgroundColor: type === "proceed" ? "#b155fd" : "initial", 
            color: type === "proceed" ? "white" : "initial", 
          }}
        >
          진행중
        </CurrentContestBtn>
        <ExpectedContestBtn
          onClick={() => handleButtonClick("expected")}
          style={{
            backgroundColor: type === "expected" ? "#b155fd" : "initial",
            color: type === "expected" ? "white" : "initial",
          }}
        >
          예정
        </ExpectedContestBtn>
        <PastContestBtn
          onClick={() => handleButtonClick("finish")}
          style={{
            backgroundColor: type === "finish" ? "#b155fd" : "initial",
            color: type === "finish" ? "white" : "initial",
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
