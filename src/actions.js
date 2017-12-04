import * as types from './actionTypes';

export function buttonClick(e) {
  const value = e.target.getAttribute('value');
  let type;

  if (value.match(/[0-9]/)) {
    type = types.DIGIT_CLICK;
  } else if (value.match(/[/*+-]/)) {
    type = types.OP_CLICK;
  } else if (value === '=') {
    type = types.EQUAL;
  }

  return {
    type,
    value
  };
}
