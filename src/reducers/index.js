import { combineReducers } from 'redux';
import { starWarsAPIReducer, filters, selectFilter } from './reducer';

const rootReducer = combineReducers({
  starWarsAPIReducer,
  filters,
  selectFilter,
});

export default rootReducer;
