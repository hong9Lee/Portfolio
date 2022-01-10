import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Test = ({ match, location }) => {

  return (
    <>
      <h3> HI!!</h3>
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
