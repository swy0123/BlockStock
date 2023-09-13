import React, { useRef, ChangeEvent, useEffect, useState, MouseEvent, KeyboardEvent } from "react";
import BlocklyComponent from "../../Blockly";
import "../../Blockly/blocks/customblocks";
import "../../Blockly/generators/generator";
import styled from "styled-components";
import {
  BlockCodingContainer,
  BlockCodingDiv,
  Input,
  InputDetailDiv,
  InputDetailTitle,
  InputDetailValue,
  InputOptionDiv,
  IsSearchDiv,
  LeftDiv,
  SearchInput,
  SearchItemList,
  SearchType,
  SearchTypeUnderLine,
  Test,
  Title,
  TitleDiv,
  TitleInput,
} from "./BlockCoding.style";
import { ThemeProvider, createTheme } from "@mui/system";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import OptionLikeListItem from "./OptionLikeListItem";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TestDiv = styled.div`
  background-color: rgba(255, 0, 0, 0.3);
  padding: 1px;
`;

const theme = createTheme({
  palette: {
    success: {
      dark: "#009688",
    },
  },
});

const BlockCoding = (props) => {
  const [isSearch, setSearch] = useState(true);

  const ref = useRef(null);
  const [title, setTitle] = useState("");
  const [editable, setEditable] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [optionLikeList, setOptionLikeList] = useState([]);
  const [optionCode, setOptionCode] = useState("");
  const [startAsset, setStartAsset] = useState(10000000);
  const [startDate, setStartDate] = useState(new Date());
  const [term, setTerm] = useState("1m");
  const [round, setRound] = useState("50");
  const [tacticPythonCode, setTacticPythonCode] = useState(undefined);
  const [tacticJsonCode, setTacticJsonCode] = useState(undefined);
  const [codeCheck, setCodeCheck] = useState(true);

  const editSetTrue = () => {
    setEditable(true);
  };

  const MAX_LENGTH = 50;

  const handleTitleField = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setTitle(e.target.value);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setEditable(!editable);
    }
  };
  const handleClickOutside = (e: MouseEvent<HTMLElement>) => {
    if (editable == true && !ref.current.contains(e.target)) setEditable(false);
  };
  useEffect(() => {
    window.addEventListener("click", handleClickOutside, true);
  });

  const writeTacticPythonCode = (str) => {
    setTacticPythonCode(str);
    console.log("writeTacticPythonCode");
    console.log(str);
  };
  const writeTacticJsonCode = (str) => {
    setTacticJsonCode(str);
    console.log(str);
  };
  const setCodeCheckTrue = () => {
    setCodeCheck(true);
  };

  const handleKeywordField = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setKeyword(e.target.value);
  };
  const addComma = (price: string | null) => {
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

  const handleTerm = (e: MouseEvent<HTMLElement>, value: any) => {
    // const value = e.target.value;
    setTerm(value);
  };

  const controlTerm = {
    value: term,
    onChange: handleTerm,
    exclusive: true,
  };

  const handleRound = (e: MouseEvent<HTMLElement>, value: any) => {
    // const value = e.target.value;
    setRound(value);
  };

  const controlRound = {
    value: round,
    onChange: handleRound,
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
    {
      optioncode: 122124,
      optionname: "카카오",
      currate: 3.82,
      cost: 10777,
    },
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
    // console.log(dummydata);
    // console.log(optionLikeList);
  };

  const handleOptionCodeField = (e: ChangeEvent<HTMLInputElement>) => {
    // if (e.target.value.length > MAX_LENGTH) {
    //     e.target.value = e.target.value.slice(0, MAX_LENGTH);
    // }
    setOptionCode(e.target.value);
  };

  const onClickTestButton = () => {
    setCodeCheck(false);
    console.log(codeCheck);
    // props.toggleFlag();
  };

  // 버튼 asiox 통신용 데이터 테스트
  useEffect(() => {
    if (
      tacticPythonCode !== "undefined" &&
      tacticPythonCode !== "" &&
      tacticJsonCode !== undefined
    ) {
      console.log("테스트 버튼 누름 -----------------");
      if(title==="") setTitle("제목 없는 전략")
      // console.log(optionCode)
      // console.log(startAsset)
      // console.log(returnDate())
      // console.log(term)
      // console.log(round)
      // console.log(tacticPythonCode)
      // console.log(tacticJsonCode)
      props.returnTitle(title);
      props.returnOptionCode(optionCode);
      props.returnStartDate(startDate);
      props.returnTerm(term);
      props.returnRound(round);
      props.returnTacticPythonCode(tacticPythonCode);
      props.returnTacticJsonCode(tacticJsonCode);
      console.log("---------------------------------");
      alert(tacticPythonCode);

      props.toggleFlag();
    }
  }, [codeCheck]);

  useEffect(() => {
    setOptionLikeList(dummydata);
  }, []);

  const returnDate = () => {
    const today = startDate;
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");

    const formattedDate = `${year}${month}${day}`;
    return formattedDate;
  };

  return (
    <BlockCodingContainer>
      <LeftDiv>
        <TitleDiv ref={ref}>
          {editable ? (
            <TitleInput
              type="text"
              value={title}
              onChange={(e) => handleTitleField(e)}
              onKeyDown={handleKeyDown}
            />
          ) : title !== "" ? (
            <Title onClick={editSetTrue}>{title}</Title>
          ) : (
            <Title onClick={editSetTrue}>제목 없는 전략</Title>
          )}
        </TitleDiv>
        {/* <Input
          type="text"
          value={title}
          onChange={handleTitleField}
          placeholder="제목을 입력해주세요"
        /> */}
        <IsSearchDiv>
          {/* 이름 */}
          <SearchType onClick={setSearchTrue} $isChecked={isSearch}>
            검색
            <SearchTypeUnderLine $isChecked={isSearch}></SearchTypeUnderLine>
          </SearchType>
          <SearchType onClick={setSearchFasle} $isChecked={!isSearch}>
            관심종목
            <SearchTypeUnderLine $isChecked={!isSearch}></SearchTypeUnderLine>
          </SearchType>
          {/* 검색 */}
          <SearchInput type="text" value={keyword} onChange={handleKeywordField} />
          <SearchItemList>
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
          </SearchItemList>

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
            writeTacticPythonCode={(str) => {
              writeTacticPythonCode(str);
            }}
            writeTacticJsonCode={(str) => {
              writeTacticJsonCode(str);
            }}
            codeCheck={codeCheck}
            setCodeCheckTrue={setCodeCheckTrue}
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
              <ToggleButton value="1m" key="min">
                &nbsp;1분
              </ToggleButton>
              <ToggleButton value="10m" key="10min">
                10분
              </ToggleButton>
              <ToggleButton value="1d" key="day">
                &nbsp;1일
              </ToggleButton>
              <ToggleButton value="1w" key="week">
                &nbsp;1주
              </ToggleButton>
            </ToggleButtonGroup>
          </InputDetailValue>
          <InputDetailValue>
            <ToggleButtonGroup size="small" {...controlRound} aria-label="Small sizes">
              <ToggleButton value="50" key="fifty">
                50번
              </ToggleButton>
              <ToggleButton value="70" key="seventy">
                70번
              </ToggleButton>
              <ToggleButton value="100" key="hundred">
                100번
              </ToggleButton>
            </ToggleButtonGroup>
          </InputDetailValue>
        </InputDetailDiv>
        <InputOptionDiv>
          <span>
            종목을
            <Input type="text" value={optionCode} onChange={handleOptionCodeField} />
            으로<button onClick={onClickTestButton}>테스트하기</button>
          </span>
        </InputOptionDiv>
      </BlockCodingDiv>
    </BlockCodingContainer>
  );
};

export default BlockCoding;
