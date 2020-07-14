import { combineReducers } from 'redux';
import swReducer from './swReducer';
import filters from './filters';

const rootReducer = combineReducers({ swReducer, filters });

export default rootReducer;
