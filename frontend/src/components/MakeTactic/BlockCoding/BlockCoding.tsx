import React, { useRef, ChangeEvent, useEffect, useState, MouseEvent, KeyboardEvent } from "react";
import BlocklyComponent from "../../Blockly";
import "../../Blockly/blocks/customblocks";
import "../../Blockly/generators/generator";
import styled from "styled-components";
import SearchImgSrc from "../../../assets/img/MakeTactic/search.png";
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
  SearchImg,
  SearchInput,
  SearchInputDiv,
  SearchItemList,
  SearchType,
  SearchTypeDiv,
  StyledDatePicker,
  Test,
  Title,
  TitleDiv,
  TitleInput,

  Wrapper,
  Box,

} from "./BlockCoding.style";
import { ThemeProvider, createTheme } from "@mui/system";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import OptionLikeListItem from "./OptionLikeListItem";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface OptionItemProps {
  optionCode: number;
  optionName: string;
  todayClose: number;
  diffRate: number;
  isLike: boolean;
}

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
  const [optionLikeList, setOptionLikeList] = useState<OptionItemProps[]>([]);
  const [optionCode, setOptionCode] = useState(0);
  const [optionName, setOptionName] = useState("");
  const [startAsset, setStartAsset] = useState(10000000);
  const [startDate, setStartDate] = useState(new Date());
  const [term, setTerm] = useState("1m");
  const [round, setRound] = useState("50");
  const [tacticPythonCode, setTacticPythonCode] = useState(undefined);
  const [tacticJsonCode, setTacticJsonCode] = useState(undefined);
  const [tacticImg, setTacticImg] = useState(undefined);
  const [codeCheck, setCodeCheck] = useState(true);

  const editSetTrue = () => {
    setEditable(true);
  };

  const MAX_LENGTH = 20;

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
    return () => {
      window.removeEventListener("click", handleClickOutside, true);
    };
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
  const writeTacticImg = (str) => {
    setTacticImg(str);
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
  const addComma = (price: number | null) => {
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

  //검색 모드 변경
  const setSearchTrue = () => {
    setSearch(true);
    setKeyword("");
    handleOptionLikeList(true);
  };

  const setSearchFasle = () => {
    setSearch(false);
    setKeyword("");
    handleOptionLikeList(false);
  };

  //종목 검색 버튼, axios 통신
  const searchKeyword = () => {
    // const req = (keyword);
    console.log("검색 : "+keyword)
  };

  const handleOptionLikeList = async (type: boolean) => {
    // const res = await getOptionLikeList();
    setOptionLikeList(dummydata);
    // console.log(dummydata);
    // console.log(optionLikeList);
  };

  // const handleOptionCodeField = (e: ChangeEvent<HTMLInputElement>) => {
  //   // if (e.target.value.length > MAX_LENGTH) {
  //   //     e.target.value = e.target.value.slice(0, MAX_LENGTH);
  //   // }
  //   setOptionCode(parseInt(e.target.value));
  // };

  const setOption = (curOptionCode: number, curOptionName: string) => {
    setOptionCode(curOptionCode);
    setOptionName(curOptionName);
    console.log("setOption" + curOptionCode + curOptionName);
  };

  
  // 버튼 asiox 통신용 데이터 테스트, 버튼 눌린 상태 체크 -> 블록코딩 컴포넌트 통신
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
      tacticJsonCode !== undefined &&
      writeTacticImg !== undefined
    ) {
      console.log("테스트 버튼 누름 -----------------");
      if (title === "") props.returnTitle("제목 없는 전략");
      else props.returnTitle(title);
      // console.log(optionCode)
      // console.log(startAsset)
      // console.log(returnDate())
      // console.log(term)
      // console.log(round)
      // console.log(tacticPythonCode)
      // console.log(tacticJsonCode)
      props.returnOptionCode(optionCode);
      props.returnOptionName(optionName);
      props.returnStartDate(startDate);
      props.returnTerm(term);
      props.returnRound(round);
      props.returnTacticPythonCode(tacticPythonCode);
      props.returnTacticJsonCode(tacticJsonCode);
      props.returnTacticImg(tacticImg);
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
        <div>
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

          <LeftDiv>
            
              {/* <Input
                type="text"
                value={title}
                onChange={handleTitleField}
                placeholder="제목을 입력해주세요"
              /> */}
              <IsSearchDiv>
                {/* 이름 */}
                <SearchTypeDiv>
                  <SearchType onClick={setSearchTrue} $isChecked={isSearch}>
                    검색
                    {/* <SearchTypeUnderLine $isChecked={isSearch}></SearchTypeUnderLine> */}
                  </SearchType>
                  <SearchType onClick={setSearchFasle} $isChecked={!isSearch}>
                    관심종목
                    {/* <SearchTypeUnderLine $isChecked={!isSearch}></SearchTypeUnderLine> */}
                  </SearchType>
                </SearchTypeDiv>

                {/* 검색 */}
                <SearchInputDiv>
                  <SearchImg src={SearchImgSrc} onClick={searchKeyword} alt="검색"/>
                  <SearchInput type="text" value={keyword} onChange={handleKeywordField} />
                </SearchInputDiv>

                <SearchItemList>
                  {isSearch ? (
                    <>
                      검색결과
                      {optionLikeList.map((item, index) => (
                        <OptionLikeListItem
                          key={index}
                          isLike={item.isLike}
                          item={item}
                          setOption={setOption}
                        ></OptionLikeListItem>
                      ))}
                    </>
                  ) : (
                    <>
                      관심목록
                      {optionLikeList.map((item, index) => (
                        <OptionLikeListItem
                          key={index}
                          isLike={item.isLike}
                          item={item}
                          setOption={setOption}
                        ></OptionLikeListItem>
                      ))}
                    </>
                  )}
                </SearchItemList>

                {/* 미니 차트 */}
                {/* <MiniChart></MiniChart> */}
              </IsSearchDiv>
            </LeftDiv>
        </div>

          <Wrapper>

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
                  writeTacticImg={(str) => {
                    writeTacticImg(str);
                  }}
                  codeCheck={codeCheck}
                  setCodeCheckTrue={setCodeCheckTrue}
                ></BlocklyComponent>
              </Test>

              {/* 세부 입력 */}
              <div style={{ minWidth:'700px'}}>
                <InputDetailDiv>
                  <InputDetailTitle><div>초기자산</div></InputDetailTitle>
                  <InputDetailTitle>시작시간</InputDetailTitle>
                  <InputDetailTitle>주기</InputDetailTitle>
                  <InputDetailTitle>반복횟수</InputDetailTitle>
                </InputDetailDiv>

                <InputDetailDiv>

                  <div style={{padding:'10px', border: '1px solid black'}}>
                    <InputDetailValue>
                      <Input type="text" onChange={handleStartAsset} value={addComma(startAsset) || ""} />원
                    </InputDetailValue>
                  </div>

                  <InputDetailValue style={{margin:'0px 0px 0px 25px'}}>
                    <StyledDatePicker dateFormat="yyyy-MM-dd" selected={startDate} onChange={(date) => setStartDate(date)} />
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
              </div>

              <div>
                <InputOptionDiv>
                  <span>
                    종목을&nbsp;
                    <Input type="text" value={optionName} readOnly/>
                    으로 <button onClick={onClickTestButton}>테스트하기</button>
                  </span>
                </InputOptionDiv>
              </div>

            </BlockCodingDiv>
          </Wrapper>
    </BlockCodingContainer>
  );
};

