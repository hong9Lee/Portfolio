import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { chatList } from 'modules/actions/chat';
import IconButton from 'components/atoms/Button/IconButton';
import { autoCompleteList, autoCompleteReset } from 'modules/actions/autoComplete';
import { isActiveQuickMenu, disableAllMenu } from 'modules/actions/statusMenu';
import AutoComplete from 'components/molecules/AutoComplete';
import ChatMenu from 'components/molecules/ChatMenu';

/**
 * Chatting:Footer
 */
const ChatFooter = ({ title }) => {
  /** 입력창 Ref */
  const dispatch = useDispatch();

  const inputTextRef = useRef(null);
  const autoCompleteState = useSelector(state => state.autoComplete.active);
  const status = useSelector(state => state.isActive.quickMenu);

  const handleInput = () => {
    const text = inputTextRef?.current?.value.trim();
    if (text === '') {
      clearInputTextRef();
    } else if (autoCompleteState && text) {
      dispatch(autoCompleteList(text));
    }
  };
  const onClickOut = () => {
    dispatch(disableAllMenu());
  };
  const onSettingMenu = () => {
    dispatch(isActiveQuickMenu());
  };

  const onKeyPressEvt = e => {
    if (e.key === 'Enter' && !e.shiftKey && inputTextRef?.current?.value) {
      onSendMessage();
      clearInputTextRef();
    }
  };

  const clearInputTextRef = () => {
    inputTextRef.current.value = '';
    dispatch(autoCompleteReset());
  };

  const onTest = () => {

  }

  const onSendMessage = () => {
    const value = inputTextRef?.current?.value;
    const paramSet = {
      inType: 'param',
      inStr: value,
    };
    dispatch(chatList(paramSet));
  };
  return (
    <>
      <footer className="_chat_footer">
        <div className="_menu_btn">
          <IconButton
            icon="ri-home-8-line"
            styleDef={{ borderRadius: '40px', border: '0px', backgroundColor: '#fff', color: '#37B7FF', fontSize: '25px' }}
            viewStatus=""
            clickEvt={onSettingMenu}
          />
        </div>

        <div>

          <IconButton
              icon="ri-home-8-line"
              viewStatus=""
              clickEvt={onTest}/>

        </div>


        <div className="_send_div">
          <div className="_send_box">
            <input
              type="text"
              placeholder="질문을 입력해 주세요"
              ref={inputTextRef}
              onKeyPress={onKeyPressEvt}
              onChange={handleInput}
              className="_send_box_input"
            />
            <div className="_icon_set">
              {/* 전송버튼 */}
              <IconButton
                icon="ri-arrow-up-line"
                styleDef={{ borderRadius: '40px', border: '0px', backgroundColor: '#816CFF', color: '#ffffff', fontSize: '25px' }}
                viewStatus=""
                clickEvt={onSendMessage}
              />
            </div>
          </div>
        </div>
        <AutoComplete />
        <div className="_quick_opacity" style={{ display: status ? 'block' : 'none' }} onClick={() => onClickOut()}>
          {status && <ChatMenu />}
        </div>
      </footer>
    </>
  );
};

ChatFooter.propTypes = {
  title: PropTypes.string,
};
ChatFooter.defaultProps = {
  title: '',
};
export default ChatFooter;
