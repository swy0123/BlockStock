import styled from "styled-components";

export const Container = styled.div`
width: 100%;
min-height: 600px;
background: #FFFFFF;
box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.08);
border-radius: 6px;
margin-left: -40px;
`;

export const TitleInput = styled.textarea`
  width: 90%;
  height: 50px;
  resize: none;
  font-size: 25px;
  border-radius: 8px;
  padding: 30px 0px 0px 35px;
  border: none;
  outline: none;
`;

export const ContentInput = styled.textarea`
width: 90%;
height: 400px;
resize: none;
font-size: 17px;
padding: 20px 0px 0px 35px;
  border: none;
  outline: none;
`;

export const FileInput = styled.input`
display: none; 
`;
export const FileBtn = styled.label`
  display: inline-block;
  padding: 5px 10px;
  min-width: 60px;
  height: 25px;
  font-size: 13px;
  background-color: #e6e5e7;
  color: black;
  cursor: pointer;
  border: none;
  margin: 8px 0px 0px 20px;
  border-radius: 6px;
  display: flex; /* Set display to flex */
  justify-content: center; /* Center horizontally */
  align-items: center; 
`;

export const Wrapper = styled.div`
max-width: 1000px;
max-height: 600px;
display: flex;
`;

export const FileList = styled.div`
display: flex;
justify-content: center;
align-items: center;
max-width: 900px;
max-height: 60px;
margin: 0px 10px 0px 30px;
overflow-y: auto;
`;

export const ButtonBox = styled.div`
display: flex;
justify-content: end;
margin-right: 40px;
margin-top: 20px;
/* margin: 20px 0px 0px 800px; */
`;
export const Button1 = styled.button`
    border: 0px;
    width: 100px;
    height: 35px;
    border-radius: 8px;
    background: #ffffff;
    border: solid 1.85px;
    color: gray;
    cursor: pointer;
    &:hover{
        background-color: #faf8fe;
        transition: 0.5s;
        color: #9155FD;
    }
`

export const Button2 = styled.button`
  width: 100px;
  height: 35px;
  font-size: 13px;
  border-radius: 6px;
  border: 0;
  background: #9155FD;
  color: white;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  margin-left: 20px;
  cursor: pointer;
  transition: 0.5s; // 자연스럽게 호버 효과 주려고 넣음(필수)
  &:hover {
    background: #dfd1f8;
    color: #535155;
    transition: 0.5s;
  }
`;
