import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import CarouselSlider from 'components/atoms/TemplateCarouselSlider';
import { Slide } from 'pure-react-carousel';
import ReactHtmlParser from 'react-html-parser';

/**
 * Text
 */
const ListButton = ({ boxStyle, item, viewType, onClickEvt }) => {
  const { items, type } = item;
  const slideBoxSet = boxStyle;
  const slideBoxSetStyle = {
    width: `${slideBoxSet.width}px`,
    height: slideBoxSet.height,
    marginRight: `${slideBoxSet.margin}px`,
  };
  const slideLength = items.length;
  const constentSet = () => {
    return (
      <>
        {items.map((tempItem, idx) => {
          console.log(tempItem.button);
          return (
            <Slide key={`slide_${idx}`} className="_list_btn_card" style={slideBoxSetStyle}>
              <div className="_list_btn_card_title">
                <div className="_title">{ReactHtmlParser(tempItem.text.desc)}</div>
              </div>
              {tempItem.button.map((data, number) => {
                return (
                  <div className="_list_btn_card_button">
                    <div className="_button">{ReactHtmlParser(data.label)}</div>
                  </div>
                );
              })}
            </Slide>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="_carousel_button_div">
        <CarouselSlider slideBoxSet={slideBoxSet} contentCount={slideLength} contentSet={constentSet} />
      </div>
    </>
  );
};
ListButton.propTypes = {
  boxStyle: PropTypes.object,
  item: PropTypes.object,
  viewType: PropTypes.string,
  onClickEvt: PropTypes.func,
};
ListButton.defaultProps = {
  boxStyle: {},
  item: {},
  viewType: 'advise', // advise, simulator, knowledge
  onClickEvt: null,
};

export default ListButton;
