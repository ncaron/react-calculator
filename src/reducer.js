import * as types from './actionTypes';
import initialState from './initialState';

export default function reducer(state = initialState, action) {
  let newState = JSON.parse(JSON.stringify(state));
  const DIGITS = /[0-9]/;
  const OPS = /[/*+-]/;

  switch(action.type) {
    case types.DIGIT_CLICK: {
      if (newState.lastPressed === '=') {
        newState = JSON.parse(JSON.stringify(initialState));
      }

      if (OPS.test(newState.lastPressed)) {
        newState.ops.push(newState.currentDisplay);
        newState.currentDisplay = action.value;
      } else if (newState.currentDisplay === '0') {
        newState.currentDisplay = action.value;
      } else {
        newState.currentDisplay += action.value;
      }

      if (newState.currentDisplay !== '0' || newState.fullOP[newState.fullOP.length - 1] !== '0') {
        newState.fullOP += action.value;
      }

      newState.lastPressed = action.value;

      return newState;
    }

    case types.DOT: {
      const hasDot = newState.currentDisplay.match(/[.]/);

      if (hasDot) {
        return state;
      } else if (newState.fullOP === '') {
        newState.fullOP += '0';
      }

      if (OPS.test(newState.lastPressed)) {
        newState.ops.push(newState.currentDisplay);
        newState.currentDisplay = '0';
        newState.fullOP += '0';
      }

      newState.currentDisplay += action.value;
      newState.fullOP += action.value;
      newState.lastPressed = action.value;

      return newState;
    }

    case types.OP_CLICK: {
      if (newState.lastPressed === '=') {
        newState.fullOP = newState.digits[0];
      }

      if (OPS.test(newState.lastPressed)) {
        return state;
      } else if (DIGITS.test(newState.lastPressed)) {
        newState.digits.push(Number(newState.currentDisplay));
      }

      if (action.value === '*') {
        newState.currentDisplay = 'x';
      } else if (action.value === '/') {
        newState.currentDisplay = '÷';
      } else {
        newState.currentDisplay = action.value;
      }

      newState.lastPressed = action.value;
      newState.fullOP += action.value;

      return newState;
    }

    case types.EQUAL: {
      if (newState.lastPressed === '=') {
        return state;
      }

      newState.digits.push(Number(newState.currentDisplay));

      let equals = newState.digits.shift() || newState.currentDisplay;

      newState.ops.forEach((op) => {
        const num = newState.digits.shift();

        if (op === '+') {
          equals += num;
        } else if (op === '-') {
          equals -= num;
        } else if (op === 'x') {
          equals *= num;
        } else {
          equals /= num;
        }
      });

      equals = Math.round(equals * 100) / 100;
      newState.currentDisplay = String(equals);
      newState.ops = [];
      newState.digits = [equals];
      newState.lastPressed = '=';

      return newState;
    }

    case types.CLEAR: {
      if (DIGITS.test(newState.lastPressed)) {
        newState.fullOP = newState.fullOP.replace(/[0-9.]+$/, '');
        newState.currentDisplay = '0';
      } else if (OPS.test(newState.lastPressed)) {
        newState.digits.pop();
        newState.fullOP = newState.fullOP.replace(/[/*+-]$/, '');
        newState.currentDisplay = newState.fullOP.match(/[0-9.]+$/)[0];
      } else if (newState.lastPressed === '=') {
        return initialState;
      }

      newState.lastPressed = action.value;

      return newState;
    }

    case types.ALL_CLEAR: {
      return initialState;
    }

    default:
      return state;
  }
}
