import { combineReducers } from 'redux';
import requestReducer from './requestReducer';
// import filters from './filterReducer.js';

const rootReducer = combineReducers({
  // filters,
  requestReducer,
});

export default rootReducer;
