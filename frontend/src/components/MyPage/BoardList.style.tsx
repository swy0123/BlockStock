import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 6px;
  display: flex;
  padding-top: 50px;
  box-shadow: 0.2px 2px 2px 0px rgba(0, 0, 0, 0.08);
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FreeBoardBox = styled.div`
  width: 80%;
  height: 350px;
  overflow-y: scroll;
  min-height: 200px;
  border: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  border-radius: 8px 8px 0px 0px;
  background: #f2f3f5;
  margin-bottom: 10px;
`;
export const Box1 = styled.div`
  display: flex;
`;

export const list = `
display: flex;
justify-content: center;
align-items: center;
  margin: 0px 0px 0px 0px;
  height: 50px;
  font-size: 13px
`;
export const ItemNumber = styled.div`
  width: 180px;
  ${list}
`;
export const ItemTitle = styled.div`
  width: 350px;
  ${list}
`;
export const ItemWriter = styled.div`
  width: 180px;
  display: flex;
  /* justify-content:  */
  align-items: center;
  margin: 0px 0px 0px 20px;
  height: 50px;
  font-size: 13px;
`;
export const ItemTime = styled.div`
  width: 230px;
  ${list}
`;
export const ItemtHit = styled.div`
  width: 130px;
  ${list}
`;
export const Hr = styled.hr`
  border: solid 1px lightgray;
  margin: 1px;
  opacity: 50%;
`;
export const Line = styled.hr`
  width: 78%;
  height: 0px;
  border: solid 0.5px;
  border-color: #c7c7c7;
`;
export const Title = styled.span`
  font-size: 23px;
  padding: 0px 10px;
  background-color: white;
  margin-top: -20px;
  margin-bottom: 20px;
`;
export const Div = styled.div`
  cursor: pointer;
`;

export const Box2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  /* margin: 0; */
`;
