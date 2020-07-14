import { combineReducers } from 'redux';
import reducerData from './reducerData';
import filters from './reducerFilters';

const rootReducer = combineReducers({ reducerData, filters });

export default rootReducer;
