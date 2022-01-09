import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import MessageDiv from 'components/molecules/MessageDiv';
import ChatMenu from 'components/molecules/ChatMenu';
import { useSelectChatBottom } from 'modules/hooks';
import AutoComplete from 'components/molecules/AutoComplete';
import { useDispatch, useSelector } from 'react-redux';
import Satisfy from 'components/molecules/Modal/Satisfy';

/**
 * Chatting:Middle
 */
const ChatMiddle = ({ messageSet }) => {
  const satisfyModalStatus = useSelector(state => state.isActive.satisfyModal);

  const messageBoxRef = useRef();
  useSelectChatBottom();

  return (
    <section className="_chat_middle">
      <div className="_message_div">
        <div className="_message_layout scroll_style_messenger" id="scrollToElement" ref={messageBoxRef}>
          {messageSet.map((item, idx) => {
            return <MessageDiv key={item.messageId} message={item} index={idx} />;
          })}
        </div>
      </div>
      <div className="_satisfy_bg" style={{ display: satisfyModalStatus ? 'flex' : 'none' }}>
        <Satisfy />
      </div>
    </section>
  );
};

ChatMiddle.propTypes = {
  messageSet: PropTypes.array,
};
ChatMiddle.defaultProps = {
  messageSet: [],
};
export default ChatMiddle;
