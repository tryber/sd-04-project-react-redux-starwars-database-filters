import { combineReducers } from 'redux';
import getPlanets from './getPlanets';
import filterPlanets from './filters';

const rootReducer = combineReducers({
  getPlanets, filterPlanets,
});

export default rootReducer;
