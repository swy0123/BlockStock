import styled from "styled-components";

export const Container = styled.div`
width: 1000px;
min-height: 602px;
background: #FFFFFF;
box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
border-radius: 8px;
`;

export const TitleInput = styled.textarea`
  width: 970px;
  height: 50px;
  resize: none;
  font-size: 25px;
  border-radius: 8px;
  padding: 30px 0px 0px 30px;
  border: none;
  outline: none;
`;


export const ContentInput = styled.textarea`
width: 970px;
height: 400px;
resize: none;
font-size: 17px;
padding: 10px 0px 0px 30px;
  border: none;
  outline: none;
`;

export const FileInput = styled.input`
display: none; 
`;
export const FileBtn = styled.label`
  display: inline-block;
  padding: 5px 10px;
  min-width: 50px;
  height: 25px;
  font-size: 13px;
  background-color: #7B7B7B;
  color: #fff;
  cursor: pointer;
  border: none;
  margin: 8px 0px 0px 20px;
  border-radius: 8px;
`;

export const Wrapper = styled.div`
max-width: 1000px;
max-height: 600px;
display: flex;
`;

export const FileList = styled.div`
display: flex;
max-width: 900px;
max-height: 60px;
margin: 15px 0px 0px 30px;
overflow-y: auto;
`;

export const ButtonBox = styled.div`
display: flex;
margin: 20px 0px 0px 800px;
`;
export const Button1 = styled.div`
  min-width: 80px;
  height: 30px;
  background-color: #9155FD;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
  display: flex; /* Set display to flex */
  justify-content: center; /* Center horizontally */
  align-items: center; 
  border-radius: 5px;
  margin: 0px 30px 0px 0px;
  &:hover{
    background-color: #7A3CBF;
  }
`;

export const Button2 = styled.div`
  min-width: 80px;
  height: 30px;
  background-color: #9155FD;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  border-radius: 5px;
  &:hover{
    background-color: #7A3CBF;
  }
`;
