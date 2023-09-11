import styled from "styled-components";

const Container = styled.div`
    
`;
const SideWrapper = styled.div`
  padding-top: 5px;
  width  :28vh;
  height: 93vh;
  /* background-color: #efebf0; */
`;
const ClickBox1 = styled.div`
    display: flex;
    align-items: center;
`
const ClickBox = styled.div`
    display: flex;
    align-items: center;
`
const Img = styled.img`
    width: 15px;
    height: 15px;
    margin: 0px 20px;
`;
const Text = styled.p`
  font-size  : 17px;
  color: #504b53;
`;

function SideBar(){
    return(
        <Container>
            <SideWrapper>
                <ClickBox1>
                    <Img src="./icon/home.png"/>
                    <Text>Home</Text>
                </ClickBox1>
                <ClickBox>
                    <Img src="./icon/keep.png"/>
                </ClickBox>
            </SideWrapper>
        </Container>
    );
}

export default SideBar;