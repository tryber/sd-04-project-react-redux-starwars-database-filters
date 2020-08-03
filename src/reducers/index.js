import { combineReducers } from 'redux';
import planets from './planets';
import filters from './filters';

const rootReducer = combineReducers({
  planets,
  filters,
});

export default rootReducer;
