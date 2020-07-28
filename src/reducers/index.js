import { combineReducers } from 'redux';
import { filters } from './filters';
import { reducerFetch } from './reducerFetch';
import reducerFilter from './reducerFilter';

const rootReducer = combineReducers({ filters, reducerFetch, reducerFilter });

export default rootReducer;
