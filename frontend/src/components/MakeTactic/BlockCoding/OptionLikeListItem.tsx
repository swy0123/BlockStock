import React, { ChangeEvent, useEffect, useState } from "react";

//     {item.optioncode}
//     {item.optionname}
//     {item.currate}
//     {item.cost}
const OptionLikeListItem = (props) => {
//   const [optioncode, setOptioncode] = useState(props.optioncode);
//   const [optionname, setOtionname] = useState(props.optionname);
//   const [currate, setCurrate] = useState(props.currate);
//   const [cost, setCost] = useState(props.cost);

  return (
    <div style={{ backgroundColor: "yellow", font: "black" }}>
      <span>
        {props.item.optioncode}
        {props.item.optionname}
        {props.item.currate}
        {props.item.cost}
      </span>
    </div>
  );
};

export default OptionLikeListItem;
