import React, { ChangeEvent, useEffect, useState, MouseEvent } from "react";
import BlocklyComponent from "../../components/Blockly";
import "../../components/Blockly/blocks/customblocks";
import "../../components/Blockly/generators/generator";
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
} from "./BlockCoding.style";
import { ThemeProvider, createTheme } from '@mui/system';
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
            dark: '#009688',
        },
    },
});


function BlockCoding() {
    const [isSearch, setSearch] = useState(true);

    const [title, setTitle] = useState("제목 없는 전략");
    const [keyword, setKeyword] = useState("");
    const [optionLikeList, setOptionLikeList] = useState([]);
    const [startAsset, setStartAsset] = useState(10000000);
    const [startDate, setStartDate] = useState(new Date());
    const [term, setTerm] = useState("min");
    const [round, setRound] = useState("50");
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
        console.log(dummydata);
        console.log(optionLikeList);
    };

    useEffect(() => {
        setOptionLikeList(dummydata);
    }, []);

    useEffect(() => {
        // const today = startDate;
        // const year = today.getFullYear();
        // const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
        // const day = today.getDate().toString().padStart(2, '0');

        // const formattedDate = `${year}${month}${day}`;
        console.log(startDate.toLocaleDateString())
    }, [startDate]);

    return (
        <BlockCodingContainer>
            <LeftDiv>
                <Input
                    type="text"
                    value={title}
                    onChange={handleTitleField}
                    placeholder="제목을 입력해주세요"
                />
                <IsSearchDiv>
                    {/* 이름 */}
                    <SearchType onClick={setSearchTrue}  $isChecked={isSearch}>
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
                        종목을<button>카카오</button>으로<button>테스트하기</button>
                    </span>
                </InputOptionDiv>
            </BlockCodingDiv>
        </BlockCodingContainer >
    );
}

export default BlockCoding;
