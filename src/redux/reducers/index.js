import {combineReducers} from 'redux';
import SReducer from './SReducer';

const rootReducer = combineReducers({
    SR: SReducer
})

export default rootReducer;