import { styled } from "styled-components";

export const Container = styled.div`
  padding: 10px 15px;
  position: fixed;
  width: 100%;
  background-color: #f4f5fa;
  z-index: 100;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-between;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Loupe = styled.img`
  width: 15px;
  height: 15px;
`;
export const Img = styled.img`
  width: 37px;
  height: 37px;
  margin: 3px 60px 0px 5px;
  border-radius: 50%;
  border: 2px solid;
  border-color: #c1baee;
  cursor: pointer;
`;
export const AlertImg = styled.img`
  width: 30px;
  height: 30px;
`;
export const Logo = styled.img`
  cursor: pointer;
`;
export const InputBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
export const Input = styled.input`
  width: 300px;
  height: 55%;
  border: 0;
  padding-left: 20px;
  margin-right: 20px;
  border-radius: 10rem;
  background-color: white;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
`;

export const Text = styled.p`
  font-size: 15px;
  margin-right: 15px;
  cursor: pointer;
  :hover& {
    color: #9256fd;
    transition: 0.4s;
  }
`;

// #9256FD
export const Text1 = styled.p`
  font-size: 15px;
  margin-right: 15px;
  border-radius: 0.5rem;
  background-color: #9256fd;
  padding: 7px;
  color: white;
  opacity: 80%;
  cursor: pointer;
  :hover& {
    color: black;
    transition: 0.4s;
  }
`;
export const TextBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 35px;
`;

export const DropBoxWrapper = styled.div``;

export const DropBox = styled.div`
  /* margin-top: 85px; */
`;

export const ClickBox = styled.div`
  width: 140px;
  text-align: center;
  background-color: #f2eaff;
  border: 0;
  border-radius: 0.7rem;
  position: absolute;
  top: 70px;
  right: 60px;
  padding-bottom: 10px;
  /* padding-left: 5px; */
`;
// 483F55
export const Content = styled.p`
  font-size: 13px;
  color: #676767;
  cursor: pointer;
  /* margin-top: 10px; */
  margin-bottom: 10px;
`;

export const Hr = styled.hr`
  width: 70%;
  border: dashed 0.5px;
  margin-top: 10px;
  color: gray;
`;
export const Icon = styled.img`
  width: 17px;
  height: 17px;
  opacity: 60%;
  margin-right: 10px;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 10px 0px 10px;
  text-align: start;
  padding-left: 10px;
  &:hover {
    background-color: #fbf8ff;
    border-radius: 8px;
    color: black;
  }
`;

// E6DCF2 (연보라)
