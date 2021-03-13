import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // chrome developer tools
import rootReducer from './Reducers/index';

const store = createStore(rootReducer, composeWithDevTools());

export default store;

