import { combineReducers } from 'redux';
import planetsReducer from './planetsReducer';

const rootReducers = combineReducers({
  planetsReducer,
});

export default rootReducers;
