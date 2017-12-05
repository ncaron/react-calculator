import React from 'react';
import PropTypes from 'prop-types';

const Screen = ({currentDisplay, fullOP}) => {
  return (
    <div className="screen" id="screen">
      <p className="currentDisplay">{currentDisplay}</p>
      <p className="fullOP">{fullOP}</p>
    </div>
  );
};

Screen.propTypes = {
  currentDisplay: PropTypes.string.isRequired,
  fullOP: PropTypes.string.isRequired
};

export default Screen;
