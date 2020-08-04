import { combineReducers } from 'redux';
import generateTable from './generateTable';
import allFilters from './allFilters';

const rootReducer = combineReducers({
  generateTable, allFilters,
});

export default rootReducer;
