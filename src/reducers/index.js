import { combineReducers } from 'redux';
import starWarsReducer from './starWars';

const rootReducer = combineReducers({ starWarsReducer });

export default rootReducer;
