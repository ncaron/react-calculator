import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../Components/Button';
import { buttonClick } from '../actions';

const buttons = [
  { name: 'AC', value: 'ac', class: 'allClear' },
  { name: 'C', value: 'c', class: 'clear' },
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
