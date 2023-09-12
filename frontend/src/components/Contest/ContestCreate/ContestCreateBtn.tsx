import React from "react";
import styled from "styled-components";

function ContestCreateBtn(){

    const Btn = styled.button`
        width: 120px;
        height: 40px;
        background: linear-gradient(0deg, #9155FD, #9155FD), #9155FD;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        font-weight: 540;
        font-size: 20px;
        text-align: center;
        color: #FFFFFF;
        border: none;

        &:hover {
        background: linear-gradient(0deg, #FFA500, #FFA500), #FFA500;
        cursor: pointer;
    }
    `;
    
    return(
        <Btn>
            대회생성
        </Btn>
    )
}

export default ContestCreateBtn



