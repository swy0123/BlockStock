import styled from "styled-components";
import { colors } from "@mui/material";

export const BlocklyWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
export const BlocklyDiv = styled.div`
  /* width: 96%;
  height: 96%; */
  position: absolute;
  /* background-color: rgb(190, 92, 255); */
  /* top:50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  /* border: 1px solid transparent;
  border-radius: 6px; */
`;
export const BlocklyArea = styled.div`
  height: 100%;
  width: 100%;
  /* margin-bottom: 5%; */
`;
export const CollapseToolBoxButton = styled.div<{ $toolboxCollapsed: boolean }>`
  position: absolute;
  bottom: 0%;
  margin-bottom: 0.5px;
  z-index: 100;
  width: 128px;
  font-size: 14px;
  height: 22px;
  text-align: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  background-color: ${(props) =>
    props.$toolboxCollapsed ? "rgba(255,255,255, 0.9)" : "rgba(195,195,196, 0.7)"};
  color: ${(props) => (props.$toolboxCollapsed ? "#c3c3c4" : "white")};
  cursor: pointer;
`;

// export const BlocklyTreeLabel = styled.div`
//   color: white;
// `;
// export const BlocklyToolboxContents = styled.div`
//   padding: 0.5em;
// `;
// export const BlocklyTreeRow = styled.div`
//   padding: 3px;
//   margin-bottom: 0.5em;
//   border-radius: 4px;
// `;
