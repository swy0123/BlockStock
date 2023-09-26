import React, { useState } from 'react';
import {
  ItemContainer,
  LikeImg,
  Choice,
  OptionName
} from "./OptionLikeListItem.style";
import FillStarImgSrc from "../../../assets/img/MakeTactic/fillstar.png";
import EmpthyStarImgSrc from "../../../assets/img/MakeTactic/emptystar.png";

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

//     {item.cost}
const OptionLikeListItem = (props) => {


  const clickViewDetail = () => {
    console.log(props)
    props.setViewOption(props.item.optionCode)
  };
  const clickEvent = () => {
    console.log(props)
    props.setOption(props.item.optionCode, props.item.optionName);
  };

  //종목 좋아요 버튼, axios 통신
  const setLikeTrue = () => {
    // const req = (keyword);
    console.log("FillStarImgSrc")
  };
  const setLikeFalse = () => {
    // const req = (keyword);
    console.log("EmpthyStarImgSrc")
  };

  return (
    <ItemContainer>
      {
        props.item.isLike !== undefined ? props.item.isLike ?
          <LikeImg src={FillStarImgSrc} onClick={setLikeTrue} alt="좋아요" /> :
          <LikeImg src={EmpthyStarImgSrc} onClick={setLikeFalse} alt="싫어요" /> :
          <></>
      }
      <div style={{ width: '65px', margin: '0px 0px 0px 10px' }}>
        <OptionName>
          {props.item.optionName}
        </OptionName>
        <div style={{ color: '#9A9A9A', fontSize: '1px' }}>
          {props.item.optionCode}
        </div>
      </div>

      <div style={{ width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3px', margin: '0px 10px 0px 0px' }}>
        <div>
          <Choice
            onClick={clickViewDetail}
          // style={isLiked ? { backgroundColor: '#9256FD', color: 'white' } : {}}
          >
            보기
          </Choice>
        </div>
        {/* <ArrowDropUpIcon /> */}
      </div>


      <div style={{ width: '40px', fontSize: '3px', fontWeight: '600', margin: '7px 10px 0px 0px', textAlign: 'right' }}>
        {/* {formattedNumber} */}
      </div>
      <Choice
        onClick={clickEvent}
      // style={isLiked ? { backgroundColor: '#9256FD', color: 'white' } : {}}
      >
        선택
      </Choice>
    </ItemContainer>
  );
};

export default OptionLikeListItem;
