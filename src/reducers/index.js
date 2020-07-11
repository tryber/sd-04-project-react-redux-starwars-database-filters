import { combineReducers } from 'redux';
import planets from './planetsReducer';
import filters from './filtersReducer';


const rootReducer = combineReducers({
  planets,
  filters,
});

export default rootReducer;
