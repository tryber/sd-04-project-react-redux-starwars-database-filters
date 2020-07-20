import { combineReducers } from 'redux';
import filters from './filters';
import api from './api';

export default combineReducers({ filters, api });
