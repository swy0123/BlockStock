import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 660px;
  background: #ffffff;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin: 10px 0px 0px 0px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
`;

export const Wrapper = styled.div`
  height: 88%;
  width: 100%;
  margin: 0px 0px 10px 0px;
  overflow: auto;

  /* 스크롤바 트랙 (배경) 스타일링 */
  &::-webkit-scrollbar {
    width: 0px; /* 스크롤바의 너비 설정 */
  }

  /* 스크롤바 색상 설정 */
  &::-webkit-scrollbar-thumb {
    background: #888; /* 스크롤바 색상 설정 */
    border-radius: 6px; /* 스크롤바 모양을 둥글게 만듭니다. */
  }

  /* 스크롤바 hover 시 색상 변경 */
  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* 스크롤바 hover 시 색상 변경 */
  }
`;

export const Title = styled.div`
  height: 30px;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
`;

export const Schedule = styled.div`
  width: 449px;
  height: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #b6abbb;
`;

export const ContestBox = styled.div`
  display: flex;
  /* width: 95%; */
`;
export const Box = styled.div`
  & :hover {
    background-color: #f5f5f5;
  }
`;
export const ContentBox = styled.div`
  margin: 0px 0px 0px 50px;
  font-size: 14px;
`;

export const Content = styled.div`
  font-weight: 400;
  display: flex;
  align-items: center;
  margin: 10px 0px 0px 0px;
`;

export const StartAsset = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #b6abbb;
  margin: 10px 0px 0px 0px;
`;

export const Stock = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #b6abbb;
  margin: 30px 0px 0px 0px;
`;

export const Term = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #b6abbb;
  margin: 10px 0px 20px 0px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  border-radius: 6px;
  background-color: #9155fd;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  border: none;
  margin: 50px 0px 20px 88%;
  transition: 0.5s;
  &:hover {
    background-color: #af65fe;
    transition: background-color 0.6s ease;
  }
`;

export const Notexist = styled.div`
  color: #ababab;
`;

export const Registed = styled.div`
  margin: 2px 0px 0px 10px;
  width: 60px;
  height: 20px;
  /* font-weight: 600; */
  font-size: 8px;
  background-color: #ababab;
  border-radius: 6px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #676767;
    border-radius: 6px;
    color: #ffffff;
  }
`;
export const NotRegisted = styled.div`
  margin: 2px 0px 0px 10px;
  width: 60px;
  height: 20px;
  font-weight: 600;
  font-size: 8px;
  background-color: #676767;
  border-radius: 6px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #676767;
    border-radius: 6px;
    color: #ffffff;
  }
`;

export const Icon = styled.div`
  position: relative;
  left: 9%;
  top: 12px;
  height: 30px;
`;
