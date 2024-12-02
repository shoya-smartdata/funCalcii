import React, { Component } from 'react';
import { Howl } from 'howler'; // Import Howler.js
import { connect } from 'react-redux';
import { addNumber, clear, operation, setResult } from '../redux/actions'; // Redux actions

// Load sound
const clickSound = new Howl({
  src: ['./sounds/click1.mp3'], 
  volume: 2,
});

class Calculator extends Component {
  handleButtonClick = (value) => {
    // Play sound on button click
    clickSound.play();

    if (value === 'C') {
      this.props.clear();
    } else if (['+', '-', '*', '/'].includes(value)) {
      this.props.operation(value);
    } else {
      this.props.addNumber(value);
    }
  };

  handleEqualClick = () => {
    const { input, result, operator } = this.props;

    // Play sound on equal button click
    clickSound.play();

    if (input && result !== null && operator) {
      let newResult;
      switch (operator) {
        case '+':
          newResult = result + parseFloat(input);
          break;
        case '-':
          newResult = result - parseFloat(input);
          break;
        case '*':
          newResult = result * parseFloat(input);
          break;
        case '/':
          if (parseFloat(input) !== 0) {
            newResult = result / parseFloat(input);
          } else {
            newResult = 'Error'; // Handle division by zero
          }
          break;
        default:
          return;
      }

      this.props.setResult(newResult.toString()); // Assuming setResult action updates result
     
    }
  };

  render() {
    const { input, result } = this.props;

    return (
      <div className="calculator">
        <div className="screen">
          <input type="text" value={input || result || ''} readOnly />
        </div>
        <div className="buttons">
          <button onClick={() => this.handleButtonClick('1')}>1</button>
          <button onClick={() => this.handleButtonClick('2')}>2</button>
          <button onClick={() => this.handleButtonClick('3')}>3</button>
          <button onClick={() => this.handleButtonClick('+')}>+</button>

          <button onClick={() => this.handleButtonClick('4')}>4</button>
          <button onClick={() => this.handleButtonClick('5')}>5</button>
          <button onClick={() => this.handleButtonClick('6')}>6</button>
          <button onClick={() => this.handleButtonClick('-')}>-</button>

          <button onClick={() => this.handleButtonClick('7')}>7</button>
          <button onClick={() => this.handleButtonClick('8')}>8</button>
          <button onClick={() => this.handleButtonClick('9')}>9</button>
          <button onClick={() => this.handleButtonClick('*')}>*</button>

          <button onClick={() => this.handleButtonClick('0')}>0</button>
          <button onClick={() => this.handleButtonClick('.')}>.</button>
          <button onClick={this.handleEqualClick}>=</button>
          <button onClick={() => this.handleButtonClick('/')}>/</button>

          <button onClick={this.props.clear}>C</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  input: state.input,
  result: state.result,
  operator: state.operator,
});

const mapDispatchToProps = {
  addNumber,
  clear,
  operation,
  setResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
