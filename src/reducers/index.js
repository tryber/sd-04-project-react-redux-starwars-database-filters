import { combineReducers } from 'redux';
import generateTable from './generateTable';
import filters from './filters';

const rootReducer = combineReducers({
  generateTable, filters,
});

export default rootReducer;
