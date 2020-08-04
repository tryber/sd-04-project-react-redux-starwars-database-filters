import { combineReducers } from 'redux';
import planetsReducer from './planetsReducer';
import filters from './filterNameReducer';

const rootReducer = combineReducers({
  planetsReducer,
  filters,
});

export default rootReducer;
