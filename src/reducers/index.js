import { combineReducers } from 'redux';
import { filters } from './filters';
import { reducerFetch } from './reducerFetch';

const rootReducer = combineReducers({ filters, reducerFetch });

export default rootReducer;
