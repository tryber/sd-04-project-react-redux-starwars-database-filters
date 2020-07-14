import { combineReducers } from 'redux';
import swReducer from './swReducer';
import filterReducer from './filterReducer';

export default combineReducers({ swReducer, filterReducer });
