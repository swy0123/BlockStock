
import React, { useState } from 'react';
import BlocklyComponent from "../../components/Blockly"
import Header from "../../components/Common/Header"
import { Container } from "../../components/Common/Header.style"
import SideBar from "../../components/Common/SideBar"
import '../../components/Blockly/blocks/customblocks';
import '../../components/Blockly/generators/generator';
import CandleChart from '../../components/Chart/CandleChart';

function BlockCoding() {
    const [flag, setFlag] = useState(true);

    const toggleFlag = () => {
        setFlag(!flag);
    }
    return (

        <div>
            <button onClick={toggleFlag} style={{height:"40px", width:"100px"}} >toggle</button>
            {
                flag ? <>
                    <div>
                        {/* 이름 */}
                        {/* 검색 */}
                        

                    </div>
                    <div>
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
                    </div>
                </> :
                    <>
                        {/* 매매내역 */}
                        <div>

                        </div>
                        <div>
                            {/* 차트 */}
                            <CandleChart></CandleChart>
                        </div>
                        <div>
                            {/* 요약 */}
                            {/* 버튼 */}

                        </div>
                    </>

            }


        </div>

    )

}

export default BlockCoding