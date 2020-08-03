import { combineReducers } from 'redux';
import getPlanets from './getPlanets';
import filters from './filters';

const reducers = combineReducers({ getPlanets, filters });

export default reducers;
