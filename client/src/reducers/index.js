import {combineReducers} from 'redux';
import inputReducer from './inputReducer';

const rootReducer = combineReducers({
  tasks: inputReducer
})

export default rootReducer;