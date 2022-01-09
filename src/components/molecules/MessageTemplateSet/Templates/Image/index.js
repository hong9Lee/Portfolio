import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
/**
 * Image
 */
const Image = ({ boxStyle, item, viewType }) => {
  const { items, type , id } = item;
  return (
    <>
      <div className="_image_div">
        {items.map((tempItem, idx) => {
          const tempImage = ReactHtmlParser(tempItem.image.image);
          return (
            <div key={`${id}_${idx}`} className="_box">
              <div className="_image_box">
                {/* <img src={tempItem[type].image} alt={tempItem[type].alt} /> */}
                {tempImage}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
Image.propTypes = {
  boxStyle: PropTypes.object,
  item: PropTypes.object,
  viewType: PropTypes.string,
};
Image.defaultProps = {
  boxStyle: {},
  item: {},
  viewType: 'advise', // advise, simulator, knowledge
};

export default Image;
