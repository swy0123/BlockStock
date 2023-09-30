import React from "react";
import ContestStoreBtn from "../../components/Contest/ContestStore/ContestStoreBtn";
import CompletedContestContent from "../../components/Contest/ContestStore/CompletedContest/CompletedContestContent";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
min-height: 200px;
`;

function CompletedContest(){
    return(
        <Container>
            <ContestStoreBtn name='완료'/>
            <CompletedContestContent/>
        </Container>
    )
}
export default CompletedContest