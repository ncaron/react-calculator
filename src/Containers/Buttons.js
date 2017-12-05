import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../Components/Button';
import { buttonClick } from '../actions';

const buttons = [
  { name: 'AC', value: 'ac', class: 'allClear' },
  { name: 'CE', value: 'c', class: 'clear' },
  { name: '÷', value: '/', class: 'div' },
  { name: 'x', value: '*', class: 'mult' },
  { name: '+', value: '+', class: 'add' },
  { name: '-', value: '-', class: 'sub' },
  { name: '=', value: '=', class: 'equal' },
  { name: '.', value: '.', class: 'dot' },
  { name: '0', value: '0', class: 'zero' },
  { name: '1', value: '1', class: 'one' },
  { name: '2', value: '2', class: 'two' },
  { name: '3', value: '3', class: 'three' },
  { name: '4', value: '4', class: 'four' },
  { name: '5', value: '5', class: 'five' },
  { name: '6', value: '6', class: 'six' },
  { name: '7', value: '7', class: 'seven' },
  { name: '8', value: '8', class: 'eight' },
  { name: '9', value: '9', class: 'nine' }
];

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.displayButtons = this.displayButtons.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keypress', this.handleKeyPress);
  }

  handleKeyPress(e) {
    e.preventDefault();
    const key = e.key;

    switch (key) {
      case '0': {
        document.getElementById('zero').click();
        break;
      }
      case '1': {
        document.getElementById('one').click();
        break;
      }
      case '2': {
        document.getElementById('two').click();
        break;
      }
      case '3': {
        document.getElementById('three').click();
        break;
      }
      case '4': {
        document.getElementById('four').click();
        break;
      }
      case '5': {
        document.getElementById('five').click();
        break;
      }
      case '6': {
        document.getElementById('six').click();
        break;
      }
      case '7': {
        document.getElementById('seven').click();
        break;
      }
      case '8': {
        document.getElementById('eight').click();
        break;
      }
      case '9': {
        document.getElementById('nine').click();
        break;
      }
      case '.': {
        document.getElementById('dot').click();
        break;
      }
      case '+': {
        document.getElementById('add').click();
        break;
      }
      case '-': {
        document.getElementById('sub').click();
        break;
      }
      case '*': {
        document.getElementById('mult').click();
        break;
      }
      case '/': {
        document.getElementById('div').click();
        break;
      }
      case '=':
      case 'Enter': {
        document.getElementById('equal').click();
        break;
      }
    }
  }

  displayButtons() {
    return (
      buttons.map((button) =>
        <Button key={ button.name } button={ button } onClick={ this.props.buttonClick } />
      )
    );
  }

  render() {
    return (
      <div className="buttons">
        {this.displayButtons()}
      </div>
    );
  }
}

Buttons.propTypes = {
  buttonClick: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({buttonClick}, dispatch);
}

export default connect(null, mapDispatchToProps)(Buttons);
