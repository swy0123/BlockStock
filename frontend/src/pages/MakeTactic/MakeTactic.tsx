
import React, { ChangeEvent, useState } from 'react';
import '../../components/Blockly/blocks/customblocks';
import '../../components/Blockly/generators/generator';
import CandleChart from '../../components/Chart/CandleChart';
import styled from 'styled-components';
import { TacticContainer } from './MakeTactic.style';
import BlockCoding from '../../components/MakeTactic/BlockCoding/BlockCoding';
import TacticResult from '../../components/MakeTactic/TacticResult/TacticResult';

const TestDiv = styled.div`
    background-color: rgba(255,0,0,0.3);
    padding: 1px;
`;

function MakeTactic() {
    const [flag, setFlag] = useState(true);

    const [title, setTitle] = useState("");
    const [optionCode, setOptionCode] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [term, setTerm] = useState("");
    const [round, setRound] = useState("");
    const [tacticPythonCode, setTacticPythonCode] = useState(undefined);
    const [tacticJsonCode, setTacticJsonCode] = useState(undefined);

    const toggleFlag = () => {
        setFlag(!flag);
    }

    const returnTitle = (ret) => {
        setTitle(ret);
    }
    const returnOptionCode = (ret) => {
        setOptionCode(ret);
    }
    const returnStartDate = (ret) => {
        setStartDate(ret);
    }
    const returnTerm = (ret) => {
        setTerm(ret);
    }
    const returnRound = (ret) => {
        setRound(ret);
    }
    const returnTacticPythonCode = (ret) => {
        setTacticPythonCode(ret);
    }
    const returnTacticJsonCode = (ret) => {
        setTacticJsonCode(ret);
    }

    return (
        <TacticContainer >
            {
                flag ?
                    <>
                        <BlockCoding
                            toggleFlag={toggleFlag}
                            returnTitle={(ret) => { returnTitle(ret) }}
                            returnOptionCode={(ret) => { returnOptionCode(ret) }}
                            returnStartDate={(ret) => { returnStartDate(ret) }}
                            returnTerm={(ret) => { returnTerm(ret) }}
                            returnRound={(ret) => { returnRound(ret) }}
                            returnTacticPythonCode={(ret) => { returnTacticPythonCode(ret) }}
                            returnTacticJsonCode={(ret) => { returnTacticJsonCode(ret) }}
                        ></BlockCoding>
                    </> :
                    <>
                        <button onClick={toggleFlag} style={{ height: "30px", width: "60px" }} >toggle</button>
                        <TacticResult
                            title={title}
                            optionCode={optionCode}
                            startDate={startDate}
                            term={term}
                            round={round}
                            tacticPythonCode={tacticPythonCode}
                            tacticJsonCode={tacticJsonCode}
                        ></TacticResult>
                    </>
            }
        </TacticContainer >
    )
}

export default MakeTactic