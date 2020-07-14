import { combineReducers } from 'redux';
import { reducerInput } from './reducerInput';
import { reducerFetch } from './reducerFetch';

const rootReducer = combineReducers({ reducerInput, reducerFetch });

export default rootReducer;
