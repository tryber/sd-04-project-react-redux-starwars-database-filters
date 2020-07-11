import { combineReducers } from 'redux';
import reducerAPI from './reducerAPI';
import filters from './reducerFilter';

const rootReducer = combineReducers({
  reducerAPI,
  filters,
});

export default rootReducer;
