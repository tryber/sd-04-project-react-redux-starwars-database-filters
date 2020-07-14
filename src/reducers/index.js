import { combineReducers } from 'redux';

import reducerPlanets from './reducerPlanets';
import filters from './reducerFilter';

const rootReducer = combineReducers({
  reducerPlanets,
  filters,
});

export default rootReducer;