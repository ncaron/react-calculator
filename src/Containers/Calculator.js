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

  componentDidUpdate() {
    const screen = document.getElementById('screen');
    screen.scrollTo(screen.scrollWidth, 0);
  }

  render() {
    return (
      <div className="calculator" id="calculator">
        <CalcHeader />
        <Screen currentDisplay={ this.props.currentDisplay } fullOP={ this.props.fullOP } />
        <Buttons />
      </div>
    );
  }
}

Calculator.propTypes = {
  currentDisplay: PropTypes.string.isRequired,
  fullOP: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Calculator);
