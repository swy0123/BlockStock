import React from "react";
import ContestStoreBtn from "../../components/Contest/ContestStore/ContestStoreBtn";
import CompletedContestContent from "../../components/Contest/ContestStore/CompletedContest/CompletedContestContent";
import styled from "styled-components";

const Container = styled.div`
margin: 30px 0px 0px 60px;
width: 1000px;
height: 800px;
`;

function CompletedContest(){
    return(
        <Container>
            <ContestStoreBtn name='/completedcontest'/>
            <CompletedContestContent/>
        </Container>
    )
}

export default CompletedContest