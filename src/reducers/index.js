import { combineReducers } from 'redux';
import {
  starWarsAPIReducer,
  filters,
  selectFilter,
  availableOptions,
} from './reducer';

const rootReducer = combineReducers({
  starWarsAPIReducer,
  filters,
  selectFilter,
  availableOptions,
});

export default rootReducer;
