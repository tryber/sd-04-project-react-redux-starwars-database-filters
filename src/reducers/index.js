import { combineReducers } from 'redux';
import data from './dataReducer';
import filters from './filtersReducer';
import order from './orderReducer';

export default combineReducers({ data, filters, order });
