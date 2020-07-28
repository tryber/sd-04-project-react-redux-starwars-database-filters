import { combineReducers } from 'redux';
import filters from './filters';
import apiReducer from './reducer';

export default combineReducers({ apiReducer, filters });
