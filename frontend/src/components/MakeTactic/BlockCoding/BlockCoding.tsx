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
  MoneyBox,
  ChoiceTitleBox,
  PeriodBox,
  ScheduleBox,
  ChoiceBox,
  StocksInput,
  TestButton,
} from "./BlockCoding.style";
import { ThemeProvider, createTheme } from "@mui/system";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import OptionLikeListItem from "./OptionLikeListItem";
import "react-datepicker/dist/react-datepicker.css";
import { tacticImport, tacticTest, tacticTestProps } from "../../../api/Tactic/TacticTest";

export interface OptionItemProps {
  optionCode: string;
  optionName: string;
  isLike: boolean;
}

const BlockCoding = (props) => {
  const [isSearch, setSearch] = useState(true);

  const ref = useRef(null);
  const [title, setTitle] = useState("");
  const [editable, setEditable] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [optionLikeList, setOptionLikeList] = useState<OptionItemProps[]>([]);
  const [optionCode, setOptionCode] = useState("");
  const [optionName, setOptionName] = useState("");
  const [startAsset, setStartAsset] = useState(10000000);
  const [startDate, setStartDate] = useState(new Date());
  const [term, setTerm] = useState("1m");
  const [repeatCnt, setRepeatCnt] = useState(50);
  const [tacticPythonCode, setTacticPythonCode] = useState(undefined);
  const [tacticJsonCode, setTacticJsonCode] = useState(undefined);
  const [tacticImg, setTacticImg] = useState(undefined);
  const [codeCheck, setCodeCheck] = useState(true);

  //전략 조회일 경우
  useEffect(() => {
    if (props.tacticId != null) {
      importData(props.tacticId)
    }
  }, [props])

  const importData = async (id: number) => {
    const res = await tacticImport(id);
    setOptionCode(res.optionCode)
    setOptionName(res.optionName)
    setTitle(res.title)
    setTacticPythonCode(res.tacticPythonCode)
    setTacticJsonCode(res.tacticJsonCode)
    setTacticImg(res.tacticImg)
  }

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

  //제목 활성
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setEditable(!editable);
    }
  };

  //제목 비활성
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

  const handleRepeatCnt = (e: MouseEvent<HTMLElement>, value: any) => {
    // const value = e.target.value;
    setRepeatCnt(value);
  };

  const controlRepeatCnt = {
    value: repeatCnt,
    onChange: handleRepeatCnt,
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
    console.log("검색 : " + keyword);
  };

  //종목 검색 결과
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

  const setOption = (curOptionCode: string, curOptionName: string) => {
    setOptionCode(curOptionCode);
    setOptionName(curOptionName);
    console.log("setOption" + curOptionCode + curOptionName);
  };

  // 버튼 asiox 통신용 데이터 테스트, 버튼 눌린 상태 체크 -> 블록코딩 컴포넌트 통신
  //   {
  //     "optionCode" : "A003540",
  //     "tacticPythonCode" : "buy((asset(1, per)))",
  //     "tacticJsonCode" : "",
  //     "startAsset" : 1000000,
  //     "startTime" : "20220406",
  //     "term" : "1d",
  //     "repeatCnt" : 10
  // }

  const onClickTestButton = async () => {
    const tacticTestData: tacticTestProps = {
      optionCode: optionCode,
      tacticPythonCode: tacticPythonCode,
      tacticJsonCode: tacticJsonCode,
      startAsset: startAsset,
      startTime: startDate.toString(),
      term: term,
      repeatCnt: repeatCnt,
    };

    setCodeCheck(false);
    // const res = await tacticTest(tacticTestData);
    console.log(tacticTestData);
    // console.log(res);
    // props.toggleFlag();
  };

  // 버튼 asiox 통신optionCodetacticTest용 데이터 테스트
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
      // console.log(repeatCnt)
      // console.log(tacticPythonCode)
      // console.log(tacticJsonCode)
      props.returnOptionCode(optionCode);
      props.returnOptionName(optionName);
      props.returnStartDate(startDate);
      props.returnStartAsset(startAsset);
      props.returnTerm(term);
      props.returnRepeatCnt(repeatCnt);
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

  // 검색
  const [searchKeyword1, setSearchKeyword1] = useState("");

  const filteredItems = dummydata.filter((item) => item.optionName.includes(searchKeyword1));

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
          <IsSearchDiv>
            {/* 이름 */}
            <SearchTypeDiv>
              <SearchType onClick={setSearchTrue} $isChecked={isSearch}>
                검색
              </SearchType>
              <SearchType onClick={setSearchFasle} $isChecked={!isSearch}>
                관심종목
              </SearchType>
            </SearchTypeDiv>
            {/* 검색 */}
            <SearchInputDiv>
              <SearchImg src={SearchImgSrc} onClick={searchKeyword} alt="검색" />
              <SearchInput
                onChange={(e) => setSearchKeyword1(e.target.value)}
                type="text"
                value={searchKeyword1}
              />
            </SearchInputDiv>

            <SearchItemList>
              {isSearch ? (
                <>
                  검색결과
                  {filteredItems.map((item, index) => (
                    <OptionLikeListItem
                      key={index}
                      isLike={item.isLike}
                      item={item}
                      index={index}
                      list={filteredItems}
                      setOption={setOption}
                    ></OptionLikeListItem>
                  ))}
                </>
              ) : (
                <>
                  관심목록
                  {filteredItems.map((item, index) => (
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
          <ChoiceBox>
            <ChoiceTitleBox>
              <InputDetailTitle>초기자산</InputDetailTitle>
              <InputDetailTitle style={{ margin: "0px 0px 0px 30px" }}>시작시간</InputDetailTitle>
              <InputDetailTitle style={{ margin: "0px 0px 0px 50px" }}>주기</InputDetailTitle>
              <InputDetailTitle style={{ margin: "0px 0px 0px 20px" }}>반복횟수</InputDetailTitle>
            </ChoiceTitleBox>

            <InputDetailDiv>
              <MoneyBox>
                <InputDetailValue style={{ margin: "0px 0px 0px 0px" }}>
                  <Input
                    type="text"
                    onChange={handleStartAsset}
                    value={addComma(startAsset) || ""}
                  />
                  원
                </InputDetailValue>
              </MoneyBox>

              <ScheduleBox>
                <InputDetailValue style={{ margin: "0px 0px 0px 15px" }}>
                  <StyledDatePicker
                    dateFormat="yyyy-MM-dd"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </InputDetailValue>
              </ScheduleBox>

              <PeriodBox>
                <ToggleButtonGroup
                  style={{ maxHeight: "30px" }}
                  size="small"
                  {...controlTerm}
                  aria-label="Small sizes"
                >
                  <ToggleButton value="1m" key="min">
                    <div style={{ fontSize: "10px" }}>&nbsp;1분</div>
                  </ToggleButton>
                  <ToggleButton value="10m" key="10min">
                    <div style={{ fontSize: "10px" }}>10분</div>
                  </ToggleButton>
                  <ToggleButton value="1d" key="day">
                    <div style={{ fontSize: "10px" }}>&nbsp;1일</div>
                  </ToggleButton>
                  <ToggleButton value="1w" key="week">
                    <div style={{ fontSize: "10px" }}>&nbsp;1주</div>
                  </ToggleButton>
                </ToggleButtonGroup>
              </PeriodBox>

              <PeriodBox>
                <ToggleButtonGroup
                  style={{ maxHeight: "30px" }}
                  size="small"
                  {...controlRepeatCnt}
                  aria-label="Small sizes"
                >
                  <ToggleButton value={50} key="fifty">
                    50번
                  </ToggleButton>
                  <ToggleButton value={70} key="seventy">
                    70번
                  </ToggleButton>
                  <ToggleButton value={100} key="hundred">
                    100번
                  </ToggleButton>
                </ToggleButtonGroup>
              </PeriodBox>
            </InputDetailDiv>
          </ChoiceBox>

          <InputOptionDiv>
            <div style={{ margin: "8px 0px 0px 0px", fontSize: "12px" }}>종목을&nbsp;</div>
            <StocksInput type="text" value={optionName} readOnly />
            <div style={{ margin: "8px 5px 0px 5px", fontSize: "12px" }}>으로</div>
            <TestButton onClick={onClickTestButton}>테스트하기</TestButton>
          </InputOptionDiv>
        </BlockCodingDiv>
      </Wrapper>
    </BlockCodingContainer>
  );
};

export default BlockCoding;

const dummydata = [
  {
    optionCode: "A003540",
    optionName: "대신증권",
    isLike: true,
  },
  {
    optionCode: "122124",
    optionName: "카카오",
    isLike: false,
  },
  {
    optionCode: "124124",
    optionName: "삼성전자",
    isLike: true,
  },
  {
    optionCode: "122124",
    optionName: "카카오",
    isLike: false,
  },
  {
    optionCode: "124124",
    optionName: "삼성전자",
    isLike: true,
  },
  {
    optionCode: "122124",
    optionName: "카카오",
    isLike: false,
  },
  {
    optionCode: "124124",
    optionName: "삼성전자",
    isLike: true,
  },
  {
    optionCode: "122124",
    optionName: "카카오",
    isLike: false,
  },
  {
    optionCode: "124124",
    optionName: "삼성전자",
    isLike: true,
  },
  {
    optionCode: "122124",
    optionName: "카카오",
    isLike: false,
  },
];
