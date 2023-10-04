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

  useEffect(() => {
    // const timeoutExecute = setTimeout(() =>{ isLike ? setLikeTrue() : setLikeFalse()}, 200);
    // return () => clearTimeout(timeoutExecute);
    if(isLike) setLikeTrue()
    else setLikeFalse()
    props.returnSetSwitchLike();
  }, [isLike])

  useEffect(() => {
    // const timeoutExecute = setTimeout(() =>{ isLike ? setLikeTrue() : setLikeFalse()}, 200);
    // return () => clearTimeout(timeoutExecute);
    setIsLike(props.item.like)
  }, [props.item.like])

  const handleIsLike = () => {
    setIsLike(!isLike);
  }

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
    console.log("setLikeTrue setLikeTrue");
  };
  const setLikeFalse = async () => {
    const res = await deleteLikedOption(props.item.optionCode);
    console.log("setLikeFalse setLikeFalse setLikeFalse");
  };

  return (
    <ItemContainer>
      {isLike !== null ? (
        isLike ? (
          <LikeImg src={FillStarImgSrc} onClick={handleIsLike} alt="좋아요" />
        ) : (
          <LikeImg src={EmpthyStarImgSrc} onClick={handleIsLike} alt="싫어요" />
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
