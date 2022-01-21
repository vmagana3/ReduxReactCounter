import {createStore} from 'redux';
import rootReducer from '../reducers/index';

const { composeWithDevTools } = require('redux-devtools-extension');

const store = createStore(rootReducer, composeWithDevTools());

export default store;
