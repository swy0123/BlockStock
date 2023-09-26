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
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
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
  background-color: #9155fd;
  border: 0;
  border-radius: 50%;
  margin: 40px 0px;
`;

export const MailImg = styled.img`
  width: 50px;
  height: 50px;
  margin: 25px 10px 0px 0px;
`;

export const Mailbtn = styled.button`
  width: 130px;
  height: 35px;
  border-radius: 6px;
  background: linear-gradient(0deg, #f2eaff 0%, #f2eaff 100%), #d9d9d9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 0;
`;
export const MoneyIcon = styled.img`
  width: 40px;
`;

export const StoreBtn = styled.button`
  width: 130px;
  height: 35px;
  flex-shrink: 0;
  color: white;
  border: 0;
  border-radius: 6px;
  background: linear-gradient(0deg, #9155fd 0%, #9155fd 100%), #d9d9d9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 0px 20px;
`;
