import { combineReducers } from 'redux';
import filters from './listaReducers';
import OrderFilterReducer from './orderFilter';

const rootReducer = combineReducers({ filters, OrderFilterReducer });

export default rootReducer;
