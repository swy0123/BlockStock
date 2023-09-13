
import React, { ChangeEvent, useState } from 'react';
import '../../components/Blockly/blocks/customblocks';
import '../../components/Blockly/generators/generator';
import CandleChart from '../../components/Chart/CandleChart';
import styled from 'styled-components';
import { BlockCodingDiv, HistoryChartDiv, HistorySummary, TacticContainer, TacticResult, TacticTitle, TradingHistoryDiv } from './MakeTactic.style';
import BlockCoding from '../../components/BlockCoding/BlockCoding';

const TestDiv = styled.div`
    background-color: rgba(255,0,0,0.3);
    padding: 1px;
`;

function MakeTactic() {
    const [flag, setFlag] = useState(true);
    const [isSearch, setSearch] = useState(true);

    const [title, setTitle] = useState("제목 없는 전략");
    const MAX_LENGTH = 30;

    const toggleFlag = () => {
        setFlag(!flag);
    }

    const handleTitleField = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > MAX_LENGTH) {
            e.target.value = e.target.value.slice(0, MAX_LENGTH);
        }
        setTitle(e.target.value);
    };

    const setSearchTrue = () => {
        setSearch(true);
    }

    const setSearchFasle = () => {
        setSearch(false);
    }


    return (

        <TacticContainer >
            <button onClick={toggleFlag} style={{ height: "30px", width: "60px" }} >toggle</button>
            {
                flag ?
                    <>
                        <BlockCoding></BlockCoding>
                    </> :
                    <>
                        <TacticTitle></TacticTitle>
                        <TacticResult>
                            {/* 매매내역 */}
                            <TradingHistoryDiv>

                            </TradingHistoryDiv>
                            <HistoryChartDiv>
                                {/* 차트 */}
                                <CandleChart></CandleChart>
                            </HistoryChartDiv>
                            <HistorySummary>
                                {/* 요약 */}
                                {/* 버튼 */}
                                <button></button>

                            </HistorySummary>
                        </TacticResult>
                    </>

            }


        </TacticContainer >

    )

}

export default MakeTactic