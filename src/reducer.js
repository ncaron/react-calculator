import * as types from './actionTypes';
import initialState from './initialState';

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case types.DIGIT_CLICK: {
      let newState = JSON.parse(JSON.stringify(state));

      if (!newState.lastPressed.match(/[0-9]/)) {
        newState.digits.push(action.value);
      } else {
        newState.digits[newState.digits.length - 1] += action.value;
      }

      newState.fullOP += action.value;
      newState.lastPressed = action.value;

      return newState;
    }

    case types.OP_CLICK: {
      let newState = JSON.parse(JSON.stringify(state));

      if (newState.lastPressed.match(/[/*+-]/)) {
        return state;
      }

      if (newState.digits.length === 0) {
        newState.digits.push(newState.currentResult);
        newState.fullOP = newState.currentResult;
      }

      newState.ops.push(action.value);
      newState.fullOP += action.value;
      newState.lastPressed = action.value;

      return newState;
    }

    case types.EQUAL: {
      let newState = JSON.parse(JSON.stringify(state));

      if (newState.lastPressed === '=') {
        return state;
      }

      newState.digits = newState.digits.map(Number);
      let equals = newState.digits.shift();

      newState.ops.forEach((op) => {
        if (op === '+') {
          equals += newState.digits.shift();
        } else if (op === '-') {
          equals -= newState.digits.shift();
        } else if (op === '*') {
          equals *= newState.digits.shift();
        } else {
          equals /= newState.digits.shift();
        }
      });

      newState.currentResult = String(equals);
      newState.ops = [];
      newState.lastPressed = action.value;

      return newState;
    }
    default:
      return state;
  }
}
