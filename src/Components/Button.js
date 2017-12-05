import React from 'react';
import PropTypes from 'prop-types';

const Button = ({button, onClick}) => {
  return (
    <button
      id={ button.class }
      className={ `button ${button.class}` }
      value={ button.value }
      onClick={ onClick }>
      {button.name}
    </button>
  );
};

Button.propTypes = {
  button: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
