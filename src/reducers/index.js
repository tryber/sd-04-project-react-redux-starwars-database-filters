import { combineReducers } from 'redux';
import planetReducer from './planetReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({ planetReducer, searchReducer });

export default rootReducer;