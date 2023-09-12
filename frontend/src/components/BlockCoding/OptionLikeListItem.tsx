import React, { ChangeEvent, useEffect, useState } from 'react';

//     {item.optioncode}
//     {item.optionname}
//     {item.currate}
//     {item.cost}
const OptionLikeListItem = (props) => {
    const [optioncode, setOptioncode] = useState(props.optioncode);
    const [optionname, setOtionname] = useState(props.optionname);
    const [currate, setCurrate] = useState(props.currate);
    const [cost, setCost] = useState(props.cost);
    
    useEffect(()=>{
        console.log(props)
    },[])

    return (
        <div style={{backgroundColor:"yellow", height:"20px"}}>
            {props.optioncode}
            {optionname}
            {currate}
            {cost}
        </div>

    )
}

export default OptionLikeListItem;