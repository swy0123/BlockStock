import React, { ChangeEvent, useEffect, useState } from "react";
import { format } from "d3-format";
import {
  ItemContainer,
  OptionHistoryItemContent,
  ProfitAndLoss,
  TermContainer,
  TermImg,
} from "./OptionHistoryItem.style";
import TermImgSrc from "../../../assets/img/MakeTactic/term.png";
import {
  OptionHistoryItemPosCenter,
  OptionHistoryItemPosDown,
  OptionHistoryItemPosLeft,
  OptionHistoryItemPosRight,
  OptionHistoryItemPosUp,
} from "./TacticResult.style";
import { colors } from "@mui/material";
//     {item.optioncode}
//     {item.optionname}
//     {item.currate}
//     {item.cost}
const OptionHistoryItem = (props) => {
  //   const [optioncode, setOptioncode] = useState(props.optioncode);
  //   const [optionname, setOtionname] = useState(props.optionname);
  //   const [currate, setCurrate] = useState(props.currate);
  //   const [cost, setCost] = useState(props.cost);
  const numberDisplayFormat = format(",.0f");
  // const floatDisplayFormat = format(",.0f");
  return (
    <ItemContainer>
      <TermContainer>
        <TermImg src={TermImgSrc} />
        {props.item.turn}/{props.repeatCnt}
      </TermContainer>
      <OptionHistoryItemContent>
        {props.item.type == "buy" ? (
          <OptionHistoryItemPosLeft style={{ color: "#097DF3" }}>매수</OptionHistoryItemPosLeft>
        ) : (
          <OptionHistoryItemPosLeft style={{ color: "#EC4275" }}>매도</OptionHistoryItemPosLeft>
        )}
        <OptionHistoryItemPosCenter>
          <OptionHistoryItemPosUp>
            {numberDisplayFormat(props.item.cost)}({numberDisplayFormat(props.item.tradeCnt)}주)
          </OptionHistoryItemPosUp>
          <OptionHistoryItemPosDown>
            {numberDisplayFormat(props.item.cost * props.item.tradeCnt * 0.00015)}
          </OptionHistoryItemPosDown>
        </OptionHistoryItemPosCenter>
        <OptionHistoryItemPosRight>
          <OptionHistoryItemPosUp>{numberDisplayFormat(props.item.tradeCnt * props.item.cost)}</OptionHistoryItemPosUp>
          <OptionHistoryItemPosDown>
            {props.item.type === "sell" ? (
              props.item.profitAndLoss > 0 ? (
                <ProfitAndLoss style={{ color: "#EC4275" }}>+{numberDisplayFormat(props.item.profitAndLoss)}</ProfitAndLoss>
              ) : (
                <ProfitAndLoss style={{ color: "#097DF3" }}>{numberDisplayFormat(props.item.profitAndLoss)}</ProfitAndLoss>
              )
            ) : (
              <>&nbsp;</>
            )}
          </OptionHistoryItemPosDown>
        </OptionHistoryItemPosRight>
      </OptionHistoryItemContent>
    </ItemContainer>
  );
};

export default OptionHistoryItem;
