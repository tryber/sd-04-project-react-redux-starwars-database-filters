import { combineReducers } from 'redux';
import planetReducer from './planetReducer';
import filters from './searchBarReducer';

const rootReducer = combineReducers({ planetReducer, filters });

export default rootReducer;
