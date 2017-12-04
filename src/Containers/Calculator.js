import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CalcHeader from '../Components/CalcHeader';
import Screen from '../Components/Screen';
import Buttons from './Buttons';

class Calculator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="calculator">
        <CalcHeader />
        <Screen currentResult={ this.props.currentResult } fullOP={ this.props.fullOP } />
        <Buttons />
      </div>
    );
  }
}

Calculator.propTypes = {
  currentResult: PropTypes.string.isRequired,
  fullOP: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Calculator);
