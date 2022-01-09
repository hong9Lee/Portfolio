import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
/**
 * Quick Button
 */
const Button = ({ boxStyle, item, viewType, onClickEvt }) => {
  const { items, id, type } = item;
  return (
    <>
      <div className="_quick_buttons_div">
        {items.map((tempItem, idx) => {
          return (
            <div className="_quick_buttons_area">
              <div key={`${id}_${idx}`} className="_button" style={boxStyle} onClick={e => onClickEvt(tempItem.button.value)}>
                {ReactHtmlParser(tempItem.button?.label || '')}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
Button.propTypes = {
  boxStyle: PropTypes.object,
  item: PropTypes.object,
  viewType: PropTypes.string,
  onClickEvt: PropTypes.func,
};
Button.defaultProps = {
  boxStyle: {},
  item: {},
  viewType: 'advise', // advise, simulator, knowledge
  onClickEvt: null,
};

export default Button;
