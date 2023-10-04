import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 7px;
  margin-left: 30px;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
`;

export const common = `
  height: 240px;
  flex-shrink: 0;
  border-radius: 13px;
  background: #fff;
  box-shadow: 4px 4px 2px -1px rgba(0, 0, 0, 0.05);

//   box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
`;
export const AwardsWrapper = styled.div`
  width: 450px;
  ${common}
`;
export const Wrapper0 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-left: 50px;
  text-align: center;
  height: 150px;
  overflow-y: scroll; /* 세로 스크롤 활성화 */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5px;
  align-items: center;
  text-align: center;
`;
export const Money = styled.p`
  font-size: 23px;
  font-weight: 700;
  margin-left: 10px;
  margin-top: 0px;
  margin-bottom: 10px;
`;
export const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
export const Text = styled.p`
  font-size: 15px;
  margin: 7px 0px 10px;
`;
export const Text1 = styled.p`
  font-size: 12px;
`;
export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 10px;
`;
export const AssetWrapper = styled.div`
  width: 400px;
  ${common}
`;

export const MailWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${common}
`;
export const Circle = styled.div`
  width: 100px;
  height: 100px;
  /* border: solid 3px #8cc5d2; */
  background-color: #a876f7;
  /* border-radius: 8px; */
  border-radius: 50%;
  margin: 40px 0px;
`;

export const MailImg = styled.img`
  width: 50px;
  height: 50px;
  margin: 25px 10px 0px 0px;
  /* opacity: 60%; */
`;

export const Mailbtn = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 8px;
  background: #f1f1f2;
  border: 0;
  cursor: pointer;
  &:hover {
    background: #e6e5e7;
    border: 0;
    transition: 0.5s;
  }
`;
export const MoneyIcon = styled.img`
  width: 40px;
`;

export const StoreBtn = styled.button`
  width: 130px;
  height: 35px;
  flex-shrink: 0;
  color: #3d3d3d;
  border: 0;
  border-radius: 6px;
  background: #e8dff9;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  margin: 0px 20px;
  &:hover {
    background: #9155fd;
    color: white;
    transition: 0.5s;
  }
`;

export const Noneimg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const Text0 = styled.p`
  font-size: 17px;
`;

export const Box1 = styled.div`
  margin-top: 30px;
  margin-left: 35px;
  display: flex;
  align-items: center;
`