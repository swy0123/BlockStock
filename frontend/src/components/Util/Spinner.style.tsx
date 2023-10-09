import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #edededb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const P = styled.p`
  color: gray;
`
export const Text = styled.p`
  color: #313030;
`

export const BackImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`

export const Box = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  top: 100px;
  left: 100px;
  cursor: pointer;
  &:hover{
    opacity: 90%;
  }
`