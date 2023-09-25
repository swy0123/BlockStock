import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const Wrapper = styled.div`
  margin-bottom: 25px;
  border: 0;
  border-radius: 13px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
  /* width: 80%; */
  height: 270px;
  flex-shrink: 0;
`;
export const ColorBox = styled.div`
  height: 55%;
  border-radius: 13px 13px 0px 0px;
  background: linear-gradient(90deg, #C1BAEE 0.99%, rgba(207, 193, 238, 0.83) 22.96%, rgba(224, 195, 238, 0.60) 43.91%, rgba(209, 231, 240, 0.64) 57.2%, rgba(206, 228, 248, 0.69) 72.52%, #CCE3F8 99.09%);
`;
export const FollowBox = styled.div`
  text-align: end;
  display: flex;
  justify-content: end;
`;
export const Follow = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 80px;
  margin-right: 25px;
  cursor: pointer;
`;
export const BtnWrapper = styled.div`
  display: flex;
`;

export const MenuBtn = styled.button<{ isSelected: boolean }>`
  margin-right: 15px;
  width: 130px;
  height: 35px;
  font-size: 13px;
  border-radius: 6px;
  border: 0;
  background: ${({ isSelected }) =>
      isSelected
        ? "#9155FD"
        : "#ffffff"};
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? "white" : "initial")};
  transition: 0.5s;
  &:hover {
    background: ${({ isSelected }) =>
      isSelected
        ? "#9155FD"
        : "#dfd1f8"};
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
    color: #535155;
    transition: 0.5s;
  }
`;
export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Box = styled.div`
  display: flex;
`;
export const Img = styled.img`
  width: 100px;
  height: 100px;
  margin-top: -50px;
  margin-left: 50px;
  margin-right: 30px;
`;
export const Text1 = styled.p`
  font-size: 15px;
  margin: 5px;
`;
export const Text = styled.p`
  font-size: 15px;
  margin-right: 100px;
`;
export const EditBtn = styled.button`
  margin-top: 10px;
  width: 148px;
  height: 35px;
  border-radius: 10px;
  color: white;
  background: #9155fd;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 0;
  margin-right: 20px;
`;
export const ContentContainer = styled.div`
  margin-top: 30px;
`;

export const Btn = styled.button`
  width: 80px;
  height: 30px;
  border: 0;
  border-radius: 10rem;
  font-size: 10px;
  margin: 10px 5px;
  background-color: white;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`

export const EditImg = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 30px;
  margin-left: -45px;
  margin-top: 30px;
`