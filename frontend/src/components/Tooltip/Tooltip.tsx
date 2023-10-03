import React, { useState } from "react";
import style from "./Tooltip.module.css";
import Message from "../Message/Message";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Img = styled.img`
  width: 21px;
  height: 21px;
  margin-right: 10px;
`;
const Box = styled.div`
  display: flex;
  margin: 7px;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
`;
const Hr = styled.hr`
  width: 90%;
  border: dashed 0.2px;
  border-color: rgb(210, 189, 233);
`;

const Tooltip = ({ state, children, type }) => {
  const navigate = useNavigate();
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [isMessageVisible, setMessageVisible] = useState(false);

  const toggleTooltip = () => {
    setTooltipVisible(!isTooltipVisible);
  };

  const showMessage = () => {
    setMessageVisible(!isMessageVisible);
  };

  const hideMessage = () => {
    setMessageVisible(false);
  };

  return (
    <div className={style.container}>
      <div
        className={`${style.content}`}
        onClick={() => {
          toggleTooltip();
        }}
      >
        {children}
      </div>
      {isTooltipVisible && (
        <div
          className={`${style.tooltip}`}
          onMouseLeave={() => {
            setTooltipVisible(false);
          }}
          style={{
            left: type === 'detail' ? '-100px' : '-20px'
          }}
        >
          <Box onClick={() => navigate(`/userpage/${39}`)}>
            <Img
              src={`https://j9b210.p.ssafy.io:8443/api/member/profile/${39}`}
              alt="profile"
            />
            <div className={style.my} style={{ margin: "5px 0px 5px 0px" }}>
              프로필 보기
            </div>
          </Box>
          <Hr />
          <Box>
            <Img src="/icon/pen.png" alt="message" />
            <div onClick={() => showMessage()}>쪽지보내기</div>
          </Box>
        </div>
      )}
      {isMessageVisible && (
        <div className={`${style.messageLayer}`} onClick={hideMessage}>
          <div
            className={`${style.message}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Message
              state={{ nickname: state.nickname, id: state.id }}
              onClose={hideMessage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