export default BlockCoding;

const dummydata = [
  {
    optionCode: 124124,
    optionName: "삼성전자",
    todayClose: 777,
    diffRate: 3.82,
    isLike: true,
  },
  {
    optionCode: 122124,
    optionName: "카카오",
    todayClose: 10777,
    diffRate: 3.82,
    isLike: false,
  },
  {
    optionCode: 124124,
    optionName: "삼성전자",
    todayClose: 777,
    diffRate: 3.82,
    isLike: true,
  },
  {
    optionCode: 122124,
    optionName: "카카오",
    todayClose: 10777,
    diffRate: 3.82,
    isLike: false,
  },
  {
    optionCode: 124124,
    optionName: "삼성전자",
    todayClose: 777,
    diffRate: 3.82,
    isLike: true,
  },
  {
    optionCode: 122124,
    optionName: "카카오",
    todayClose: 10777,
    diffRate: 3.82,
    isLike: false,
  },
  {
    optionCode: 124124,
    optionName: "삼성전자",
    todayClose: 777,
    diffRate: 3.82,
    isLike: true,
  },
  {
    optionCode: 122124,
    optionName: "카카오",
    todayClose: 10777,
    diffRate: 3.82,
    isLike: false,
  },
  {
    optionCode: 124124,
    optionName: "삼성전자",
    todayClose: 777,
    diffRate: 3.82,
    isLike: true,
  },
  {
    optionCode: 122124,
    optionName: "카카오",
    todayClose: 10777,
    diffRate: 3.82,
    isLike: false,
  },
];
