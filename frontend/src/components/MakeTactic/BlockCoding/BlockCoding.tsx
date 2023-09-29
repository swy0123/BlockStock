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
  RightDiv,
} from "./BlockCoding.style";
import { ThemeProvider, createTheme } from "@mui/system";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import OptionLikeListItem from "./OptionLikeListItem";
import "react-datepicker/dist/react-datepicker.css";
import {
  tacticImport,
  tacticSearchOption,
  tacticTest,
  tacticTestProps,
} from "../../../api/Tactic/TacticTest";
import Swal from "sweetalert2";

export interface OptionItemProps {
  optionCode: string;
  optionName: string;
}

const BlockCoding = (props) => {
  const [isSearch, setSearch] = useState(true); //검색 타입
  const [viewOptionCode, setViewOptionCode] = useState("");

  const ref = useRef(null);
  const [title, setTitle] = useState(""); //제목
  const [editable, setEditable] = useState(false); //제목 수정가능여부
  const [keyword, setKeyword] = useState(""); //검색 키워드
  const [optionLikeList, setOptionLikeList] = useState<OptionItemProps[]>([]); //종목검색결과
  const [optionCode, setOptionCode] = useState(""); //종목코드
  const [optionName, setOptionName] = useState(""); //종목이름
  const [startAsset, setStartAsset] = useState(10000000); //초기자본
  const [startDate, setStartDate] = useState(new Date()); //시작시간
  const [term, setTerm] = useState("1m"); //주기
  const [repeatCnt, setRepeatCnt] = useState(50); //반복횟수 (scope)
  const [tacticPythonCode, setTacticPythonCode] = useState(undefined); //"""code"""
  const [tacticJsonCode, setTacticJsonCode] = useState(undefined); //json 객체 (직렬화해서 저장)
  const [tacticImg, setTacticImg] = useState(undefined); //svg
  //코드 검사 제대로 하기
  const [codeCheck, setCodeCheck] = useState(true); // 코드 검사 후 결과창으로 이동

  useEffect(() => {
    const timeoutExecute = setTimeout(() => searchOption(), 500);
    return () => clearTimeout(timeoutExecute);
  }, [keyword]);

  //전략 조회일 경우
  useEffect(() => {
    if (props.tacticId != null) {
      importData(props.tacticId);
    }
  }, [props]);

  const importData = async (id: number) => {
    const res = await tacticImport(id);
    setOptionCode(res.optionCode);
    setOptionName(res.optionName);
    setTitle(res.title);
    setTacticPythonCode(res.tacticPythonCode);
    setTacticJsonCode(JSON.parse(res.tacticJsonCode));
    setTacticImg(res.tacticImg);
  };

  // 검색
  const searchOption = async () => {
    console.log(keyword);
    console.log(isSearch);
    const res = await tacticSearchOption(keyword, isSearch);
    console.log(res);
    setOptionLikeList(res);
  };

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
    searchOption();
    console.log("검색 : " + keyword);
  };

  //종목 검색 결과
  const handleOptionLikeList = async (type: boolean) => {
    // const res = await getOptionLikeList();
    // console.log(dummydata);
    // console.log(optionLikeList);
  };

  const setOption = (curOptionCode: string, curOptionName: string) => {
    setOptionCode(curOptionCode.replace(/\D/g, ""));
    setOptionName(curOptionName);
    console.log("setOption" + curOptionCode + curOptionName);
  };

  const setViewOption = (curOptionCode: string) => {
    setViewOptionCode(curOptionCode.replace(/\D/g, ""));
    console.log("setOption" + curOptionCode);
  };
  const clearViewOption = () => {
    setViewOptionCode("");
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

    Swal.fire({
      title: "테스트 실행",
      text: "테스트를 실행하시겠습니까?",
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "테스트 실행",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "실행중입니다.",
          "잠시만 기다려주세요",
          "success"
          // '확인',
        );
        setCodeCheck(false);
      }
    });

    // console.log(tacticTestData);
  };

  // 테스트 버튼 누르면 상위 컴포넌트로 값 전달 후 컴포넌트 교체
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

      props.toggleFlag();
    }
  }, [codeCheck]);

  return (
    <BlockCodingContainer>
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
      <Wrapper>
        <LeftDiv>
          <IsSearchDiv>
            {viewOptionCode == "" ? (
              <>
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
                    onChange={(e) => handleKeywordField(e)}
                    type="text"
                    value={keyword}
                  />
                </SearchInputDiv>

                <SearchItemList>
                  {isSearch ? (
                    <>
                      {optionLikeList.map((item, index) => (
                        <OptionLikeListItem
                          key={index}
                          item={item}
                          setOption={setOption}
                          setViewOption={setViewOption}
                        ></OptionLikeListItem>
                      ))}
                    </>
                  ) : (
                    <>
                      {optionLikeList.map((item, index) => (
                        <OptionLikeListItem
                          key={index}
                          item={item}
                          setOption={setOption}
                          setViewOption={setViewOption}
                        ></OptionLikeListItem>
                      ))}
                    </>
                  )}
                </SearchItemList>
              </>
            ) : (
              <>
                {/* 종목상세보기 */}
                <button onClick={clearViewOption}> 돌아가기 </button>
              </>
            )}
          </IsSearchDiv>
        </LeftDiv>

        <RightDiv>
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
        </RightDiv>
      </Wrapper>
    </BlockCodingContainer>
  );
};

export default BlockCoding;
