import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Template from './templates';

const Test = ({ match, location }) => {
  return (
    <>
      <div>
        <div>
          <Template />
        </div>
      </div>
    </>
  );
};

Test.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
};

Test.defaultProps = {
  match: {},
  location: {},
};
export default Test;
