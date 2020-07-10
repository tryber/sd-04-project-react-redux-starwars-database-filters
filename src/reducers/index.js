import { combineReducers } from 'redux';
import reducerAPI from './reducerAPI';
import filters from './reducerFilterName';

const rootReducer = combineReducers({
  reducerAPI,
  filters,
});

export default rootReducer;
