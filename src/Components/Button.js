import React from 'react';
import PropTypes from 'prop-types';

const Button = ({button}) => {
  return (
    <div className={ `button ${button.class}` }>{button.name}</div>
  );
};

Button.propTypes = {
  button: PropTypes.object.isRequired
};

export default Button;
