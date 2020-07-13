import { combineReducers } from 'redux';
import { reducerInput } from './reducerInput';
import { reducerFetch } from './reducerFetch';

export const rootReducer = combineReducers({ reducerInput, reducerFetch });
