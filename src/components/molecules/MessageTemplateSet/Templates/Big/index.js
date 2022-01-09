import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Slide } from 'pure-react-carousel';
import CarouselSlider from 'components/atoms/TemplateCarouselSlider';
/**
 * Large_CardDefault
 */
const LargeCard = ({ boxStyle, item, viewType }) => {
  const { items } = item;
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
          const tempImage = ReactHtmlParser(tempItem.image.image);
          return (
            <Slide key={`slide_${idx}`} className="_large_card" style={slideBoxSetStyle}>
              <div className="_title">
                <div className="_label">
                  <div className="_label_tit" title="">
                    {tempItem.textbox.title}
                  </div>
                  <div className="_label_sub_tit" title="">
                    {tempItem.textbox.desc}
                  </div>
                </div>
              </div>
              <div className="_cont_image">
                <div className="_image_box">
                  {tempImage}
                  {/* <img src={tempItem.image.image} alt={tempItem.image.alt} /> */}
                </div>
              </div>
              <div className="_desc_box">
                <div className="_desc">{tempItem.text.desc}</div>
              </div>
              <div className="link_div">
                <div className="_link_box">상세보기</div>
              </div>
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
LargeCard.propTypes = {
  boxStyle: PropTypes.object,
  item: PropTypes.object,
  viewType: PropTypes.string,
};
LargeCard.defaultProps = {
  boxStyle: { width: 150, margin: 10, height: '220px' },
  item: {},
  viewType: 'advise', // advise, simulator, knowledge
};

export default LargeCard;
