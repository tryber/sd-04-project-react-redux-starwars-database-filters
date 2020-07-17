import { combineReducers } from 'redux';
import reducerGetApi from './getApi';
import filters from './reducerFilter';

const rootReducer = combineReducers({ reducerGetApi, filters });

export default rootReducer;
