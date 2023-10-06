import React, { ChangeEvent, useEffect, useState } from "react";
import { format } from "d3-format";
import {
  ItemContainer,
  OptionHistoryItemContent,
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
} from "./ContestTacticResult.style";
const OptionHistoryItem = (props) => {
  const numberDisplayFormat = format(",.0f");
  const floatDisplayFormat = format(",.4f");
  return (
    <ItemContainer>
      <TermContainer>
        <TermImg src={TermImgSrc} />
        {(props.item.date).replace(/^(\d{4})(\d{2})(\d{2})$/, '$1/$2/$3')} {(props.item.time).replace(/^(\d{2})(\d{2})(\d{2})$/, '$1:$2:$3')}
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
                <span style={{ color: "#EC4275" }}>+{numberDisplayFormat(props.item.profitAndLoss)}</span>
              ) : (
                <span style={{ color: "#097DF3" }}>{numberDisplayFormat(props.item.profitAndLoss)}</span>
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
