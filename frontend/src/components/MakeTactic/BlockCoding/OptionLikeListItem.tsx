import React, { useState } from "react";
import {
  ItemContainer,
  LikeImg,
  Choice,
  OptionName,
  ItemTitle,
  ItemDetail,
  OptionCode,
  ItemSelect,
} from "./OptionLikeListItem.style";
import FillStarImgSrc from "../../../assets/img/MakeTactic/fillstar.png";
import EmpthyStarImgSrc from "../../../assets/img/MakeTactic/emptystar.png";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

//     {item.cost}
const OptionLikeListItem = (props) => {
  const clickViewDetail = () => {
    console.log(props);
    props.setViewOption(props.item.optionCode);
  };
  const clickEvent = () => {
    console.log(props);
    props.setOption(props.item.optionCode, props.item.optionName);
  };

  //종목 좋아요 버튼, axios 통신
  const setLikeTrue = () => {
    // const req = (keyword);
    console.log("FillStarImgSrc");
  };
  const setLikeFalse = () => {
    // const req = (keyword);
    console.log("EmpthyStarImgSrc");
  };

  return (
    <ItemContainer>
      {props.item.isLike !== undefined ? (
        props.item.isLike ? (
          <LikeImg src={FillStarImgSrc} onClick={setLikeTrue} alt="좋아요" />
        ) : (
          <LikeImg src={EmpthyStarImgSrc} onClick={setLikeFalse} alt="싫어요" />
        )
      ) : (
        <></>
      )}
      <ItemTitle>
        <OptionName>{props.item.optionName}</OptionName>
        <OptionCode>{props.item.optionCode}</OptionCode>
      </ItemTitle>

      <ItemDetail onClick={clickViewDetail}>자세히 보기</ItemDetail>

      <ItemSelect>
        <Choice onClick={clickEvent}>선택</Choice>
      </ItemSelect>
    </ItemContainer>
  );
};

export default OptionLikeListItem;
