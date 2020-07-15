import { combineReducers } from 'redux';
import { planets, planetsLoading, planetsErrored } from './PlanetsReducers';

const rootReducer = combineReducers({
  planets,
  planetsLoading,
  planetsErrored,
});

export default rootReducer;
