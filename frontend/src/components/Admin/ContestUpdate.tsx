import styled from "styled-components";
import ContestCreate from "../Contest/ContestCreate/ContestCreate";

function ContestUpdate({onClose, selectedContest}){
  return(
    <>
      <Container>
        <Modal>
          <ContestCreate onClose={onClose} selectedContest={selectedContest}/>
        </Modal>
      </Container>
    </>
  )
}

export default ContestUpdate

const Container = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
export const Modal = styled.div`
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    z-index: 99;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
`;