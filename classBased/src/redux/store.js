import { createStore } from 'redux';
import calculatorReducer from './reducer';

const store = createStore(calculatorReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

export default store;
