import React, { ChangeEvent, useEffect, useState } from "react";
import { ItemContainer } from "./OptionHistoryItem.style";

//     {item.optioncode}
//     {item.optionname}
//     {item.currate}
//     {item.cost}
const OptionHistoryItem = (props) => {
  //   const [optioncode, setOptioncode] = useState(props.optioncode);
  //   const [optionname, setOtionname] = useState(props.optionname);
  //   const [currate, setCurrate] = useState(props.currate);
  //   const [cost, setCost] = useState(props.cost);

  return (
    <ItemContainer>
      <div>{props.item.turn}/{props.round}</div>
      <span>
        거래타입 : {props.item.type} ,
        주식가격: {props.item.cost} ,
        거래수량 : {props.item.tradeCnt} ,
        체결금액 : {props.item.tradeCnt*props.item.cost}
        {
          props.item.type === "sell"
            ? <>실현손익 (팔때만) : {props.item.profitAndLoss}</>
            : <></>
        }
      </span>
    </ItemContainer>
  );
};

export default OptionHistoryItem;
