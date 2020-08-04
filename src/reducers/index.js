import { combineReducers } from 'redux';
import planetReducer from './planetReducer';
import filters from './filtersReducer';

const rootReducers = combineReducers({
  planetReducer,
  filters,
});

export default rootReducers;
