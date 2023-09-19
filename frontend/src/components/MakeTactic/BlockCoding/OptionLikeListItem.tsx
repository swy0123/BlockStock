import { ItemContainer, LikeImg } from "./OptionLikeListItem.style";
import FillStarImgSrc from "../../../assets/img/MakeTactic/fillstar.png";
import EmpthyStarImgSrc from "../../../assets/img/MakeTactic/emptystar.png";

//     {item.cost}
const OptionLikeListItem = (props) => {
  const clickEvent = () => {
    props.setOption(Number(props.item.optionCode), props.item.optionName);
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
      <div style={{ backgroundColor: "yellow", font: "black" }}>
        {props.item.isLike ? 
        <LikeImg src={FillStarImgSrc} onClick={setLikeTrue} alt="좋아요"/>: 
        <LikeImg src={EmpthyStarImgSrc} onClick={setLikeFalse} alt="싫어요"/>}
        <span>
          {props.item.optionCode}
          {props.item.optionName}
          {props.item.diffRate}
          {props.item.todayClose}
        </span>
        <button onClick={clickEvent}>select2</button>
      </div>
    </ItemContainer>
  );
};

export default OptionLikeListItem;
