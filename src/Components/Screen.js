import React from 'react';
import PropTypes from 'prop-types';

const Screen = ({currentResult, fullOP}) => {
  return (
    <div className="screen">
      <p className="currentResult">{currentResult}</p>
      <p className="fullOP">{fullOP}</p>
    </div>
  );
};

Screen.propTypes = {
  currentResult: PropTypes.string.isRequired,
  fullOP: PropTypes.string.isRequired
};

export default Screen;
