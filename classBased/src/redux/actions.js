export const ADD_NUMBER = 'ADD_NUMBER';
export const CLEAR = 'CLEAR';
export const OPERATION = 'OPERATION';
export const SET_RESULT = 'SET_RESULT'; // Add this for updating the result

// Add number action
export const addNumber = (number) => ({
  type: ADD_NUMBER,
  payload: number,
});

// Clear action
export const clear = () => ({
  type: CLEAR,
});

// Operation action (for setting the operator)
export const operation = (operator) => ({
  type: OPERATION,
  payload: operator,
});

// Set result action (needed for handling the result state)
export const setResult = (result) => ({
  type: SET_RESULT,
  payload: result,
});
