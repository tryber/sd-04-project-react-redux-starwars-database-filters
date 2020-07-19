import { combineReducers } from 'redux';
import { planets, planetsLoading, planetsErrored } from './PlanetsReducers';
import { filters } from './FiltersReducer';

const rootReducer = combineReducers({
  planets,
  planetsLoading,
  planetsErrored,
  filters,
});

export default rootReducer;
