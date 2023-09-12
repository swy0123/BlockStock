import React, { ChangeEvent, useEffect, useState } from "react";
import BlocklyComponent from "../../components/Blockly";
import "../../components/Blockly/blocks/customblocks";
import "../../components/Blockly/generators/generator";
import styled from "styled-components";
import {
  BlockCodingDiv,
  Input,
  InputDetailDiv,
  InputDetailTitle,
  InputDetailValue,
  InputOptionDiv,
  IsSearchDiv,
  LeftDiv,
  Test,
} from "./BlockCoding.style";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import OptionLikeListItem from "./OptionLikeListItem";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TestDiv = styled.div`
  background-color: rgba(255, 0, 0, 0.3);
  padding: 1px;
`;

function BlockCoding() {
  const [isSearch, setSearch] = useState(true);

  const [title, setTitle] = useState("제목 없는 전략");
  const [keyword, setKeyword] = useState("");
  const [optionLikeList, setOptionLikeList] = useState([]);
  const [startAsset, setStartAsset] = useState(10000000);
  const [startDate, setStartDate] = useState(new Date());
  const [term, setTerm] = useState(1);
  const [round, setRound] = useState(50);
  const MAX_LENGTH = 50;

  const handleTitleField = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setTitle(e.target.value);
  };
  const handleKeywordField = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setKeyword(e.target.value);
  };
  const addComma = (price) => {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };

  const handleStartAsset = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 11) {
      e.target.value = e.target.value.slice(0, 11);
    }
    const value = e.target.value;
    let str = value.replaceAll(/[^0-9]/g, "");
    setStartAsset(str);
  };
  const stringToNum = (value: string) => {
    const onlyNumber = value.replace(/[^0-9]/g, "");
    return onlyNumber;
  };

  const handleTerm = (e: MouseEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(e.target.value);
  };

  const controlTerm = {
    value: term,
    onChange: handleTerm,
    exclusive: true,
  };

  const handleRound = (e: MouseEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(e.target.value);
  };

  const controlRound = {
    value: term,
    onChange: handleTerm,
    exclusive: true,
  };

  const setSearchTrue = () => {
    setSearch(true);
    handleOptionLikeList();
  };

  const setSearchFasle = () => {
    setSearch(false);
    handleOptionLikeList();
  };

  const dummydata = [
    {
      optioncode: 124124,
      optionname: "삼성전자",
      currate: 3.82,
      cost: 777,
    },
    {
      optioncode: 122124,
      optionname: "카카오",
      currate: 3.82,
      cost: 10777,
    },
  ];

  const handleOptionLikeList = async () => {
    // const res = await getOptionLikeList();
    setOptionLikeList(dummydata);
    console.log(dummydata);
    console.log(optionLikeList);
  };

  useEffect(() => {
    setOptionLikeList(dummydata);
  }, []);

  return (
    <div>
      <LeftDiv>
        <Input
          type="text"
          value={title}
          onChange={handleTitleField}
          placeholder="제목을 입력해주세요"
        />
        <IsSearchDiv style={{ width: "100px", height: "200px", backgroundColor: "gray" }}>
          {/* 이름 */}
          <div onClick={setSearchTrue} style={{ backgroundColor: "rgba(45, 83, 198, 0.3)" }}>
            검색
          </div>
          <div onClick={setSearchFasle} style={{ backgroundColor: "rgba(189, 129, 39, 0.3)" }}>
            관심종목
          </div>
          {/* 검색 */}
          <Input type="text" value={keyword} onChange={handleKeywordField} />

          {isSearch ? (
            <>
              검색결과
              {optionLikeList.map((item, index) => (
                <div style={{ margin: "5px" }} key={index}>
                  <span>star </span>
                  <OptionLikeListItem item={item}></OptionLikeListItem>
                  <button>select</button>
                </div>
              ))}
            </>
          ) : (
            <>
              관심목록
              {optionLikeList.map((item, index) => (
                <div style={{ margin: "5px" }}>
                  <span>star </span>
                  <OptionLikeListItem item={item} key={index}></OptionLikeListItem>
                  <button>select</button>
                </div>
              ))}
            </>
          )}

          {/* 미니 차트 */}
          {/* <MiniChart></MiniChart> */}
        </IsSearchDiv>
      </LeftDiv>

      <BlockCodingDiv>
        {/* 블록코딩 */}
        <Test>
          <BlocklyComponent
            readOnly={false}
            trashcan={true}
            media={"media/"}
            move={{
              scrollbars: true,
              drag: true,
              wheel: true,
            }}
          ></BlocklyComponent>
        </Test>

        {/* 세부 입력 */}
        <InputDetailDiv>
          <InputDetailTitle>초기자산</InputDetailTitle>
          <InputDetailTitle>시작시간</InputDetailTitle>
          <InputDetailTitle>주기</InputDetailTitle>
          <InputDetailTitle>반복횟수</InputDetailTitle>
        </InputDetailDiv>
        <InputDetailDiv>
          <InputDetailValue>
            <Input type="text" onChange={handleStartAsset} value={addComma(startAsset) || ""} />
          </InputDetailValue>
          <InputDetailValue>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </InputDetailValue>
          <InputDetailValue>
            <ToggleButtonGroup size="small" {...controlTerm} aria-label="Small sizes">
              <ToggleButton value="min" key="min">
                min
              </ToggleButton>
              <ToggleButton value="day" key="day">
                day
              </ToggleButton>
              <ToggleButton value="week" key="week">
                week
              </ToggleButton>
              <ToggleButton value="tick" key="tick">
                tick
              </ToggleButton>
            </ToggleButtonGroup>
          </InputDetailValue>
          <InputDetailValue>
            <ToggleButtonGroup size="small" {...controlTerm} aria-label="Small sizes">
              <ToggleButton value="fifty" key="fifty">
                50번
              </ToggleButton>
              <ToggleButton value="seventy" key="seventy">
                70번
              </ToggleButton>
              <ToggleButton value="hundred" key="hundred">
                100번
              </ToggleButton>
            </ToggleButtonGroup>
          </InputDetailValue>
        </InputDetailDiv>
        <InputOptionDiv>
          <span>
            종목을<button>카카오</button>으로<button>테스트하기</button>
          </span>
        </InputOptionDiv>
      </BlockCodingDiv>
    </div>
  );
}

export default BlockCoding;
