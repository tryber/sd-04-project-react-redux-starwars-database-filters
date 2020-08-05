import { combineReducers } from 'redux';
import planetsReducer from './planetsReducer';
import filtersReducers from './filtersReducers';

const rootReducers = combineReducers({
  planetsReducer,
  filtersReducers,
});

export default rootReducers;
