import React from 'react';
import Button from './Button';

const buttons = [
  { name: 'AC', class: 'allClear' },
  { name: 'C', class: 'clear' },
  { name: '÷', class: 'div' },
  { name: 'x', class: 'mult' },
  { name: '+', class: 'add' },
  { name: '-', class: 'sub' },
  { name: '=', class: 'equal' },
  { name: '.', class: 'dot' },
  { name: '0', class: 'zero' },
  { name: '1', class: 'one' },
  { name: '2', class: 'two' },
  { name: '3', class: 'three' },
  { name: '4', class: 'four' },
  { name: '5', class: 'five' },
  { name: '6', class: 'six' },
  { name: '7', class: 'seven' },
  { name: '8', class: 'eight' },
  { name: '9', class: 'nine' }
];

function displayButtons() {
  return (
    buttons.map((button) =>
      <Button key={ button.name } button={ button } />
    )
  );
}

const Buttons = () => {
  return (
    <div className="buttons">
      {displayButtons()}
    </div>
  );
};

export default Buttons;
