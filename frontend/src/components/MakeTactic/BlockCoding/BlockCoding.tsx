import React, { useRef, ChangeEvent, useEffect, useState, MouseEvent, KeyboardEvent } from "react";
import BlocklyComponent from "../../Blockly";
import "../../Blockly/blocks/customblocks";
import "../../Blockly/generators/generator";
import styled from "styled-components";
import SearchImgSrc from "../../../assets/img/MakeTactic/search.png";
import RightArrowSrc from "../.././../assets/img/MakeTactic/rightarrow.png";
import LeftArrowSrc from "../.././../assets/img/MakeTactic/leftarrow.png";
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
  BlocklyDiv,
  BottomDiv,
  SearchDivOpenButton,
  SearchDivOpenImg,
  TopDiv,
  TitleSpan,
  OptionDetail,
  OptionDetailItem,
} from "./BlockCoding.style";
import { ThemeProvider, createTheme } from "@mui/system";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import OptionLikeListItem from "./OptionLikeListItem";
import "react-datepicker/dist/react-datepicker.css";
import {
  tacticImport,
  tacticOptionDetail,
  tacticSearchOption,
  tacticTest,
  tacticTestProps,
} from "../../../api/Tactic/TacticTest";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import { CustomVariableBlockGroup } from "../../Blockly/BlocklyComponent";

export interface OptionItemProps {
  optionCode: string;
  optionName: string;
}

