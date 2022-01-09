import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { chatList } from 'modules/actions/chat';
import IconButton from 'components/atoms/Button/IconButton';
import {
  SimpleMessage,
  TextMessage,
  ButtonMessage,
  ImageButtonMessage,
  MediaMessage,
  ImageMessage,
  CardDefault,
  BigCard,
  ListBtnCard,
  SmallCard,
  IntroButton,
} from '../Templates/index';
/**
 * BotMessage
 */
const BotMessage = ({ boxStyle, item, responseType }) => {
  const dispatch = useDispatch();

  const onSendMessage = inStr => {
    const paramSet = {
      inType: 'param',
      inStr,
    };
    dispatch(chatList(paramSet));
  };

  const makeKeyVal = (id, idx) => `bot_${id}_${idx}`;

  const setSimpleItem = (message, idx) => {
    if (message) {
      return <SimpleMessage key={makeKeyVal('simple', idx)} item={message} boxStyle={boxStyle} />;
    }
    return false;
  };

  const setTemplateItem = (tempItem, idx) => {
    // console.log(`tempItem:::${JSON.stringify(tempItem)}`);
    const { id } = tempItem;
    const key = makeKeyVal(id, idx);

    if (id === 'textbox') {
      return <TextMessage key={key} item={tempItem} boxStyle={boxStyle} />;
    }
    if (id === 'quick_btn') {
      return <ButtonMessage key={key} item={tempItem} onClickEvt={onSendMessage} boxStyle={boxStyle} />;
    }
    if (id === 'image') {
      return <ImageMessage key={key} item={tempItem} />;
    }
    if (id === 'image_btn') {
      return <ImageButtonMessage key={key} item={tempItem} onClickEvt={onSendMessage} boxStyle={boxStyle} />;
    }
    if (id === 'intro_btn') {
      return <IntroButton key={key} item={tempItem} onClickEvt={onSendMessage} boxStyle={boxStyle} />;
    }
    if (id === 'media') {
      return <MediaMessage key={key} item={tempItem} />;
    }
    if (id === 'big_card') {
      return <BigCard key={key} item={tempItem} boxStyle={{ width: 470, margin: 10, height: '410px' }} />;
    }
    if (id === 'small_card') {
      return <SmallCard key={key} item={tempItem} boxStyle={{ width: 230, margin: 10, height: '230px' }} />;
    }
    if (id === 'list_btn') {
      return <ListBtnCard key={key} item={tempItem} boxStyle={{ width: 470, margin: 10, height: '280px' }} />;
    }
    if (id === 'card_extend') {
      // return <CardExtend key={key} item={tempItem} boxStyle={{ width: 180, margin: 10, height: '240px' }} />;
    }
    if (id === 'custom') {
      // return <CustomerMessage item={item} />;
    }
    return false;
  };
  // console.log('item:', item);
  // set
  return (
    <div className="bot_message_div">
      <div className="_chat_name">
        <div className="_img">
          <img src={item.emotion?.image || '/images/emotion/bot_normal.png'} alt={item.emotion?.type} />
        </div>
        <span>TeAna Talk</span>
      </div>
      <div className="_chat_message">
        <div className="_chat_message_set">
          {item?.messages?.map((message, idx) => {
            return setSimpleItem(message, idx);
          })}

          {/* items Template */}
          {item?.templateMessages?.map((tempItem, idx) => {
            return setTemplateItem(tempItem, idx);
          })}

          {item.createAt && (
            <div className="_chat_message_bottom">
              <div className="_chat_message_bottom_div">
                <div className="_chat_time">{item.createAt}</div>
                <div className="_chat_opinion">
                <IconButton icon="ri-mail-send-line" styleDef={{width:'15px', height:'16px', float:'left',fontSize:'13px'}} viewStatus="" />
                  의견남기기
                  </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
BotMessage.propTypes = {
  boxStyle: PropTypes.object,
  item: PropTypes.object,
  responseType: PropTypes.string,
};
BotMessage.defaultProps = {
  boxStyle: {},
  item: {
    messageId: '',
    emotion: '',
    createAt: '2021.01.01 00:00',
    messages: [],
    templateMessages: [],
  },
  responseType: 'query',
};

export default BotMessage;
