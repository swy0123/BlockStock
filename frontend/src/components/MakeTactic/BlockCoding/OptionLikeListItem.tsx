
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
        {props.item.optionCode}
        {props.item.optionName}
        {props.item.diffRate}
        {props.item.todayClose}
      </span>
    </div>
  );
};

export default OptionLikeListItem;
