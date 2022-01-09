import React from 'react';
import PropTypes from 'prop-types';
/**
 * 버튼
 */
const ButtonUnderText = ({ label, value, labelIcon, styleDef, viewStatus, onClickEvt, error,image }) => {
  const set = '';
  return (
    <div className="_btn_under_txt_div" style={styleDef}>
      {viewStatus === '_dim' ? <div className="_dim" /> : ''}
      <div className="_btn_div" onClick={onClickEvt}>
        <div className="_icon">
          {
            labelIcon !== "ri-cloud-line" ? <i className={labelIcon} /> : <div>{image}</div> 
          }
        </div>
        <div className="_txt">{label}</div>
      </div>
    </div>
  );
};

ButtonUnderText.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  labelIcon: PropTypes.string,
  image: PropTypes.string,
  styleDef: PropTypes.object,
  viewStatus: PropTypes.string,
  onClickEvt: PropTypes.func,
  error: PropTypes.object,
};
ButtonUnderText.defaultProps = {
  label: '적용',
  value: '',
  image: '',
  labelIcon: 'ri-cloud-line',
  styleDef: {},
  viewStatus: '',
  onClickEvt: () => {},
  error: { error: false, msg: '' },
};

export default ButtonUnderText;
