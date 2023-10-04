import React, { useState, useEffect } from "react";
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
import { addLikedOption, deleteLikedOption } from "../../../api/Tactic/TacticTest";

//     {item.cost}
const OptionLikeListItem = (props) => {
  const [isLike, setIsLike] = useState<boolean>();
  useEffect(()=>{
    setIsLike(props.item.like)
  }, [props.item.like])

  const handleLikeAdd = () => {
    setLikeTrue();
    setIsLike(true);
    props.item.returnSetSwitchLike
  };
  const handleLikeDelete = () => {
    setLikeFalse();
    setIsLike(false);
    props.item.returnSetSwitchLike
  };

  const clickViewDetail = () => {
    console.log(props);
    props.setViewOption(props.item.optionCode);
  };
  const clickEvent = () => {
    console.log(props);
    props.setOption(props.item.optionCode, props.item.optionName);
  };

  //종목 좋아요 버튼, axios 통신
  const setLikeTrue = async () => {
    // const req = (keyword);
    const req = {
      optionCode: props.item.optionCode,
    };
    const res = await addLikedOption(req);
    console.log(props.item.optionName + " : setLikeTrue setLikeTrue");
  };
  const setLikeFalse = async () => {
    const res = await deleteLikedOption(props.item.optionCode);
    console.log(props.item.optionName + " : setLikeFalse setLikeFalse setLikeFalse");
  };

  return (
    <ItemContainer>
      {isLike !== null ? (
        isLike ? (
          <LikeImg src={FillStarImgSrc} onClick={handleLikeDelete} alt="좋아요" />
        ) : (
          <LikeImg src={EmpthyStarImgSrc} onClick={handleLikeAdd} alt="싫어요" />
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
