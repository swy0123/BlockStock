import React, { useState } from 'react';
import style from './Tooltip.module.css';
import Message from '../Message/Message';

const Tooltip = ({ state, children }) => {
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
    <div
      className={style.container}
    >
      <div className={`${style.content}`} onClick={() => {
        toggleTooltip();
      }}>
        {children}
      </div>
      {isTooltipVisible && (
        <div className={`${style.tooltip}`}
        onMouseLeave={() => {
          setTooltipVisible(false);
        }}>
          <div className={style.my} style={{ margin: '5px 0px 5px 0px' }}>상세페이지</div>
          <div style={{ margin: '0px 0px 5px 0px' }}>
            <div onClick={() => showMessage()}>쪽지보내기</div>
          </div>
        </div>
      )}
      {isMessageVisible && (
        <div className={`${style.messageLayer}`} onClick={hideMessage}>
          <div className={`${style.message}`} onClick={(e) => e.stopPropagation()}>
            <Message state={{ nickname: state.nickname, id: state.id }} onClose={hideMessage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
