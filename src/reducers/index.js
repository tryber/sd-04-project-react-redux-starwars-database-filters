import { combineReducers } from 'redux';
import listaReducers from './listaReducers';

const rootReducer = combineReducers({ listaReducers });

export default rootReducer;
