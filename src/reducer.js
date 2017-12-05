import * as types from './actionTypes';
import initialState from './initialState';

export default function reducer(state = initialState, action) {
  let newState = JSON.parse(JSON.stringify(state));
  const DIGITS = /[0-9]/;
  const OPS = /[/*+-]/;

  switch(action.type) {
    case types.DIGIT_CLICK: {
      // If an operation has already been performed and user clicks on a digit
      // instead of OP, resets the state.
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

      // Makes sure you can't enter multiple 0 as first digit.
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
      } else if (newState.lastPressed === '.') {
        newState.currentDisplay += '0';
        newState.fullOP += '0';
        newState.lastPressed = '0';
      } else if (newState.lastPressed === '') {
        newState.fullOP += '0';
        newState.lastPressed = '0';
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
      } else if (newState.lastPressed === '.') {
        newState.currentDisplay += '0';
        newState.fullOP += '0';
      }

      newState.digits.push(Number(newState.currentDisplay));

      let equals = newState.digits.shift();

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

      // Violently shakes if user tries to divide by 0.
      if (equals === Infinity || equals === -Infinity || isNaN(equals)) {
        const buttons = document.getElementsByTagName('button');

        for (let i = 0; i < buttons.length; i++) {
          buttons[i].disabled = true;
        }

        document.getElementById('calculator').classList.add('calculatorShake');
        document.getElementById('error').classList.add('errorFade');

        setTimeout(() => {
          for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
          }

          document.getElementById('calculator').classList.remove('calculatorShake');
          document.getElementById('error').classList.remove('errorFade');
        }, 2000);

        return JSON.parse(JSON.stringify(initialState));
      }

      equals = Math.round(equals * 10000) / 10000;
      newState.currentDisplay = String(equals);
      newState.ops = [];
      newState.digits = [equals];
      newState.lastPressed = '=';

      return newState;
    }

    case types.CLEAR: {
      if (DIGITS.test(newState.lastPressed) || newState.lastPressed === '.') {
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
