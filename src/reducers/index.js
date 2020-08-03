import { combineReducers } from 'redux';
import filters from './listaReducers';
import order from './orderFilter';

const rootReducer = combineReducers({ filters, order });

export default rootReducer;
