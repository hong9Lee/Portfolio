import React ,{ useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Toaster Box
 */
const ToastMessage = (prop) => {
    const { title, contents } = prop;
    const [isToggled, setIsToggled] = useState(false);
    const removeToggle = () => {
        setIsToggled(!isToggled);
    }

    return (
      <>
          <div className="_toast_container"
               onClick={() => removeToggle()}
               style={{ display: isToggled ? "none" : "" }}
               >
              {prop? <p>{title}<br/>{contents}</p> : <></>}
          </div>
      </>
    );
}

export default ToastMessage;
