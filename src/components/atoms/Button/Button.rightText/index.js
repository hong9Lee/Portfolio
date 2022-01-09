import React from 'react';
import PropTypes from 'prop-types';
/**
 * 버튼
 */
const ButtonRightText = ({ label, value, labelIcon, styleDef, viewStatus, onClickEvt, error }) => {
  const set = '';
  return (
    <div className="_btn_right_txt_div" style={styleDef}>
      {viewStatus === '_dim' ? <div className="_dim" /> : ''}
      <div className="_btn_div" onClick={onClickEvt}>
        <div className="_icon">
          <i className={labelIcon} />
        </div>
        <div className="_txt">{label}</div>
      </div>
    </div>
  );
};

ButtonRightText.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  labelIcon: PropTypes.string,
  styleDef: PropTypes.object,
  viewStatus: PropTypes.string,
  onClickEvt: PropTypes.func,
  error: PropTypes.object,
};
ButtonRightText.defaultProps = {
  label: '적용',
  value: '',
  labelIcon: 'ri-close-fill',
  styleDef: {},
  viewStatus: '',
  onClickEvt: () => {},
  error: { error: false, msg: '' },
};

export default ButtonRightText;
