import React from 'react';
import PropTypes from 'prop-types';

const Button = ({button, onClick}) => {
  return (
    <div
      className={ `button ${button.class}` }
      value={ button.value }
      onClick={ onClick }>
      {button.name}
    </div>
  );
};

Button.propTypes = {
  button: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
