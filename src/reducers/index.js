import { combineReducers } from 'redux';
import filters from './listaReducers';

const rootReducer = combineReducers({ filters });

export default rootReducer;
