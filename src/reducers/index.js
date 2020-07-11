import { combineReducers } from 'redux';
import planetReducer from './planetReducer';

const rootReducers = combineReducers({
  planetReducer,
});

export default rootReducers;
