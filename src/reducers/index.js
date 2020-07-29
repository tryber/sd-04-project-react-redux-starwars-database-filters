import { combineReducers } from 'redux';
import { swapiReducer } from './swapiReducer';
import { filters } from './filters';

const rootReducer = combineReducers({ swapiReducer, filters });

export default rootReducer;
