import { combineReducers } from 'redux';
import reducer from './reducer';
import reducerFilter from './reducerFilter';

const rootReducer = combineReducers({ reducer, reducerFilter });

export default rootReducer;
