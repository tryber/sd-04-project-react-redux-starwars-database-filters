import { combineReducers } from 'redux';
import { swapiReducer } from './swapiReducer';
import { filterReducer } from './filterReducer';

const rootReducer = combineReducers({ swapiReducer, filterReducer });

export default rootReducer;
