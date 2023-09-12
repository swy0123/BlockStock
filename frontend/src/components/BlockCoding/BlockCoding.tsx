
import React, { ChangeEvent, useEffect, useState } from 'react';
import BlocklyComponent from "../../components/Blockly"
import '../../components/Blockly/blocks/customblocks';
import '../../components/Blockly/generators/generator';
import styled from 'styled-components';
import { BlockCodingDiv, Input, InputDetailDiv, IsSearchDiv, LeftDiv } from './BlockCoding.style';
import OptionLikeListItem from './OptionLikeListItem';

const TestDiv = styled.div`
    background-color: rgba(255,0,0,0.3);
    padding: 1px;
`;

function BlockCoding() {
    const [isSearch, setSearch] = useState(true);

    const [title, setTitle] = useState("제목 없는 전략");
    const [optionLikeList, setOptionLikeList] = useState<any>([]);
    const MAX_LENGTH = 30;


    const handleTitleField = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > MAX_LENGTH) {
            e.target.value = e.target.value.slice(0, MAX_LENGTH);
        }
        setTitle(e.target.value);
    };

    const setSearchTrue = () => {
        setSearch(true);
        handleOptionLikeList();
    }

    const setSearchFasle = () => {
        setSearch(false);
        handleOptionLikeList();
    }

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
    ]

    const handleOptionLikeList = () => {
        // const res = await getOptionLikeList();
        setOptionLikeList(dummydata);
        console.log(dummydata)
        console.log(optionLikeList)
    }

    useEffect(() => {
        console.log(optionLikeList)
    }, [optionLikeList])


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
                    <div onClick={setSearchTrue} style={{ backgroundColor: "rgba(45, 83, 198, 0.3)" }}>검색</div>
                    <div onClick={setSearchFasle} style={{ backgroundColor: "rgba(189, 129, 39, 0.3)" }}>관심종목</div>
                    {
                        isSearch ?
                            <div>
                                zzz
                                {optionLikdummydataeList.map((item, index) => {
                                    <OptionLikeListItem props={item} key={index}></OptionLikeListItem>
                                })}
                                zzz
                            </div> :
                            <>
                                zzz22
                                {optionLikeList.map((item, index) => {
                                    <OptionLikeListItem props={item} key={index}></OptionLikeListItem>
                                })}
                            </>
                    }



                    {/* 검색 */}
                    {/* 미니 차트 */}
                    {/* <MiniChart></MiniChart> */}

                </IsSearchDiv>
            </LeftDiv>

            <BlockCodingDiv>
                {/* 블록코딩 */}
                <BlocklyComponent readOnly={false}
                    trashcan={true} media={'media/'}
                    move={{
                        scrollbars: true,
                        drag: true,
                        wheel: true
                    }}
                >
                </BlocklyComponent>
                {/* 세부 입력 */}
                <InputDetailDiv>
                </InputDetailDiv>
            </BlockCodingDiv>
        </div>


    )

}

export default BlockCoding