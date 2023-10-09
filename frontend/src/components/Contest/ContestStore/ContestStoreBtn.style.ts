import styled from "styled-components";

export const StoreBox = styled.div`
  min-width: 250px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
`;

export const CurrentContestBtn = styled.button`
  width: 75px;
  height: 35px;
  font-weight: 500;
  font-size: 16px;
  align-items: center;
  text-align: center;
  color: #7a7a7a;
  background-color: #f4f5fa;
  border: 1px solid #f4f5fa;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.5s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
  &:hover {
    border-radius: 6px;
    border: 1px solid #9155fd;
    background: #c47cff;
    color: #9155fd;
  }
`;

export const ExpectedContestBtn = styled.button`
  width: 75px;
  height: 35px;
  font-weight: 500;
  font-size: 16px;
  align-items: center;
  text-align: center;
  color: #7a7a7a;
  background-color: #f4f5fa;
  border: 1px solid #f4f5fa;
  cursor: pointer;
  border-radius: 6px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
  &:hover {
    border-radius: 6px;
    /* background-color: white;  */
    border: 1px solid #9155fd;
    color: #9155fd;
    transition: background-color 0.5s, border 0.9s, color 0.5s;
  }
`;

export const PastContestBtn = styled.button`
  width: 75px;
  height: 35px;
  font-weight: 500;
  font-size: 16px;
  align-items: center;
  text-align: center;
  color: #7a7a7a;
  background-color: #f4f5fa;
  border: 1px solid #f4f5fa;
  cursor: pointer;
  border-radius: 6px;
  &:hover {
    border-radius: 6px;
    background: #e8e8e8;
    border: 1px solid #9155fd;
    color: #9155fd;
    transition: background-color 0.5s, border 0.9s, color 0.5s;
  }
`;
