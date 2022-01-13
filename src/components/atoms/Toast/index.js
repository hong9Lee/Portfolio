import React from 'react';
import PropTypes from 'prop-types';

/**
 * Toaster Box
 */
const ToastMessage = (prop) => {
    const { title, contents } = prop;

    return (
      <>
          <div className="_toast_container">
              {prop? <p>{title}<br/>{contents}</p> : <></>}
          </div>
      </>
    );
}

export default ToastMessage;
