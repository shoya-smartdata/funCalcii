import { ADD_NUMBER, CLEAR, OPERATION, SET_RESULT } from '../redux/actions';

const initialState = {
  input: '',
  result: null,
  operator: null,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        input: state.input + action.payload, // Concatenate input
      };
    case CLEAR:
      return {
        ...state,
        input: '',
        result: null,
        operator: null,
      };
    case OPERATION:
      return {
        ...state,
        operator: action.payload,
        result: state.input ? parseFloat(state.input) : state.result, // Save the current input as result before applying the operation
        input: '', // Clear the input field for the next number
      };
    case SET_RESULT:
      return {
        ...state,
        result: action.payload, // Set the final result from the calculation
        input: '', // Clear input after result is set
        operator: null, // Clear operator after the result
      };
    default:
      return state;
  }
};

export default calculatorReducer;
