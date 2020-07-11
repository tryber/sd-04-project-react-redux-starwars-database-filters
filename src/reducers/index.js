import { combineReducers } from 'redux';
import filters from './swplanets';
import swAPI from './reducerAPI';

const rootReducer = combineReducers({ swAPI, filters });

export default rootReducer;