const BlockCoding = (props) => {
  const [isSearch, setSearch] = useState(true); //검색 타입
  const [switchLike, setSwitchLike] = useState(false); //좋아요 누르면 상태 변환

  const [isLeftOpen, setIsLeftOpen] = useState(false); //왼쪽 창 활성화 여부

  const [viewOptionCode, setViewOptionCode] = useState("");
  const [viewOptionName, setViewOptionName] = useState("");
  const [todayClose, setTodayClose] = useState(0);
  const [diffRate, setDiffRate] = useState(0);

  const ref = useRef(null);
  const [title, setTitle] = useState(""); //제목
  const [editable, setEditable] = useState(false); //제목 수정가능여부
  const [keyword, setKeyword] = useState(""); //검색 키워드
  const [optionLikeList, setOptionLikeList] = useState<OptionItemProps[]>(undefined); //종목검색결과
  const [optionCode, setOptionCode] = useState(""); //종목코드
  const [optionName, setOptionName] = useState(""); //종목이름
  const [startAsset, setStartAsset] = useState(10000000); //초기자본
  const [startDate, setStartDate] = useState(new Date()); //시작시간
  const [curDate, setCurDate] = useState(new Date()); //시작시간
  const [term, setTerm] = useState("1m"); //주기
  const [repeatCnt, setRepeatCnt] = useState(50); //반복횟수 (scope)
  const [tacticPythonCode, setTacticPythonCode] = useState(undefined); //"""code"""
  const [tacticJsonCode, setTacticJsonCode] = useState(undefined); //json 객체 (직렬화해서 저장)
  const [tacticImg, setTacticImg] = useState(undefined); //svg
  //코드 검사 제대로 하기
  const [codeCheck, setCodeCheck] = useState(true); // 코드 검사 후 결과창으로 이동

  useEffect(() => {
    const timeoutExecute = setTimeout(() => searchOption(), 300);
    return () => clearTimeout(timeoutExecute);
  }, [keyword]);

  useEffect(() => {
    console.log("되나??????????");
    searchOption();
    setSwitchLike(false);
  }, [switchLike, isSearch]);

  const returnSetSwitchLike = () => {
    console.log("되나!!!!!!!!!!!??????????");
    setSwitchLike(true);
  };
  //전략 조회일 경우
  useEffect(() => {
    if (props.tacticId != null) {
      importData(props.tacticId);
    }
  }, [props]);

  // export interface CustomVariableBlockGroup {
  //   defArray: any[];
  //   settingArray: any[];
  //   getArray: any[];
  // }

  const importData = async (id: number) => {
    if (id >= 0) {
      const res = await tacticImport(id);
      setOptionCode(res.optionCode);
      setOptionName(res.optionName);
      setTitle(res.title);
      setTacticPythonCode(res.tacticPythonCode);
      setTacticJsonCode(JSON.parse(res.tacticJsonCode));
      setTacticImg(res.tacticImg);
    } else {
      setTacticJsonCode(JSON.parse(props.tacticJsonCode));
    }
  };

  // 검색
  const searchOption = async () => {
    // if (keyword !== "") {
    console.log("optionLikeLi--------------------");
    console.log(keyword + " " + isSearch);
    const res = await tacticSearchOption(keyword, isSearch);
    console.log(res);
    setOptionLikeList(res);
    // }
    // else{
    //   setOptionLikeList([])
    // }
    //  else {
    //   const defaultRes = [
    //     {
    //       optionCode: "000810",
    //       optionName: "삼성화재",
    //       like: false,
    //     },
    //     {
    //       optionCode: "000815",
    //       optionName: "삼성화재우",
    //       like: false,
    //     },
    //     {
    //       optionCode: "001360",
    //       optionName: "삼성제약",
    //       like: false,
    //     },
    //     {
    //       optionCode: "005930",
    //       optionName: "삼성전자",
    //       like: false,
    //     },
    //     {
    //       optionCode: "005935",
    //       optionName: "삼성전자우",
    //       like: false,
    //     },
    //     {
    //       optionCode: "006400",
    //       optionName: "삼성SDI",
    //       like: false,
    //     },
    //   ];
    //   setOptionLikeList(defaultRes);
    // }
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

  const handleIsLeftOpen = () => {
    console.log(isLeftOpen);
    setIsLeftOpen(true);
  };
  const handleIsLeftClose = () => {
    console.log(isLeftOpen);
    setIsLeftOpen(false);
  };

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
    console.log("setSearchTrue");
    setSearch(true);
    setKeyword("");
    handleOptionLikeList(true);
  };

  const setSearchFasle = () => {
    console.log("setSearchFasle");
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


  const getOptionDetail = async (curOptionCode:string) => {
    const res = await tacticOptionDetail(curOptionCode);
    setViewOptionCode(res.optionCode)
    setViewOptionName(res.optionName)
    setTodayClose(res.todayClose)
    setDiffRate(res.diffRate)
  }

  const setViewOption = (curOptionCode: string) => {
    getOptionDetail(curOptionCode.replace(/\D/g, ""));
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
    if (optionCode != "") {
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
          
          setCodeCheck(false);
          
        }
      });
    } else {
      Swal.fire({
        title: "종목을 선택해주세요",
        text: "종목을 선택하시겠습니까?",
        // icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "종목 선택",
        cancelButtonText: "취소",
      }).then((result) => {
        if (result.isConfirmed) {
          handleIsLeftOpen();
        }
      });
    }
  };

  useEffect(() => {
    // setCurDate
    isPossibleDay();
  }, [startDate, term, repeatCnt]);
  useEffect(() => {
    console.log(curDate);
    if (curDate < new Date()) {
      if (dayjs(curDate).isSame(dayjs(new Date()), "day")) return;
      setStartDate(curDate);
    }
  }, [curDate]);
  const isPossibleDay = () => {
    // term 1m, 10m, 1d, 1w
    // repeatCnt 50 75 100
    //6시간 반 390
    //1440
    // date.subtract(1, "d").format();

    // var date = dayjs("2021-10-09");
    // date.isBefore("2021-10-09"); // false
    // date.isBefore("2021-10-20"); // true
    let selectedDate = dayjs(new Date());
    console.log(selectedDate);
    console.log(term);
    console.log(repeatCnt);
    if (term == "1m") {
      selectedDate = selectedDate.subtract(repeatCnt, "m");
    } else if (term == "10m") {
      selectedDate = selectedDate.subtract((repeatCnt * 10 * 1440) / 390 + 1, "m");
    } else if (term == "1d") {
      selectedDate = selectedDate.subtract((repeatCnt * 7) / 5 + 7, "d");
    } else if (term == "1w") {
      selectedDate = selectedDate.subtract(repeatCnt + 1, "w");
    }
    selectedDate = selectedDate.subtract(7, "d");
    const now = selectedDate.get("d");
    if (now === 0) selectedDate = selectedDate.subtract(2, "d");
    else if (now === 6) selectedDate = selectedDate.subtract(1, "d");

    console.log(selectedDate);
    if (!selectedDate.isSame(curDate, "day")) {
      setCurDate(selectedDate.toDate());
      return selectedDate.toDate();
    } else return curDate;
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

      Swal.fire(
        "실행중입니다.",
        "잠시만 기다려주세요",
        "success"
        // '확인',
      );
      props.toggleFlag();
    }
    // else{
    //   Swal.fire(
    //     "빈 전략입니다.",
    //     "코드를 입력해주세요",
    //     "success"
    //     // '확인',
    //   );
    // }
  }, [codeCheck]);

  return (
    <BlockCodingContainer>
      <TopDiv>
        <TitleDiv ref={ref}>
          {editable ? (
            <TitleInput
              type="text"
              value={title}
              placeholder="눌러서 입력"
              onChange={(e) => handleTitleField(e)}
              onKeyDown={handleKeyDown}
            />
          ) : title !== "" ? (
            <span>
              <Title onClick={editSetTrue}>{title}</Title>
            </span>
          ) : (
            <span>
              <Title onClick={editSetTrue}>제목 없는 전략</Title>
            </span>
          )}
        </TitleDiv>
        {editable ? <></> : <TitleSpan onClick={editSetTrue}>제목 변경</TitleSpan>}
      </TopDiv>
      <Wrapper>
        <LeftDiv $isLeftOpen={isLeftOpen}>
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
                  {optionLikeList !== undefined ? (
                    <>
                      {isSearch ? (
                        <>
                          {optionLikeList.map((item, index) => (
                            <OptionLikeListItem
                              key={index}
                              item={item}
                              setOption={setOption}
                              setViewOption={(res)=>setViewOption(res)}
                              returnSetSwitchLike={() => returnSetSwitchLike()}
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
                              setViewOption={(res)=>setViewOption(res)}
                              returnSetSwitchLike={() => returnSetSwitchLike()}
                            ></OptionLikeListItem>
                          ))}
                        </>
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                </SearchItemList>
              </>
            ) : (
              <OptionDetail>
                {/* 종목상세보기 */}
                {/*
                  "optionCode": "A049080",
                  "optionName": "기가레인",
                  "todayClose": 1370,
                  "diffRate": -1.481
                */}
                <OptionDetailItem>
                  <span>종목명 : {viewOptionName}</span>
                </OptionDetailItem>
                <OptionDetailItem>
                  <span>종목코드 : {viewOptionCode}</span>
                </OptionDetailItem>
                <OptionDetailItem>
                  <span>현재가 : {todayClose}</span>
                </OptionDetailItem>
                <OptionDetailItem>
                  <span>전일대비 : {diffRate}</span>
                </OptionDetailItem>
                <TestButton onClick={clearViewOption}> 돌아가기 </TestButton>
              </OptionDetail>
            )}
          </IsSearchDiv>
        </LeftDiv>

        <RightDiv $isLeftOpen={isLeftOpen}>
          <BlockCodingDiv>
            {/* 블록코딩 */}
            <BlocklyDiv>
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
                tacticId={props.tacticId}
                tacticJsonCode={tacticJsonCode}
              ></BlocklyComponent>
            </BlocklyDiv>

            <BottomDiv>
              {/* 세부 입력 */}
              <ChoiceBox>
                <ChoiceTitleBox>
                  <InputDetailTitle>초기자산</InputDetailTitle>
                  <InputDetailTitle>주기</InputDetailTitle>
                  <InputDetailTitle>반복횟수</InputDetailTitle>
                  <InputDetailTitle>시작시간</InputDetailTitle>
                  <InputDetailTitle>종목명</InputDetailTitle>
                </ChoiceTitleBox>

                <InputDetailDiv>
                  <MoneyBox>
                    <InputDetailValue>
                      <Input
                        type="text"
                        onChange={handleStartAsset}
                        value={addComma(startAsset) || ""}
                      />
                      원
                    </InputDetailValue>
                  </MoneyBox>

                  <PeriodBox>
                    <ToggleButtonGroup
                      style={{ maxHeight: "30px" }}
                      size="small"
                      {...controlTerm}
                      aria-label="Small sizes"
                    >
                      <ToggleButton value="1m" key="min">
                        <div>&nbsp;1분</div>
                      </ToggleButton>
                      <ToggleButton value="10m" key="10min">
                        <div>10분</div>
                      </ToggleButton>
                      <ToggleButton value="1d" key="day">
                        <div>&nbsp;1일</div>
                      </ToggleButton>
                      <ToggleButton value="1w" key="week">
                        <div>&nbsp;1주</div>
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

                  <ScheduleBox>
                    <InputDetailValue style={{ zIndex: "1000" }}>
                      <StyledDatePicker
                        // locale={"ko"}
                        dateFormat="yyyy-MM-dd"
                        selected={startDate}
                        minDate={dayjs(new Date())
                          .subtract(2, "y")
                          .add((100 * 5) / 7 + 7, "d")
                          .toDate()}
                        maxDate={curDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </InputDetailValue>
                  </ScheduleBox>
                  <MoneyBox>
                    {isLeftOpen ? (
                      <StocksInput
                        type="text"
                        value={optionName}
                        onClick={handleIsLeftOpen}
                        readOnly
                        placeholder=""
                      />
                    ) : (
                      <StocksInput
                        type="text"
                        value={optionName}
                        onClick={handleIsLeftOpen}
                        readOnly
                        placeholder="좌측에서 눌러서 선택"
                      />
                    )}
                  </MoneyBox>
                </InputDetailDiv>
              </ChoiceBox>
            </BottomDiv>
            <InputOptionDiv>
              <TestButton onClick={onClickTestButton}>테스트하기</TestButton>
            </InputOptionDiv>
          </BlockCodingDiv>
          {isLeftOpen ? (
            <SearchDivOpenButton onClick={handleIsLeftClose} $isLeftOpen={isLeftOpen}>
              <SearchDivOpenImg src={RightArrowSrc} />
            </SearchDivOpenButton>
          ) : (
            <SearchDivOpenButton onClick={handleIsLeftOpen} $isLeftOpen={isLeftOpen}>
              <SearchDivOpenImg src={LeftArrowSrc} />
            </SearchDivOpenButton>
          )}
        </RightDiv>
      </Wrapper>
    </BlockCodingContainer>
  );
};

export default BlockCoding;
