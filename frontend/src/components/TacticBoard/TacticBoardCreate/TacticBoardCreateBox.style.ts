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

export const Wrapper = styled.div`
display: flex;
`;
export const ImgContainer = styled.div`
width: 50%;
height: 404px;
background-color: #F4F6F8;
display: flex; /* Set display to flex */
  justify-content: center; /* Center horizontally */
  align-items: center; 
`;

export const ContentInput = styled.textarea`
width: 50%;
height: 400px;
resize: none;
font-size: 17px;
border: none;
outline: none;
padding: 20px;
`;

export const ImgBox = styled.div`
  display: flex; /* Set display to flex */
  justify-content: center; /* Center horizontally */
  align-items: center; 
  width: 90%;
  height: 90%;
  background-color: white;
`;
export const Img = styled.img`
`;

export const FileBtn = styled.label`
  display: inline-block;
  padding: 5px 10px;
  min-width: 50px;
  height: 25px;
  font-size: 13px;
  background-color: #9155FD;
  color: #fff;
  cursor: pointer;
  border: none;
  margin: 8px 0px 0px 20px;
  border-radius: 8px;
  display: flex; /* Set display to flex */
  justify-content: center; /* Center horizontally */
  align-items: center; 
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

export const Line = styled.div`
width: 100%;
border: 1px solid #EAEAEA;
margin: 0px;
`;