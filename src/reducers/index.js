import { combineReducers } from 'redux';
import { swapiReducer } from './swapiReducer';

const rootReducer = combineReducers({ swapiReducer });

export default rootReducer;
