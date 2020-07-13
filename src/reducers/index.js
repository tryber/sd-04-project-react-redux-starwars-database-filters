import { combineReducers } from 'redux';
import filters from './filters';
import SWAPI from './SWAPI';

const rootReducer = combineReducers({
  SWAPI,
  filters,
});

export default rootReducer;
