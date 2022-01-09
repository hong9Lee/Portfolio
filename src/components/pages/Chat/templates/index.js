import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ChatTemplate = ({ messageSet }) => {
  return (
    <div className="frame_set">
      <div className="_container">
        <div>CHAT~~</div>
      </div>
    </div>
  );
};

ChatTemplate.propTypes = {
  messageSet: PropTypes.array,
};

ChatTemplate.defaultProps = {
  messageSet: [],
};
export default ChatTemplate;
