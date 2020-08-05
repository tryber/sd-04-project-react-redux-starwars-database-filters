import { combineReducers } from 'redux';
import planetsReducer from './planetsReducer';
import filters from './filters';

const rootReducers = combineReducers({
  planetsReducer,
  filters,
});

export default rootReducers;
