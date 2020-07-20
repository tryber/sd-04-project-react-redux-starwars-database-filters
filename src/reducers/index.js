import { combineReducers } from 'redux';
import apiRequest from './apiRequest';
import filters from './filters';

const rootReducer = combineReducers({ apiRequest, filters });

export default rootReducer;
